import { useState } from "react";

export const usePasswordVisibility = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggle = () => setIsVisible((prev: boolean) => !prev);

  return {
    isVisible,
    toggle,
    type: isVisible ? "text" : "password",
  };
};
