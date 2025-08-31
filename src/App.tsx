import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "./services/authService";
import { useLoginValidation } from "./hooks/useLoginValidation";
import { usePasswordVisibility } from "./hooks/usePasswordVisibility";
import { LoginFormValues } from "./types/form";

import Wrapper from "./components/Wrapper";
import Window from "./components/Main_window";
import Title from "./components/Title_component";
import ErrorBanner from "./components/Error_Banner";
import Bottom_Frame from "./components/Bottom_Frame";
import Forgot_Password from "./components/Forgot_Password";
import Styled_Submit from "./components/Styled_Submit";
import Sign_In from "./components/Sign_In";
import Footer from "./components/Footer";
import Image_Wrapper from "./components/Image_wrapper";
import Login_Frame from "./components/Login_Frame";

import edna_logo_gif from "../images/edna_gif.gif";
import Captcha from "../images/Captcha.png";
import CustomInputField from "./components/ui/CustomInputField";

export const App = () => {
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
    <div>
      <Wrapper>
        <Window>
          <Image_Wrapper>
            <img
              src={edna_logo_gif}
              style={{ width: "400px", height: "400px" }}
              alt=""
            />
          </Image_Wrapper>

          <Login_Frame>
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

              <img
                src={Captcha}
                style={{ position: "relative", left: "-3px" }}
                alt=""
              />

              <CustomInputField
                label="Цифры с картинки"
                placeholder="00000"
                register={register}
                fieldName="captcha"
                error={errors.captcha}
              />

              <Bottom_Frame>
                <Forgot_Password href="/">Забыли пароль?</Forgot_Password>
                <Styled_Submit />
              </Bottom_Frame>
            </form>

            <Sign_In>
              Еще нет аккаунта?
              <a href="/" style={{ color: "black", marginLeft: "3px" }}>
                Зарегистрируйтесь
              </a>
            </Sign_In>
          </Login_Frame>
        </Window>
      </Wrapper>
      <Footer />
    </div>
  );
};
