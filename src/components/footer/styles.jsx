import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 5vh;
  background: rgb(0, 0, 0);
  margin-top: auto;
  color: #a8a4a4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  gap: 16px;
  a {
    right: 0;
    text-decoration: none;
  }
  a:visited {
    color: #a8a4a4;
  }
  @media screen and(max-width: 550px) {
    font-size: 12px;
    gap: 10px;
  }
  @media screen and(max-width: 380px) {
    font-size: 10px;
    gap: 8px;
  }
`;
