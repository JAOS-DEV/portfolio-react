import { useEffect } from "react";
import { Container, Inner, ArrowImage, ArrowButton, Pane, Name, Image, Title, DescriptionContainer, Text } from "./hero";
import profilePic from "../../images/profilepic.jpg";
import ArrowImg from "../../images/Arrow.png";
let projectsSection: HTMLElement | null;

function Hero() {
  useEffect(() => {
    projectsSection = document.getElementById("projects-section");
    console.log("ran");
  }, []);

  const handleClick = () => {
    projectsSection?.scrollIntoView({ behavior: "smooth" });
    console.log("clicked");
  };
  return (
    <Container>
      <Inner>
        <Pane>
          <Name>James O'Sullivan</Name>
          <Image src={profilePic} alt="profile pic" />
        </Pane>
        <Pane>
          <Title>Junior Frontend Engineer</Title>
          <DescriptionContainer>
            <Text>
              Hi! <br />
              I'm James and I'm currently working as a Junior Frontend Engineer for Reward Gateway. <br />
              <br /> I'm always looking for opportunities to advance my knowledge and skills.
              <br />
              Below are a few projects I put together to demonstrate my skills.
            </Text>
          </DescriptionContainer>
        </Pane>
      </Inner>
      <ArrowButton id="arrow" onClick={handleClick}>
        <ArrowImage src={ArrowImg} />
      </ArrowButton>
    </Container>
  );
}

export default Hero;
