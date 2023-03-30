import React, { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutButton,
  CheckoutClose,
  CheckoutItensContainer,
  CheckoutItensList,
  CheckoutItemQuantity,
} from "./styles";
import { GlobalContext } from "../../context";
import { v4 as uuidv4 } from "uuid";

export const Checkout = () => {
  const { isMenuOpen, toggleMenu, cartItems } = useContext(GlobalContext);

  return (
    <CheckoutContainer isMenuOpen={isMenuOpen}>
      <CheckoutClose onClick={toggleMenu}>X</CheckoutClose>
      <CheckoutItensContainer>
        {cartItems
          ? cartItems.map((item) => (
              <CheckoutItensList key={uuidv4()}>
                <img src={`${item.thumbnail}.jpg`} />
                <CheckoutItemQuantity>
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </CheckoutItemQuantity>
                <span>{item.price * item.quantity}</span>
              </CheckoutItensList>
            ))
          : ""}
      </CheckoutItensContainer>
      <CheckoutButton>Finalizar Compra</CheckoutButton>
    </CheckoutContainer>
  );
};
