import React from "react";
import styled from "styled-components";
//import {tablet} from '../Responsive'
import { useAppContext } from "../context/AppContext";

const Div = styled.div`
  margin: 0;
  padding: 5px;
`;

const Alert = () => {
  const { alertType, alertText } = useAppContext();

  return <Div className={`alert alert-${alertType}`}>{alertText}</Div>;
};

export default Alert;
