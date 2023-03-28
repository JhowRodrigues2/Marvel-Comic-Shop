import React, { useContext } from "react";
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
import { GlobalContext } from "../../context";
export const Card = ({ thumbnail, price, comicTitle, pageCount, creators }) => {
  const { addCart } = useContext(GlobalContext);

  const priceCurrencyBRL = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CardItem>
      <img src={`${thumbnail}.jpg`} alt="thumbnail comic" />

      <CardInformation>
        <Title>{comicTitle}</Title>
        <Price>{priceCurrencyBRL}</Price>
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
          <Buy onClick={() => addCart(comicTitle, priceCurrencyBRL)}>
            Comprar
          </Buy>
        </ButtonContainer>
      </CardInformation>
    </CardItem>
  );
};
