import React from "react";
import styled from "styled-components";
import ErrorImage from "../assets/images/error.svg";

interface ErrorBannerProps {
  errorMessage: string;
}

const ErrorBannerWrapper = styled.div`
  background: #e85c4a;
  display: flex;
  width: 339px;
  height: 80px;
  color: #e11900;
  font-size: 14px;
  font-weight: 400;
  border-radius: 16px;

  & img {
    position: relative;
    height: 24px;
    width: 24px;
    left: 20px;
    top: 20px;
  }

  & div {
    top: 6px;
    left: 28px;
    width: 300px;
    position: relative;
    color: white;
  }
`;

const ErrorBanner: React.FC<ErrorBannerProps> = ({ errorMessage }) => {
  return (
    <ErrorBannerWrapper>
      <img src={ErrorImage} alt="Error" />
      <div>
        <p>{errorMessage}</p>
      </div>
    </ErrorBannerWrapper>
  );
};

export default ErrorBanner;
