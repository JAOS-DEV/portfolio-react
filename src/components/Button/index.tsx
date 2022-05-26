import React, { ReactNode } from "react";
import { BackToTopButton } from "./BackToTopButton";

interface IProps {
  children?: ReactNode | [];
  isShown: string;
  [x: string]: any;
}
function Button({ children, isShown, ...restProps }: IProps) {
  return <BackToTopButton {...restProps}>{children}</BackToTopButton>;
}

export default Button;
