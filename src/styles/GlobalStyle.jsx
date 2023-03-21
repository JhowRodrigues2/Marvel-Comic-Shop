import { createGlobalStyle } from "styled-components";
import BackgroundImagem from "../assets/background.jpg";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
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
    background: url(${BackgroundImagem}) center 100%;
    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(3px);


  }
  }`;
