import { useState } from "react";
import { LoginFormValues, ValidationErrors } from "../types/form";

export const useLoginValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (data: LoginFormValues) => {
    const newErrors: ValidationErrors = {};
    setIsSubmitted(true);

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    // Приоритетная проверка email
    if (!data.email) {
      newErrors.email = "Email обязателен";
      setErrors(newErrors);
      return false;
    }

    if (!emailRegex.test(data.email)) {
      newErrors.email = "Неверный формат email";
      setErrors(newErrors);
      return false;
    }

    // Приоритетная проверка пароля
    if (!data.password) {
      newErrors.password = "Пароль обязателен";
      setErrors(newErrors);
      return false;
    }

    // Проверка аутентификации
    if (data.email !== "san73rus@gmail.com" || data.password !== "123123") {
      newErrors.password = "Неверное имя пользователя или пароль";
      setErrors(newErrors);
      return false;
    }

    // Проверка капчи
    if (!data.captcha) {
      newErrors.captcha = "Необходимо заполнить это поле";
      setErrors(newErrors);
      return false;
    }

    if (data.captcha !== "50305") {
      newErrors.topBanner =
        "Указан неверный код с картинки. Пожалуйста, повторите попытку";
      setErrors(newErrors);
      return false;
    }

    // Если все проверки пройдены
    setErrors({});
    return true;
  };

  const validateField = (fieldName: keyof LoginFormValues, value: string) => {
    // Валидация только после первой попытки сабмита
    if (!isSubmitted) return;

    const newErrors: Partial<ValidationErrors> = {};
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    switch (fieldName) {
      case "email":
        if (!value) {
          newErrors.email = "Email обязателен";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "Неверный формат email";
        }
        break;
      case "password":
        if (!value) {
          newErrors.password = "Пароль обязателен";
        }
        break;
      case "captcha":
        if (!value) {
          newErrors.captcha = "Необходимо заполнить это поле";
        }
        break;
    }

    // Обновляем только если есть новые ошибки
    if (Object.keys(newErrors).length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...newErrors,
      }));
    }
  };

  const clearErrors = (): void => {
    setErrors({});
    setIsSubmitted(false);
  };

  return {
    errors,
    validateForm,
    validateField,
    clearErrors,
    isSubmitted,
  };
};
