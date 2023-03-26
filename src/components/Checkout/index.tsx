import React, { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutButton,
  CheckoutClose,
  CheckoutItens,
} from "./styles";
import { GlobalContext } from "../../context";

export const Checkout = () => {
  const { isMenuOpen, toggleMenu } = useContext(GlobalContext);

  return (
    <CheckoutContainer isMenuOpen={isMenuOpen}>
      <CheckoutClose onClick={toggleMenu}>X</CheckoutClose>
      <CheckoutItens></CheckoutItens>
      <CheckoutButton>FINALIZAR COMPRA</CheckoutButton>
    </CheckoutContainer>
  );
};
