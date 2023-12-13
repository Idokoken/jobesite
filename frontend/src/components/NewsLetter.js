import React from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Libre Baskerville", serif;
  background-image: url("/images/noise.png");

  .newsletter {
    padding: 30px;
    color: white;
    /* background: pink; */
  }

  h5 {
    margin: 0;
    margin-bottom: 10px;
    color: white;
  }
  .subscribe {
    display: flex;
    margin-top: 20px;
  }
  input {
    padding: 8px 5px;
    padding-left: 15px;
    width: 150px;
    border: none;
    border-radius: 20px 0 0 20px;
    ${tablet({ width: "250px" })}
  }
  button {
    padding: 8px 5px;
    padding-right: 15px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 0 20px 20px 0;
    font-style: italic;
  }
`;

function NewsLetter() {
  return (
    <Wrapper>
      <div className="newsletter">
        <h5>Subscribe to job alert</h5>
        <h5>Join our happy Subrcribers</h5>
        <div className="subscribe">
          <input type="email" placeholder="enter email" />
          <button>Subscribe</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default NewsLetter;
