import { useContext } from "react";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 486px;
  height: 100vh;
  position: fixed;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "none" : "")};
  top: 0;
  right: 0;
  overflow: auto;
  background: rgb(0, 0, 0);
  animation: fromLeft 0.5s backwards;

  @keyframes fromLeft {
    from {
      opacity: 0;
      transform: translateX(130px);
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
