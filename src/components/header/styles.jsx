import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  background: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  img {
    height: 4vh;
  }
  @media (max-width: 550px) {
    padding: 0 25px;
    img {
      height: 3vh;
    }
  }
`;
export const ShoppingCart = styled.div`
  width: auto;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  color: #fff;
  button {
    position: relative;
    padding-top: 5px;
    font-size: 35px;
    background: none;
    color: #fff;
    border: 0;
    cursor: pointer;
    span {
      position: absolute;
      font-size: 9px;
      top: 16px;
      right: 10px;
      font-weight: bold;

  
    }
  }

`;
