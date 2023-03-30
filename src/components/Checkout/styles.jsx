import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 686px;
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
  z-index: 20;

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
export const CheckoutItensContainer = styled.div`
  width: 100%;
  height: 90%;
  color: #fff;
`;
export const CheckoutItensList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #ee1212;
  color: #fff;
  border-radius: 8px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 2px;
  }
  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const CheckoutItemQuantity = styled.div`
  display: flex;
  border: 1px solid lightgray;
  padding: 2px 0;
  border-radius: 4px;
  width: 65px;
  height: 19px;
  button {
    font-size: 12px;
    width: 1.8rem;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .span {
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
    padding: 0 0.75rem;
    font-size: 12px;
    font-weight: 600;
    align-self: center;
  }
  @media (max-width: 768px) {
    width: 97px;
    height: 34px;
  }
  button {
    color: #000000;
    font-weight: 400;
  }
`;
