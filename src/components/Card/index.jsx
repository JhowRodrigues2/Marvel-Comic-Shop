import React from "react";
import {
  CardItem,
  Title,
  ButtonContainer,
  Details,
  Buy,
  Price,
} from "./styles";
import { FiShoppingCart } from "react-icons/fi";

export const Card = () => {
  return (
    <CardItem>
      <img src="https://picsum.photos/100/120" alt="" />
      <Title>Homem Aranha</Title>
      <Price>$ 50,00</Price>
      <ButtonContainer>
        <Details>DETALHES</Details>
        <Buy>
          <FiShoppingCart size={15} />
          COMPRAR
        </Buy>
      </ButtonContainer>
    </CardItem>
  );
};
