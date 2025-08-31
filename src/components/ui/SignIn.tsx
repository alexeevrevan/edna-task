import React, { MouseEvent } from "react";
import styled from "styled-components";

const SignInWrapper = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #000;
  font-weight: 400;
`;

const SignInLink = styled.a`
  color: black;
  margin-left: 3px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

interface SignInComponentProps {
  text?: string;
  linkText?: string;
  linkhref?: string;
  onLinkClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const SignInComponent: React.FC<SignInComponentProps> = ({
  text = "Еще нет аккаунта?",
  linkText = "Зарегистрируйтесь",
  linkhref = "/",
  onLinkClick,
}) => {
  return (
    <SignInWrapper>
      {text}
      <SignInLink href={linkhref} onClick={onLinkClick}>
        {linkText}
      </SignInLink>
    </SignInWrapper>
  );
};

export default SignInComponent;
