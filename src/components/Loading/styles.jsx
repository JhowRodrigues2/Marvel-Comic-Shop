import styled from "styled-components";
export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 96vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: 10vh;
    animation: pulse 0.7s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 620px) {
    img {
      width: 25vw;
      height: 25vh;
    }
  }
`;
