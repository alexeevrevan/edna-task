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
import Input_Field from "./components/Input_Field";
import Small_Grey_Text from "./components/Small_Grey_Text";
import Input_text from "./components/Input_text";
import Visibility from "./components/Visibility";
import Bottom_Frame from "./components/Bottom_Frame";
import Forgot_Password from "./components/Forgot_Password";
import Styled_Submit from "./components/Styled_Submit";
import ErrorText from "./components/Error_Text";
import Sign_In from "./components/Sign_In";
import Footer from "./components/Footer";
import Footer_Text from "./components/Footer_Text";
import Image_Wrapper from "./components/Image_wrapper";
import Login_Frame from "./components/Login_Frame";

import edna_logo_gif from "../images/edna_gif.gif";
import Captcha from "../images/Captcha.png";
import Visibility_On from "../images/visibility-on.svg";
import Visibility_Off from "../images/visibility-off.svg";
import ErrorImage from "../images/error.svg";

export const App = () => {
  const { register, handleSubmit, reset } = useForm<LoginFormValues>({
    mode: "onSubmit",
  });

  const { errors, validateForm, clearErrors } = useLoginValidation();
  const { isVisible, toggle, type: passwordType } = usePasswordVisibility();

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
                <ErrorBanner>
                  <img src={ErrorImage} alt="" />
                  <div>
                    <p>{errors.topBanner}</p>
                  </div>
                </ErrorBanner>
              )}

              <Input_Field>
                <Small_Grey_Text className={errors.email ? "inValid" : "Valid"}>
                  Е-mail
                </Small_Grey_Text>
                <Input_text
                  className={errors.email ? "inValid" : "Valid"}
                  placeholder="company.com"
                  {...register("email")}
                />
                <div style={{ height: "16px" }}>
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </div>
              </Input_Field>

              <Input_Field>
                <Small_Grey_Text
                  className={errors.password ? "inValid" : "Valid"}
                >
                  Пароль
                </Small_Grey_Text>
                <Input_text
                  className={errors.password ? "inValid" : "Valid"}
                  placeholder="●●●●●●●●●●●●●●●●"
                  type={passwordType}
                  {...register("password")}
                />

                <Visibility
                  src={isVisible ? Visibility_Off : Visibility_On}
                  onClick={toggle}
                />
              </Input_Field>

              {errors.password && (
                <ErrorText style={{ width: "210px", marginTop: "-15px" }}>
                  {errors.password}
                </ErrorText>
              )}

              <img
                src={Captcha}
                style={{ position: "relative", left: "-3px" }}
                alt=""
              />

              <Input_Field>
                <Small_Grey_Text
                  className={errors.captcha ? "inValid" : "Valid"}
                >
                  Цифры с картинки
                </Small_Grey_Text>
                <Input_text
                  className={errors.captcha ? "inValid" : "Valid"}
                  placeholder="00000"
                  {...register("captcha")}
                />
                <div style={{ height: "12px", alignSelf: "stretch" }}>
                  {errors.captcha && <ErrorText>{errors.captcha}</ErrorText>}
                </div>
              </Input_Field>

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
      <Footer>
        <Footer_Text>
          © 2005 – 2020 edna{" "}
          <a
            href="/"
            style={{
              color: "#E5E5E5",
              marginLeft: "3px",
              textDecoration: "none",
            }}
          >
            Поддержка
          </a>
        </Footer_Text>
      </Footer>
    </div>
  );
};
