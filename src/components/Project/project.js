import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  padding: 25px 15px;
  margin-bottom: 40px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Pane = styled.div`
  /* border: 1px solid gray; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 48%;
  padding: 20px 0px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#ffffff")};
  border: ${(props) => (props.border ? "1px solid #c2c2c2;" : "")};
  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(4, max-content);
  align-content: center;
  width: 100%;
  height: 100%;
  padding: 0px 18px;
  /* border: 5px solid yellow; */

  @media only screen and (max-width: 576px) {
    padding: 0px 10px;
  }
`;

export const Title = styled.h1`
  font-family: "Righteous", cursive;
  grid-column: 1/5;
  grid-row: 1/2;
  font-size: 25px;
  padding-bottom: 30px;
  text-decoration: underline;
  @media only screen and (max-width: 576px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  white-space: pre-wrap;
  grid-column: 1/5;
  grid-row: 2/3;
  font-size: 16px;
  padding-bottom: 25px;
  @media only screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const TechTabContainer = styled.div`
  grid-column: 1/5;
  grid-row: 3/4;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding-bottom: 20px;
  @media only screen and (max-width: 576px) {
    margin-bottom: 15px;
  }
`;

export const TechTab = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  max-width: 22%;
  min-height: 80%;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 5px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  @media only screen and (max-width: 992px) {
    padding: 5px 10px;
    max-width: 20%;
  }
`;

export const TechTabImage = styled.img`
  width: 30%;
  margin-right: 10px;
  @media only screen and (max-width: 992px) {
    margin-right: 5px;
    width: 25%;
  }
  @media only screen and (max-width: 576px) {
    width: 50%;
    margin-right: 5px;
  }
`;

export const TechTabText = styled.p`
  font-size: 14px;
  font-weight: bold;
  @media only screen and (max-width: 992px) {
    font-size: 16px;
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  grid-column: 1/5;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Button = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #7a19f1, #332179);
  border-radius: 8px;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  padding: 5px 20px;
  margin-right: 35px;
  height: 40px;

  :last-child {
    margin: 0px;
  }
  &:hover {
    background: linear-gradient(to bottom, #332179, #7a19f1);
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 576px) {
    font-size: 14px;
    margin-right: 45px;
  }
`;

// export const ButtonHover = styled(Button)``;
