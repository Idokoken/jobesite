import React from "react";
import styled from "styled-components";
import {tablet} from '../Responsive'
const Landing = () => {
	
	const Wrapper = styled.main`
	margin: 0;
	padding: 0;
	width: 100%;
	
	button{
		background: #528;
		color: white;
		margin: 10px;
		margin-left: 0;
	}
	.hero{
		width: 100%;
		text-align: center;
		margin-top: 20px;
	}
	`
 const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
    color: #673480;
    height: 60px;
    
    img {
    	border-radius: 10px;
    	margin: 0 20px;
    }
    h1{
    	color: #528;
    }
	  `
  const Container = styled.div`
    background: #DCE4E2;
    margin: 0;
    padding: 10px;
    min-height: calc(100vh - 60px); 
    width: 100%;
    ${tablet({display: 'flex'})}
    
    div {
    	width: 100%;
    	
    }
  `

  return (
    <Wrapper>
      <Nav className="text-info">
        <img src='/images/logo.png' alt="brand" height="30" width="30" />
        <h1>World jobs</h1>  
      </Nav>
      <Container className="container page">
        <div className="info">
          <h2>Job Tracking App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris- nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn">Login/Register</button>
        </div>
        <div className='hero'>
        <img src='/images/main.jpg' alt="job hunt" className="main-img" />
        </div>
      </Container>
    </Wrapper>
  );
};



export default Landing;