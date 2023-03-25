import React from "react";
import {
  CardItem,
  CardInformation,
  Title,
  ButtonContainer,
  Details,
  Buy,
  Price,
} from "./styles";

export const Card = ({ thumbnail, price, comicTitle }) => {
  return (
    <CardItem>
      <img src={`${thumbnail}.jpg`} alt="" />

      <CardInformation>
        <Title>{comicTitle}</Title>
        <Price>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
        <ButtonContainer>
          <Details>Detalhe</Details>
          <Buy>Comprar</Buy>
        </ButtonContainer>
      </CardInformation>
    </CardItem>
  );
};
