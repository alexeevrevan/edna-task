import React from "react";
import styled from "styled-components";

interface ImageContainerProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
}

const ImageWrapper = styled.div<{
  $width?: string;
  $height?: string;
}>`
  width: ${({ $width }) => $width || "400px"};
  height: ${({ $height }) => $height || "400px"};
  margin-top: 148px;
  margin-bottom: 260px;
  margin-left: 38px;
  margin-right: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt = "",
  width,
  height,
  className,
}) => {
  return (
    <ImageWrapper $width={width} $height={height} className={className}>
      <StyledImage src={src} alt={alt} />
    </ImageWrapper>
  );
};
