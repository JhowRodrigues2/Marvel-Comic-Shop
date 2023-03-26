import React, { useContext } from "react";
import { CardItem } from "../Card/styles";
import {
  CheckoutContainer,
  CheckoutButton,
  CheckoutClose,
  CheckoutItensContainer,
} from "./styles";
import { GlobalContext } from "../../context";

export const Checkout = () => {
  const { isMenuOpen, toggleMenu, cartItems } = useContext(GlobalContext);

  return (
    <CheckoutContainer isMenuOpen={isMenuOpen}>
      <CheckoutClose onClick={toggleMenu}>X</CheckoutClose>
      <CheckoutItensContainer>{cartItems}</CheckoutItensContainer>
      <CheckoutButton>FINALIZAR COMPRA</CheckoutButton>
    </CheckoutContainer>
  );
};
