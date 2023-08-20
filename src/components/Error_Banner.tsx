import React from "react";
import styled from "styled-components";


const ErrorBanner = styled.div`
  background: #E85C4A;
  display: flex;
  width: 339px;
  height: 80px;
  color: #E11900;
  font-size: 14px;
  font-weight: 400;
  border-radius: 16px;
  
  & img{
    position: relative;
    height: 24px;
    width: 24px;
    left: 20px;
    top: 20px
  }
  
  & div{
    top: 6px;
    left: 28px;
    width: 300px;
    position: relative;
    color: white;
  }
`







export default ErrorBanner