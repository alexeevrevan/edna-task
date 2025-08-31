import { LoginFormValues } from "../types/form";

export const loginUser = async (data: LoginFormValues) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        data.email === "san73rus@gmail.com" &&
        data.password === "123123" &&
        data.captcha === "50305"
      ) {
        resolve({
          success: true,
          message: "Вход выполнен успешно",
        });
      } else {
        reject({
          success: false,
          message: "Ошибка входа",
        });
      }
    }, 1000);
  });
};
