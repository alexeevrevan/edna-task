import React, { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  children: ReactNode;
  size?: string;
  weight?: number;
  color?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const StyledTitle = styled.h1<{
  $size?: string;
  $weight?: number;
  $color?: string;
  $align?: string;
}>`
  font-size: ${({ $size }) => $size || "24px"};
  text-align: ${({ $align }) => $align || "center"};
  font-weight: ${({ $weight }) => $weight || 700};
  color: ${({ $color }) => $color || "#000"};
  margin: 0;
  padding: 0;
`;

export const Title: React.FC<TitleProps> = ({
  children,
  size,
  weight,
  color,
  align,
  className,
  ...props
}) => {
  return (
    <StyledTitle
      $size={size}
      $weight={weight}
      $color={color}
      $align={align}
      className={className}
      {...props}
    >
      {children}
    </StyledTitle>
  );
};
