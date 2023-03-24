import React, { useContext } from "react";
import { CheckoutContainer, CheckoutButton, CheckoutClose } from "./styles";
import { MenuCheckoutContext } from "../../context";

export const Checkout = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuCheckoutContext);

  return (
    <CheckoutContainer isMenuOpen={isMenuOpen}>
      <CheckoutClose onClick={toggleMenu}>X</CheckoutClose>
      <CheckoutButton>FINALIZAR COMPRA</CheckoutButton>
    </CheckoutContainer>
  );
};
