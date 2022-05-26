import styled from "styled-components/macro";

export const Container = styled.div`
  /* border: 1px solid red; */
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  background: linear-gradient(0deg, rgba(228, 228, 228, 1) 50%, rgba(255, 255, 255, 1) 100%);
  scroll-margin-top: 80px;
`;

export const Title = styled.h1`
  font-family: "Righteous", cursive;
  font-size: 28px;
  font-weight: bold;
  color: #4f4f4f;
  text-decoration: underline;
  padding-bottom: 44px;
`;
