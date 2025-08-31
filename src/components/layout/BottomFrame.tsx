import React, { ReactNode } from "react";
import styled from "styled-components";

interface BottomFrameProps {
  children: ReactNode;
  width?: string;
  height?: string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  className?: string;
  gap?: string;
}

const StyledBottomFrame = styled.div<{
  $width?: string;
  $height?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $gap?: string;
}>`
  width: ${({ $width }) => $width || "320px"};
  height: ${({ $height }) => $height || "60px"};
  display: flex;
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  gap: ${({ $gap }) => $gap || "10px"};
`;

export const BottomFrame: React.FC<BottomFrameProps> = ({
  children,
  width,
  height,
  justifyContent,
  alignItems,
  className,
  gap,
  ...props
}) => {
  return (
    <StyledBottomFrame
      $width={width}
      $height={height}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
      className={className}
      {...props}
    >
      {children}
    </StyledBottomFrame>
  );
};
