import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import Landing from "./components/";
import {ErrorPage, Login, Register, Dashboard, Landing} from './pages/Index'
//import styled from "styled-components";


function App() {
	
  return (
  
    <Router>
     <Routes> 
      <Route path='/' element={<Landing />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<ErrorPage />} />
     </Routes>
    </Router>
  );
}

export default App;