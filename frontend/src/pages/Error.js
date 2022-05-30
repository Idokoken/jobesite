import React from "react";
import {NavLink} from 'react-router-dom'
import styled from "styled-components";
//import {tablet} from '../Responsive'

const ErrorPage = () => {
	const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	
	div{
		width: 300px;
		height: 600px;
	}
	img {
		width: 100%;
	}
	h3{
		font-weight: 600;
		font-size: 32px;
	}
	.btn{
		text-decoration: none;
		font-weight: bold;
		background: #528;
		color: white;
		font-size: 24px;
		padding: 5px;
	}
	`
	
	return (
	 <Wrapper>
	  <div>
	   <img src='/images/notfound2.png' alt='notFound' />
	   <h3>!!!Page not found</h3>
	   <p>We can't seem to find the page you are looking for</p>
	   <NavLink to='/' className='btn'>Back home</NavLink>
	  </div>
	 </Wrapper>
	)
}

export default ErrorPage