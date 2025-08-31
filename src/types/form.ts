export interface LoginFormValues {
  email: string;
  password: string;
  captcha: string;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  captcha?: string;
  topBanner?: string;
}
