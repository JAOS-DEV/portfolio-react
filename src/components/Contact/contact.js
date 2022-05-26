import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e4e4;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 50%);
  padding: 50px 20px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-family: "Righteous", cursive;
  text-decoration: underline;
  color: #4f4f4f;
  font-size: 28px;
  padding: 0px 20px 20px 20px;
`;

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const SocialIcon = styled.a`
  margin: 20px;
  max-width: 100px;
`;

export const SocialIconImg = styled.img`
  :hover {
    opacity: 0.5;
  }
`;
