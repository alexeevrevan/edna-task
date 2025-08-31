import { useState } from "react";
import Joi from "joi";
import { LoginFormValues, ValidationErrors } from "../types/form";

export const useLoginValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const loginSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: ["com", "ru", "net"] } })
      .required()
      .messages({
        "string.email": "Неверный формат email",
        "string.empty": "Email обязателен",
        "any.required": "Email обязателен",
      }),

    password: Joi.string().required().messages({
      "string.empty": "Пароль обязателен",
      "any.required": "Пароль обязателен",
    }),

    captcha: Joi.string().required().messages({
      "string.empty": "Необходимо заполнить это поле",
    }),
  });

  const validateForm = (data: LoginFormValues) => {
    setIsSubmitted(true);

    if (!data.email) {
      setErrors({ email: "Email обязателен" });
      return false;
    }

    const emailValidation = loginSchema.extract("email").validate(data.email);
    if (emailValidation.error) {
      setErrors({ email: emailValidation.error.details[0].message });
      return false;
    }

    if (!data.password) {
      setErrors({ password: "Пароль обязателен" });
      return false;
    }

    if (data.password !== "123123" || data.email !== "san73rus@gmail.com") {
      setErrors({ password: "Неверное имя пользователя или пароль" });
      return false;
    }

    if (!data.captcha) {
      setErrors({ captcha: "Необходимо заполнить это поле" });
      return false;
    }

    const captchaValidation = loginSchema
      .extract("captcha")
      .validate(data.captcha);
    if (captchaValidation.error) {
      setErrors({ captcha: captchaValidation.error.details[0].message });
      return false;
    }

    if (data.captcha !== "50305") {
      setErrors({
        topBanner:
          "Указан неверный код с картинки. Пожалуйста, повторите попытку",
      });
      return false;
    }

    setErrors({});
    return true;
  };

  const validateField = (fieldName: keyof LoginFormValues, value: string) => {
    if (!isSubmitted) return;

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });

    switch (fieldName) {
      case "email":
        if (!value) {
          setErrors({ email: "Email обязателен" });
          return;
        }

        const emailValidation = loginSchema.extract("email").validate(value);
        if (emailValidation.error) {
          setErrors({ email: emailValidation.error.details[0].message });
          return;
        }
        break;

      case "password":
        if (!value) {
          setErrors({ password: "Пароль обязателен" });
          return;
        }
        break;

      case "captcha":
        if (!value) {
          setErrors({ captcha: "Необходимо заполнить это поле" });
          return;
        }

        const captchaValidation = loginSchema
          .extract("captcha")
          .validate(value);
        if (captchaValidation.error) {
          setErrors({ captcha: captchaValidation.error.details[0].message });
          return;
        }
        break;
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
