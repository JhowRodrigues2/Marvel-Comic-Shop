import React, { useContext } from "react";
import { HeaderContainer, ShoppingCart } from "./styles";
import LogoMarvel from "../../assets/logoMarvel.svg";
import { FiShoppingCart } from "react-icons/fi";
import { Checkout } from "../Checkout";
import { GlobalContext } from "../../context";
export const Header = () => {
  const { toggleMenu, cartItems } = useContext(GlobalContext);

  console.log(cartItems.length);
  return (
    <HeaderContainer>
      <img src={LogoMarvel} alt="Marvel Logo" />
      <ShoppingCart>
        <button onClick={toggleMenu}>
          <FiShoppingCart />
          <span>{cartItems.length >= 1 ? cartItems.length : ""}</span>aaaaa
        </button>
      </ShoppingCart>
      <Checkout />
    </HeaderContainer>
  );
};
