import React from "react";
import Contact from "../components/Contact";
import { SocialIconImg } from "../components/Contact/contact";
import MailIcon from "../images/mail-icon.png";
import LinkedInIcon from "../images/linkedin-icon.png";
import GithubIcon from "../images/github-icon.png";

export default function ContactContainer() {
  return (
    <Contact>
      <Contact.Inner>
        <Contact.Title>CONTACT</Contact.Title>
        <Contact.SocialsContainer>
          <Contact.SocialIcon target="_blank" href="mailto:jaosullivan0@gmail.com">
            <SocialIconImg src={MailIcon} />
          </Contact.SocialIcon>
          <Contact.SocialIcon target="_blank" href="https://github.com/JAOS-DEV">
            <SocialIconImg src={GithubIcon} />
          </Contact.SocialIcon>
          <Contact.SocialIcon target="_blank" href="https://www.linkedin.com/in/james-o-sullivan-891779210/">
            <SocialIconImg src={LinkedInIcon} />
          </Contact.SocialIcon>
        </Contact.SocialsContainer>
      </Contact.Inner>
    </Contact>
  );
}
