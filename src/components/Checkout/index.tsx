import React, { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutButton,
  CheckoutClose,
  CheckoutItensContainer,
  CheckoutItensList,
  CheckoutItemQuantity,
  RemoveItemList,
} from "./styles";
import { GlobalContext } from "../../context";
import { v4 as uuidv4 } from "uuid";

export const Checkout = () => {
  const {
    isMenuOpen,
    toggleMenu,
    cartItems,
    decreaseQuantity,
    increaseQuantity,
    removeCart
  } = useContext(GlobalContext);

  return (
    <CheckoutContainer isMenuOpen={isMenuOpen}>
      <CheckoutClose onClick={toggleMenu}>X</CheckoutClose>
      <CheckoutItensContainer>
        {cartItems
          ? cartItems.map((item) => (
              <CheckoutItensList key={uuidv4()}>
                <img src={`${item.thumbnail}.jpg`} />
                <CheckoutItemQuantity>
                  <button onClick={() => decreaseQuantity(item.thumbnail)}>
                   <span>-</span> 
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.thumbnail)}>
                  <span>+</span> 
                  </button>
                </CheckoutItemQuantity>
                <span>{(item.price * item.quantity).toFixed(2)}</span>
                  <RemoveItemList onClick={()=>removeCart(item.thumbnail)}>x</RemoveItemList>
              </CheckoutItensList>
            ))
          : ""}
          {cartItems.length >0 ?   <CheckoutButton>Finalizar Compra</CheckoutButton>: 'Carrinho Vazio!'
}
      </CheckoutItensContainer>

    </CheckoutContainer>
  );
};
