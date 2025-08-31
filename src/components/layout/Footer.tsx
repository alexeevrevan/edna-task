import React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContent>
        © 2005 – 2020 edna <a href="/support">Поддержка</a>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  height: 40px;
  background: #121212;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  position: fixed;
  font-family: "Noto Sans", sans-serif;
`;

const FooterContent = styled.div`
  margin-left: 234px;
  color: #b7b7b7;
  font-size: 14px;
  font-weight: 400;

  a {
    color: #e5e5e5;
    margin-left: 3px;
    text-decoration: none;
  }
`;

export default Footer;
