// import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import axios from "axios";
import styled from "styled-components";
import { data } from "../utils/data";
import { Link } from "react-router-dom";
import moment from "moment";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  min-height: 60vh;
  font-family: "Libre Baskerville", serif;

  h4 {
    color: var(--primary-color);
    font-weight: 700;
    margin: 15px 0;
    margin-top: 30px;
  }
  p {
    font-family: "Manrope", sans-serif;
    line-height: 2;
    ${tablet({ fontSize: "18px" })}
  }
  span {
    font-style: italic;
    display: block;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: white;
    background-color: var(--primary-color);
    padding: 7px 20px;
    border-radius: 20px;
  }
  .detail {
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
  }
  .job {
    border-bottom: 2px dotted black;
  }
`;

function Home() {
  //   const [jobData, setJobData] = useState([]);
  //   const apiUrl = process.env.REACT_APP_API_URL;

  // const [currentPage, setCurrentPage] = useState(1);
  // const postPerPage = 5;
  // // const totalPost = posts.length;

  // const startIndex = (currentPage - 1) * postPerPage;
  // const endIndex = startIndex + postPerPage;
  // const postsToDisplay = posts.slice(startIndex, endIndex);

  //   const fetchData = async () => {
  //     try {
  //       const data = axios.get("/api");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const listJobs = data.map((jobs, i) => (
    <div className="job container">
      <h4>{jobs.position}</h4>
      <span className="">
        Posted on {moment(jobs.createdAt).format("DD MMM, YYYY")}
      </span>
      <p>{jobs.jobDescription.slice(0, 230)}</p>
      <div className="detail">
        {" "}
        <Link to={`/job/${jobs._id}`} className="">
          Details
        </Link>
      </div>
    </div>
  ));

  return (
    <>
      <Header />
      <Wrapper>
        <div className="m-4">{listJobs}</div>
        {/* <div className="next">
        <nav aria-label="...">
          <div></div>
          <ul className="pagination">
            <li className="page-item">
              {currentPage !== 0 && currentPage !== 1 && (
                <button onClick={() => setCurrentPage(1)} className="page-link">
                  First
                </button>
              )}
            </li>
            <li className="page-item">
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="page-link"
                >
                  Previous
                </button>
              )}
            </li>

            <li className="page-item">
              {currentPage < Math.ceil(posts.length / postPerPage) && (
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div> */}
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
