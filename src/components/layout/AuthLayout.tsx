import React, { ReactNode } from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  font-family: "Noto Sans", sans-serif;
  display: flex;
  justify-content: center;
`;

const LayoutWindow = styled.div`
  width: 940px;
  height: 690px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface AuthLayoutProps {
  children: ReactNode;
  className?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <LayoutWrapper className={className}>
      <LayoutWindow>{children}</LayoutWindow>
    </LayoutWrapper>
  );
};
