import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 486px;
  height: 95vh;
  position: fixed;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "none" : " flex")};
  top: 0;
  right: 0;
  overflow: auto;
  background: rgb(0, 0, 0);
  justify-content: space-between;
  flex-direction: column;
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
  @media (max-width: 620px) {
    width: 70%;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 5vh;
  background-image: linear-gradient(to right, #ffeb38, #2e1050);
  background-size: 200% 100%;
  color: #fff;
  cursor: pointer;
  border: none;
  font-size: 18px;
  text-transform: uppercase;
  font-family: "Bangers", cursive;
  letter-spacing: 2px;
  font-weight: 700;
  transition: background-position 0.3s ease;
  &:hover {
    background-position: -100% 0;
  }
  @media (max-width: 620px) {
    background: #ffeb38;
    color: rgb(0, 0, 0);
    font-size: 12px;
  }
`;
export const CheckoutClose = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  color: #ffeb38;
  border: none;
  background: 0;
  cursor: pointer;
  @media (max-width: 620px) {
    font-size: 20px;
  }
`;
