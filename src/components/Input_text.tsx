import React from "react";
import styled from "styled-components";

const InputText = styled.input`
  background: #F4F4F4;
  height: 36px;
  width: 100%;
  border-radius: 4px;
  border: none ;
  padding-left: 16px;
  font-weight: 500;
  
  &.inValid{
    background-color: #FFEFED;
    border: none;
    outline: 2px solid #E85C4A;
  }
`



export default InputText;