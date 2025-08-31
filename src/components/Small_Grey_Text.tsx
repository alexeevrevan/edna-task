import React from "react";
import styled from "styled-components";

const SmallGreyText = styled.p`
  color: #5b5b5b;
  font-size: 12px;
  font-feature-settings: "clig" off, "liga" off;
  font-weight: 400;

  &.inValid {
    color: #e11900;
  }
`;

export default SmallGreyText;
