import React, { ReactNode } from "react";
import {
  Inner,
  Pane,
  Image,
  Description,
  Title,
  Text,
  TechTabContainer,
  TechTab,
  TechTabImage,
  TechTabText,
  Button,
  ButtonContainer,
} from "./project";

interface IProps {
  children?: ReactNode | [];
  [x: string]: any;
}

export default function Project({ children, ...restProps }: IProps) {
  return <Inner {...restProps}>{children}</Inner>;
}

Project.Pane = function ProjectPane({ children, ...restProps }: IProps) {
  return <Pane {...restProps}>{children}</Pane>;
};

Project.Image = function ProjectImage({ ...restProps }: IProps) {
  return <Image {...restProps} />;
};

Project.Description = function ProjectDescription({ children, ...restProps }: IProps) {
  return <Description {...restProps}>{children}</Description>;
};

Project.Title = function ProjectTitle({ children, ...restProps }: IProps) {
  return <Title {...restProps}>{children}</Title>;
};

Project.Text = function ProjectText({ children, ...restProps }: IProps) {
  return <Text {...restProps}>{children}</Text>;
};

Project.TechTabContainer = function ProjectTechTabContainer({ children, ...restProps }: IProps) {
  return <TechTabContainer {...restProps}>{children}</TechTabContainer>;
};

Project.TechTab = function ProjectTechTab({ children, ...restProps }: IProps) {
  return <TechTab {...restProps}>{children}</TechTab>;
};

Project.TechTabText = function ProjectTechTabText({ children, ...restProps }: IProps) {
  return <TechTabText {...restProps}>{children}</TechTabText>;
};

Project.TechTabImage = function ProjectTechTabImage({ children, ...restProps }: IProps) {
  return <TechTabImage {...restProps} />;
};

Project.ButtonContainer = function ProjectButtonContainer({ children, ...restProps }: IProps) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

Project.Button = function ProjectButton({ children, ...restProps }: IProps) {
  return <Button {...restProps}>{children}</Button>;
};
