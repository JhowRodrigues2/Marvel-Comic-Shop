import React, { useContext } from "react";
import { CheckoutContainer } from "./styles";
import { MenuCheckoutContext } from "../../context";

export const Checkout = () => {
  const { isMenuOpen } = useContext(MenuCheckoutContext);

  return <CheckoutContainer isMenuOpen={isMenuOpen}>index</CheckoutContainer>;
};
