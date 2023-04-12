import React, { useContext } from "react";
import { HeaderContainer, ShoppingCart } from "./styles";
import LogoMarvel from "../../assets/logoMarvel.svg";
import { FiShoppingCart } from "react-icons/fi";
import { Checkout } from "../Checkout";
import { GlobalContext } from "../../Context";
export const Header = () => {
  const { toggleMenu, cartItems } = useContext(GlobalContext);
  return (
    <HeaderContainer>
      <img src={LogoMarvel} alt="Marvel Logo" />
      <ShoppingCart>
        <button onClick={toggleMenu}>
          <FiShoppingCart />
          <span>{cartItems.length >= 1 ? cartItems.length : ""}</span>
        </button>
      </ShoppingCart>
      <Checkout />
    </HeaderContainer>
  );
};
