import React, { useContext } from "react";
import { HeaderContainer, ShoppingCart } from "./styles";
import LogoMarvel from "../../assets/logoMarvel.svg";
import { FiShoppingCart } from "react-icons/fi";
import { Checkout } from "../Checkout";
import { GlobalContext } from "../../context";
export const Header = () => {
  const { toggleMenu } = useContext(GlobalContext);

  return (
    <HeaderContainer>
      <img src={LogoMarvel} alt="Marvel Logo" />
      <ShoppingCart>
        <button onClick={toggleMenu}>
          <FiShoppingCart />
        </button>
      </ShoppingCart>
      <Checkout />
    </HeaderContainer>
  );
};
