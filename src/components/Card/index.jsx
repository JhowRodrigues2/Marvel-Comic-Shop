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
import Swal from "sweetalert2";

export const Card = ({ thumbnail, price, comicTitle, pageCount, creators }) => {
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
          <Details
            onClick={() =>
              Swal.fire({
                title: comicTitle,
                html: `<b> Autor(es):  </b> ${creators}
                <br> <b>Número de páginas:</b> ${pageCount}`,
                imageUrl: `${thumbnail}.jpg`,
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: comicTitle,
              })
            }
          >
            Detalhe
          </Details>
          <Buy>Comprar</Buy>
        </ButtonContainer>
      </CardInformation>
    </CardItem>
  );
};
