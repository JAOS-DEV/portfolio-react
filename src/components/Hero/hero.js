import styled from "styled-components/macro";
import wave from "../../images/wave.svg";
import wave2 from "../../images/wave2.svg";

export const Container = styled.div`
  font-family: "Righteous", cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(0deg, rgba(89, 29, 185, 1) 0%, rgba(89, 29, 185, 0.43) 100%);
  clip-path: ellipse(150% 71% at 54% 28%);

  ::before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 550px;
    opacity: 0.2;
    background-image: url(${wave2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;
    @media only screen and (max-height: 600px) {
      bottom: -100px;
    }

    @media only screen and (max-height: 500px) {
      bottom: -150px;
    }

    @media only screen and (max-height: 400px) {
      bottom: -300px;
    }
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    min-height: 550px;
    opacity: 0.2;
    background-image: url(${wave});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    z-index: 1;

    @media only screen and (max-height: 600px) {
      bottom: -100px;
    }

    @media only screen and (max-height: 500px) {
      bottom: -150px;
    }

    @media only screen and (max-height: 400px) {
      bottom: -300px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 20px;
  }

  @media only screen and (max-width: 576px) {
    padding: 0px;
    align-items: center;
  }
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const ArrowImage = styled.img`
  width: 80px;

  @media only screen and (max-height: 650px) {
    width: 40px;
  }

  @media only screen and (max-height: 550px) {
    width: 30px;
  }

  @media only screen and (max-height: 520px) {
    width: 30px;
    bottom: 0px;
  }

  @media only screen and (max-height: 400px) {
    width: 40px;
  }

  @media only screen and (max-width: 768px) {
    width: 70px;
  }

  @media only screen and (max-width: 576px) {
    width: 60px;
  }
`;

export const ArrowButton = styled.a`
  position: absolute;
  bottom: 20px;
  width: 80px;
  z-index: 12;
  animation: pulse 1.4s infinite;
  cursor: pointer;

  @media only screen and (max-height: 650px) {
    bottom: 10px;
    width: 40px;
  }

  @media only screen and (max-height: 550px) {
    width: 30px;
    bottom: -8px;
  }

  @media only screen and (max-height: 520px) {
    width: 30px;
    bottom: -25px;
  }
  @media only screen and (max-height: 400px) {
    width: 40px;
    bottom: -160px;
  }

  @media only screen and (max-width: 768px) {
    width: 70px;
  }

  @media only screen and (max-width: 576px) {
    width: 40px;
  }
`;

export const Pane = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 90%;
    :last-child {
      margin-bottom: 80px;
    }
  }

  @media only screen and (max-width: 576px) {
    :last-child {
      margin-bottom: 50px;
    }
  }
`;

export const Name = styled.h1`
  flex-basis: 100%;
  align-self: flex-end;
  color: #ffffff;
  font-size: 40px;
  font-weight: normal;
  text-align: center;
  animation: slide 2s forwards, fadeIn 4s;
  transform: translateX(100%);

  @media only screen and (max-width: 768px) {
    width: 35%;
    margin-bottom: 20px;
    font-size: 30px;
  }
`;

export const Image = styled.img`
  align-self: flex-start;
  width: 55%;
  min-width: 250px;
  border-radius: 30% 70% 57% 43% / 30% 53% 47% 70%;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 200px;
  margin-top: 20px;
  animation: slide 2s forwards, fadeIn 4s;
  transform: translateX(-200%);
  z-index: 2;
  @media only screen and (max-width: 768px) {
    width: 35%;
    min-width: 200px;
    margin-bottom: 10px;
    margin-top: 0px;
  }
  @media only screen and (max-width: 576px) {
    width: 25%;
    min-width: 180px;
  }
`;

export const Title = styled.h2`
  flex-basis: 100%;
  align-self: flex-end;
  text-align: center;
  color: #ffffff;
  font-size: 30px;
  padding-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const DescriptionContainer = styled.div`
  align-self: flex-start;
  width: 100%;
  border: 1px solid black;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  @media only screen and (max-width: 768px) {
    width: 90%;
    padding: 0px;
  }
`;

export const Text = styled.p`
  padding: 30px 10px;
  font-size: 17px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    padding: 10px;
  }

  @keyframes slide {
    to {
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    50% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
