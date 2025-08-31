import React from "react";
import styled from "styled-components";

interface SubmitButtonProps {
  value?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
}

const StyledSubmitButton = styled.input.attrs<SubmitButtonProps>({
  type: "submit",
})<SubmitButtonProps>`
  width: ${({ width }) => width || "85px"};
  height: ${({ height }) => height || "36px"};
  background: #121212;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #333;
  }

  &:active {
    background: #000;
  }
`;

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  value = "Войти",
  width,
  height,
  className,
  onClick,
  ...props
}) => {
  return (
    <StyledSubmitButton
      value={value}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      {...props}
    />
  );
};
