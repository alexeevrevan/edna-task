import React from "react";
import styled from "styled-components";
import {App} from "../App";
import {Simulate} from "react-dom/test-utils";

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



//background: #F4F4F4;
///   &:focus{
//     outline: none;
//     border: 2px solid red;
//   }


export default InputText;