import React from "react";
import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";
import Visibility_Off from "../../assets/images/visibility-off.svg";
import Visibility_On from "../../assets/images/visibility-on.svg";
import { usePasswordVisibility } from "../../hooks/usePasswordVisibility";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<any>;
  fieldName: string;
  error?: string;
  isPassword?: boolean;
}

const InputFieldWrapper = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: flex-start;
`;

const SmallGreyText = styled.p<{ $isError?: boolean }>`
  color: ${(props) => (props.$isError ? "#e11900" : "#5b5b5b")};
  font-size: 12px;
  font-feature-settings: "clig" off, "liga" off;
  font-weight: 400;
`;

const InputText = styled.input<{ $isError?: boolean }>`
  background: ${(props) => (props.$isError ? "#FFEFED" : "#f4f4f4")};
  height: 36px;
  width: 100%;
  border-radius: 4px;
  border: ${(props) => (props.$isError ? "2px solid #e85c4a" : "none")};
  padding-left: 16px;
  font-weight: 500;
  outline: none;
`;

const ErrorText = styled.p`
  font-weight: 400;
  color: #e11900;
  font-size: 10px;
  margin-top: 4px;
`;

const VisibilityIcon = styled.img`
  position: relative;
  bottom: 28px;
  left: 310px;
  width: 19px;
  height: 19px;
  cursor: pointer;
`;

const CustomInputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  register,
  fieldName,
  error,
  isPassword = false,
}) => {
  const { isVisible, toggle, type: passwordType } = usePasswordVisibility();

  return (
    <InputFieldWrapper>
      <SmallGreyText $isError={!!error}>{label}</SmallGreyText>

      <InputText
        $isError={!!error}
        placeholder={placeholder}
        type={isPassword ? passwordType : type}
        {...register(fieldName)}
      />

      {isPassword && (
        <VisibilityIcon
          src={isVisible ? Visibility_Off : Visibility_On}
          onClick={toggle}
          alt="Toggle password visibility"
        />
      )}

      <div style={{ height: "16px" }}>
        {error && <ErrorText>{error}</ErrorText>}
      </div>
    </InputFieldWrapper>
  );
};

export default CustomInputField;
