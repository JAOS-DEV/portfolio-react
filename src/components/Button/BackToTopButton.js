import styled from "styled-components/macro";

export const BackToTopButton = styled.button`
  display: none;
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #875ccc;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;

  :hover {
    background-color: #6c37c0;
  }
`;
