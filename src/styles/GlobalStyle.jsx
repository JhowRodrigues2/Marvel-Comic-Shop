import { createGlobalStyle } from "styled-components";
import BackgroundImagem from "../assets/background.jpg";

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
    backdrop-filter: blur(3px); 
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.8);
  }
  }`;
