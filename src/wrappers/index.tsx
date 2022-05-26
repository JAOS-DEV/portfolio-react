import React, { ReactNode } from "react";
import { Container } from "./mainWrapper";

interface IProps {
  children?: ReactNode | [];
  [x: string]: any;
}

function MainWrapper({ children, ...restProps }: IProps) {
  return <Container {...restProps}>{children}</Container>;
}

export default MainWrapper;
