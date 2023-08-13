import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  .dashboard {
    min-height: 60vh;
  }
`;

const Dashboard = () => {
  //	const [val, setValue] = useState('')
  const getMsg = async () => {
    try {
      const resp = await axios.get("/api/v1");
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMsg();
  }, []);

  return (
    <Wrapper>
      <Header />
      <div className="dashboard p-4">
        <h2>dashboard</h2>
        <h3>hello home</h3>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Dashboard;
