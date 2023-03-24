import styled from "styled-components";

export const CardItem = styled.li`
  height: 20vh;
  background-color: red;

  @media screen and (max-width: 780px) {
    height: 12vh;
  }
  @media screen and (max-width: 440px) {
    width: 70%;
    height: 20vh;
  }
`;
