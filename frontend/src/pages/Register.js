import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import styled from "styled-components";
import {tablet} from '../Responsive'
import {Alert} from '../components/Index'
import {useAppContext} from '../context/AppContext'

const Register = () => {
	const initialValues = {
		name: '',
		email: '',
		password: '',
		isMember: true,
	}
	const [values, setValues] = useState(initialValues)
	//global state and useNavigate
	const {isLoading, showAlert, displayAlert} = useAppContext()
	const handleChange = (e) => {
	const	{name, value} = e.target
		setValues({...values, [name]: value})
	}
		const handleSubmit = (e) => {
			e.preventDefault()
			const {name, email, password, isMember} = values
			if(!email || !password || (!name && !isMember)) {
			//	alert(values.name)
				displayAlert()
				return
			}
			console.log(values)			
		}
	
	const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	
	.main{
		background: #C6D0CE;
		width: 80%;
		min-height: 400px;
		display: flex;
	 justify-content: space-between;
	 flex-direction: column;
	 align-items: center;
	 border-top: 4px solid #528;
	 ${tablet({width: '50%'})}
	}
	.heading, .login{
		display: flex;
	 justify-content: center;
	 align-items: center;
	 margin: 10px;
	 padding: 0;
	}
	.login{
		margin: 20px;
	}
	img{
		width: 30px;
		width: 30px;
		margin-right: 20px;
	}
	
	h3{
		font-weight: 600;
		font-size: 32px;
		
	}
	h4{
		color: #528;
		font-weight: 600;
		font-size: 20px;
	}
	form{
		display: flex;
		flex-direction: column;
		width: 200px;
	}
	input{
		margin-bottom: 10px;
	}
	.btn{
		font-weight: bold;
		background: #528;
		color: white;
		padding: 5px;
		margin: 10px;
	}
	.link{
		text-decoration: none;
		color: #528;
		margin: 0;
		padding: 0;
	}
	p{
		margin: 0;
		padding: 0;
		margin-right: 5px;
	}
	`
	
	return (
	 <Wrapper>
	  <div className='main'>
	    <div className='heading'>
	     <img src='/images/logo.png' alt='brand' />
	     <h3>World jobs</h3>
	    </div>
	    <h4>Register</h4>
	    {showAlert && <Alert />}
	    <form onSubmit={handleSubmit}>
	      <label>Name</label>
	      <input type='text' value={values.name} name='name' onChange={handleChange} />
	      <label>Email</label>
	      <input type='email' value={values.email} name='email' onChange={handleChange} />
	      <label>Password</label>
	      <input type='password' value={values.password} name='password' onChange={handleChange} />
	      <button className='btn' type='submit'>Submit</button>
	    </form>
	    <div className='login'>
	     <p>Already a member?</p>
	     <NavLink className='link' to='/login'>Login</NavLink>
	    </div>
	  </div>	   
	 </Wrapper>
	)
}

export default Register