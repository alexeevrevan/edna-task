import React from "react";
import styled from "styled-components";

const InputText = styled.input`
  background: #f4f4f4;
  height: 36px;
  width: 100%;
  border-radius: 4px;
  border: none;
  padding-left: 16px;
  font-weight: 500;

  &.inValid {
    background-color: #ffefed;
    border: none;
    outline: 2px solid #e85c4a;
  }
`;

export default InputText;
