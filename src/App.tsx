import Wrapper from "./components/Wrapper";
import Title from "./components/Title_component";
import Window from "./components/Main_window";
import edna_logo_gif from "../images/edna_gif.gif";
import Captcha from "../images/Captcha.png";
import Visibility_On from "../images/visibility-on.svg";
import Visibility_Off from "../images/visibility-off.svg";
import ErrorImage from "../images/error.svg";
import Image_Wrapper from "./components/Image_wrapper";
import Login_Frame from "./components/Login_Frame";
import Input_Field from "./components/Input_Field";
import Small_Grey_Text from "./components/Small_Grey_Text";
import Input_text from "./components/Input_text";
import Bottom_Frame from "./components/Bottom_Frame";
import Forgot_Password from "./components/Forgot_Password";
import Sign_In from "./components/Sign_In";
import Footer from "./components/Footer";
import Footer_Text from "./components/Footer_Text";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Visibility from "./components/Visibility";
import Styled_Submit from "./components/Styled_Submit";
import ErrorText from "./components/Error_Text";
import ErrorBanner from "./components/Error_Banner";

type FormValues = {
  email: string;
  password: string;
  captcha: string;
};

export const App = () => {
  const [open, setOpen] = useState(false);
  const [topBannerError, setTopBannerError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const toggle = () => setOpen(!open);

  const { register, handleSubmit, reset } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const validateForm = (data: FormValues) => {
    setTopBannerError(null);
    setPasswordError(null);
    setEmailError(null);
    setCaptchaError(null);

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(data.email)) {
      setEmailError("Неверное имя пользователя");
      return false;
    }

    if (data.email !== "san73rus@gmail.com") {
      setPasswordError("Неверное имя пользователя или пароль");
      return false;
    }

    if (data.password !== "123123") {
      setPasswordError("Неверное имя пользователя или пароль");
      return false;
    }

    if (!data.captcha) {
      setCaptchaError("Необходимо заполнить это поле");
      return false;
    }

    if (data.captcha !== "50305") {
      setTopBannerError(
        "Указан неверный код с картинки. Пожалуйста, повторите попытку"
      );
      return false;
    }

    return true;
  };

  const onSubmit = (data: FormValues) => {
    if (validateForm(data)) {
      alert(JSON.stringify(data));
      reset();
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
              alt={""}
            />
          </Image_Wrapper>

          <Login_Frame>
            <Title>Вход в аккаунт</Title>

            <form onSubmit={handleSubmit(onSubmit)}>
              {topBannerError && (
                <ErrorBanner>
                  <img src={ErrorImage} />
                  <div>
                    <p>{topBannerError}</p>
                  </div>
                </ErrorBanner>
              )}

              <Input_Field>
                <Small_Grey_Text className={emailError ? "inValid" : "Valid"}>
                  Е-mail
                </Small_Grey_Text>
                <Input_text
                  className={emailError ? "inValid" : "Valid"}
                  placeholder="company.com"
                  {...register("email")}
                />
                <div style={{ height: "16px" }}>
                  {" "}
                  {emailError && <ErrorText>{emailError}</ErrorText>}
                </div>
              </Input_Field>

              <Input_Field>
                <Small_Grey_Text
                  className={passwordError ? "inValid" : "Valid"}
                >
                  Пароль
                </Small_Grey_Text>
                <Input_text
                  className={passwordError ? "inValid" : "Valid"}
                  placeholder="●●●●●●●●●●●●●●●●"
                  type={!open ? "password" : "text"}
                  {...register("password")}
                />

                {!open ? (
                  <Visibility src={Visibility_On} onClick={toggle} />
                ) : (
                  <Visibility src={Visibility_Off} onClick={toggle} />
                )}
              </Input_Field>

              {passwordError && (
                <ErrorText style={{ width: "210px", marginTop: "-15px" }}>
                  {passwordError}
                </ErrorText>
              )}

              <img
                src={Captcha}
                style={{ position: "relative", left: "-3px" }}
                alt={""}
              />

              <Input_Field>
                <Small_Grey_Text className={captchaError ? "inValid" : "Valid"}>
                  Цифры с картинки
                </Small_Grey_Text>
                <Input_text
                  className={captchaError ? "inValid" : "Valid"}
                  placeholder="00000"
                  {...register("captcha")}
                />
                <div style={{ height: "12px", alignSelf: "stretch" }}>
                  {captchaError && <ErrorText>{captchaError}</ErrorText>}
                </div>
              </Input_Field>

              <Bottom_Frame>
                <Forgot_Password href={"/"}>Забыли пароль?</Forgot_Password>
                <Styled_Submit />
              </Bottom_Frame>
            </form>

            <Sign_In>
              Еще нет аккаунта?
              <a href={"/"} style={{ color: "black", marginLeft: "3px" }}>
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
            href={"/"}
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
