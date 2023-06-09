import { createGlobalStyle } from "styled-components";
import BackgroundImagem from "../assets/background.jpg";
import styled from "styled-components";
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  body {
    position: relative;
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    background: url(${BackgroundImagem});
    background-size: cover;
    background-position: center center;
    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.6);
  }
  }`;

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
