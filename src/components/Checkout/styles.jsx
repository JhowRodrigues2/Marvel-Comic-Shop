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
 
  @media (max-width: 685px) {
    width: 70%;
  }
`;


export const CheckoutClose = styled.button`
margin-top:10px;
margin-left:10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  font-size: 15px;
  color: #ffeb38;
  background: 0;
  cursor: pointer;
  border:1px solid #ffeb38;
  

`;
export const CheckoutItensContainer = styled.div`
  width: 100%;
  height: 90%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckoutButton = styled.button`

 width: 90%;
  min-height: 5vh;
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
  border-radius:5px;
  bottom: 0;
  &:hover {
    background-position: -100% 0;
  }
  @media (max-width: 620px) {
    background: #ffeb38;
    color: rgb(0, 0, 0);
    font-size: 12px;
  }
`;
export const CheckoutItensList = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  color: #fff;
  border-radius: 8px;
  border:1px solid #a3a3a3;

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

  button {
    font-size: 12px;
    width: 1.8rem;
    border: 0;
    background-color: transparent;
    cursor: pointer;

  }
  span {
    color:#fff;
    font-size: 12px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  @media (max-width: 450px) {
    width: 50px;
    height: 24px;
  }
  button {
    color: #000000;
    font-weight: 400;
  }
`;
export const RemoveItemList = styled.button`
cursor:pointer;
`
