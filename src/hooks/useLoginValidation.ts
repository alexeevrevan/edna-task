import { useState } from "react";
import { LoginFormValues, ValidationErrors } from "../types/form";

export const useLoginValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (data: LoginFormValues) => {
    const newErrors: ValidationErrors = {};

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!data.email) {
      newErrors.email = "Email обязателен";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Неверное имя пользователя";
    }

    if (!data.password) {
      newErrors.password = "Пароль обязателен";
    } else if (
      data.email !== "san73rus@gmail.com" ||
      data.password !== "123123"
    ) {
      newErrors.password = "Неверное имя пользователя или пароль";
    }

    if (!data.captcha) {
      newErrors.captcha = "Необходимо заполнить это поле";
    } else if (data.captcha !== "50305") {
      newErrors.topBanner =
        "Указан неверный код с картинки. Пожалуйста, повторите попытку";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearErrors = (): void => setErrors({});

  return {
    errors,
    validateForm,
    clearErrors,
  };
};
