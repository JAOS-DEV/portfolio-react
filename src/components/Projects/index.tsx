import React, { ReactNode } from "react";
import { Container, Title } from "./Projects";

interface IProps {
  children?: ReactNode;
  [x: string]: any;
}

export default function Projects({ children, ...restProps }: IProps) {
  return (
    <Container id="projects-section" {...restProps}>
      <Title>PROJECTS</Title>
      {children}
    </Container>
  );
}
