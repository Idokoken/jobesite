import React, { Component } from "react";
import NewsLetter from "./NewsLetter";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
  color: white;
  font-family: "Libre Baskerville", serif;

  h4 {
    margin-left: 30px;
  }

  .footericon-container {
    display: flex;
    margin-left: 30px;
    margin-top: 20px;
  }
  .icon {
    margin-right: 10px;
    border: 2px solid var(--secondary-color);
    padding: 2px 7px;
    border-radius: 50%;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <NewsLetter />
        <div className="item1">Home</div>
        <div className="item2">
          <h4 className="mt-4">Follow Wjobs</h4>
          <div className="footericon-container">
            <div className="icon">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center">
          <em>&copy;2023, All right Reserved to Wjobs</em>
        </p>
      </Wrapper>
    );
  }
}

export default Footer;
