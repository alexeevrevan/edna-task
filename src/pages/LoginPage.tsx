import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../services/authService";
import { useLoginValidation } from "../hooks/useLoginValidation";
import { LoginFormValues } from "../types/form";
import { AuthLayout } from "../components/layout/AuthLayout";
import ErrorBanner from "../components/ui/ErrorBanner";
import Forgot_Password from "../components/Forgot_Password";
import SignInComponent from "../components/ui/SignIn";
import Footer from "../components/layout/Footer";
import edna_logo_gif from "../assets/images/edna_gif.gif";
import Captcha from "../assets/images/Captcha.png";
import CustomInputField from "../components/ui/CustomInputField";
import { ImageContainer } from "../components/ImageContainer/ImageContainer";
import { SubmitButton } from "../components/SubmitButton/SubmitButton";
import { Title } from "../components/Typography/Title";
import { LoginFrame } from "../components/layout/LoginFrame";
import { BottomFrame } from "../components/layout/BottomFrame";

export const LoginPage: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<LoginFormValues>({
    mode: "onSubmit",
  });

  const { errors, validateForm, clearErrors } = useLoginValidation();

  const onSubmit = async (data: LoginFormValues) => {
    clearErrors();

    if (validateForm(data)) {
      try {
        const result = await loginUser(data);
        alert(JSON.stringify(result));
        reset();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <AuthLayout>
        <ImageContainer src={edna_logo_gif} alt="Edna Logo" />
        <LoginFrame>
          <Title>Вход в аккаунт</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.topBanner && (
              <ErrorBanner errorMessage={errors.topBanner} />
            )}
            <CustomInputField
              label="Е-mail"
              placeholder="company.com"
              register={register}
              fieldName="email"
              error={errors.email}
            />
            <CustomInputField
              label="Пароль"
              placeholder="●●●●●●●●●●●●●●●●"
              type="password"
              register={register}
              fieldName="password"
              error={errors.password}
              isPassword
            />
            <img src={Captcha} />
            <CustomInputField
              label="Цифры с картинки"
              placeholder="00000"
              register={register}
              fieldName="captcha"
              error={errors.captcha}
            />
            <BottomFrame>
              <Forgot_Password href="/">Забыли пароль?</Forgot_Password>
              <SubmitButton />
            </BottomFrame>
          </form>
          <SignInComponent text="Уже есть аккаунт?" linkText="Войдите" />
        </LoginFrame>
      </AuthLayout>
      <Footer />
    </>
  );
};
