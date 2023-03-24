import React, { useState } from "react";
import { CardsContainer, SearchContainer, CardListContainer } from "./styles";
import { Search } from "./styles";
import { FaSearchengin } from "react-icons/fa";
import { Card } from "../Card";
export const Cards = () => {
  const [placeholder, setPlaceholder] = useState("PESQUISAR QUADRINHO");

  const handleOnFocus = () => {
    setPlaceholder("");
  };

  const handleOnBlur = () => {
    setPlaceholder("PESQUISAR QUADRINHO");
  };
  return (
    <CardsContainer>
      <SearchContainer>
        <Search>
          <input
            type="text"
            name=""
            id=""
            placeholder={`${placeholder}`}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          <button>
            <FaSearchengin />
          </button>
        </Search>
      </SearchContainer>
      <CardListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> <Card />
        <Card />
        <Card /> <Card />
        <Card /> <Card />
        <Card />
        <Card />
      </CardListContainer>
    </CardsContainer>
  );
};
