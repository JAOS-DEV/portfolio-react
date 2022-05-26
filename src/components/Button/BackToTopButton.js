import styled from "styled-components/macro";

export const BackToTopButton = styled.button`
  display: none;
  position: fixed; /* Fixed/sticky position */
  bottom: 40px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #875ccc; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */

  :hover {
    background-color: #6c37c0;
  }
`;
