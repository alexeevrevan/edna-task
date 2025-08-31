import React, { ReactNode } from "react";
import styled from "styled-components";

interface LoginFrameProps {
  children: ReactNode;
  width?: string;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  className?: string;
}

const StyledLoginFrame = styled.div<{
  $width?: string;
  $height?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $marginRight?: string;
}>`
  width: ${({ $width }) => $width || "320px"};
  height: ${({ $height }) => $height || "479px"};
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  margin-right: ${({ $marginRight }) => $marginRight || "79px"};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;

export const LoginFrame: React.FC<LoginFrameProps> = ({
  children,
  width,
  height,
  marginTop,
  marginBottom,
  marginRight,
  className,
  ...props
}) => {
  return (
    <StyledLoginFrame
      $width={width}
      $height={height}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      $marginRight={marginRight}
      className={className}
      {...props}
    >
      {children}
    </StyledLoginFrame>
  );
};
