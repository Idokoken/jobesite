import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 50vh;

  .social {
    margin-bottom: 2px;
  }
  .social img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: 0 15px;
  }
  .social h4 {
    color: rgb(150, 8, 8);
  }
  .social a:hover {
    opacity: 0.5;
  }
`;

function JobDetails() {
  const [job, setJob] = useState({});
  const { id } = useParams();
  const jobUrl = window.location.href;
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getPost = async () => {
      try {
        const resp = await axios.get(`${apiUrl}/job/${id}`);
        setJob(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [id, apiUrl]);
  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <div className="heading">
            <p>
              <span>Company</span>: {job.company}
            </p>
            <p>
              <span>Job Type</span>: {job.jobType}
            </p>
            <p>
              <span>Job Situation</span>: {job.jobSituation}
            </p>
            <p>
              <span>Job Location</span>: {job.jobLocation}
            </p>
          </div>
          <div className="detail">
            <p>{job.jobDescription}</p>
          </div>
        </div>
        <div className="social my-4">
          <h4 className="mb-3">Share on</h4>
          <Link
            to={`https://twitter.com/intent/tweet?url=${jobUrl}`}
            target="_blank"
          >
            <img src="/images/twitter.png" alt="twitter" />
          </Link>
          <Link
            to={`https://www.facebook.com/sharer/sharer.php?u=${jobUrl}`}
            target="_blank"
          >
            <img src="/images/facebook.png" alt="facebook" />
          </Link>
          <Link
            to={`https://www.linkedin.com/shareArticle?url=${jobUrl}`}
            target="_blank"
          >
            <img src="/images/linkedin.png" alt="linkedIn" />
          </Link>
          <Link to={`whatsapp://send?text=${jobUrl}`} target="_blank">
            <img src="/images/whatsapp.png" alt="whatsapp" />
          </Link>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default JobDetails;
