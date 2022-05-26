import React, { ReactNode } from "react";
import { Container, Inner, Title, SocialsContainer, SocialIcon, SocialIconImg } from "../Contact/contact";

interface IProps {
  children?: ReactNode | [];
  [x: string]: any;
}

export default function Contact({ children, ...restProps }: IProps) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Inner = function ContactInner({ children, ...restProps }: IProps) {
  return <Inner {...restProps}>{children}</Inner>;
};

Contact.Title = function ContactTitle({ children, ...restProps }: IProps) {
  return <Title {...restProps}>{children}</Title>;
};

Contact.SocialsContainer = function ContactSocialsContainer({ children, ...restProps }: IProps) {
  return <SocialsContainer {...restProps}>{children}</SocialsContainer>;
};

Contact.SocialIcon = function ContactSocialIcon({ children, ...restProps }: IProps) {
  return <SocialIcon {...restProps}>{children}</SocialIcon>;
};

Contact.SocialIconImg = function ContactSocialIconImg({ ...restProps }: IProps) {
  return <SocialIconImg {...restProps} />;
};
