import React from "react";
import { HeaderContainer, ShoppingCart } from "./styles";
import LogoMarvel from "../../assets/logoMarvel.svg";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoMarvel} alt="" srcset="" />
      <ShoppingCart>
        <button>
          <FiShoppingCart />
        </button>
      </ShoppingCart>
    </HeaderContainer>
  );
};
