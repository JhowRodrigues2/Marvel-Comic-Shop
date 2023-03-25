import React, { useContext, useState } from "react";
import { CardsContainer, SearchContainer, CardListContainer } from "./styles";
import { Search } from "./styles";
import { FaSearchengin } from "react-icons/fa";
import { Card } from "../Card";
import { GlobalContext } from "../../context";
export const Cards = () => {
  const [placeholder, setPlaceholder] = useState("PESQUISAR QUADRINHO");

  const handleOnFocus = () => {
    setPlaceholder("");
  };

  const handleOnBlur = () => {
    setPlaceholder("PESQUISAR QUADRINHO");
  };

  const { comicsDATA } = useContext(GlobalContext);

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
        {comicsDATA.map(
          (comic) =>
            comic.prices[0].price > 0 && (
              <Card
                thumbnail={comic.thumbnail.path}
                comicTitle={comic.title}
                price={comic.prices[0].price}
              />
            )
        )}
      </CardListContainer>
    </CardsContainer>
  );
};
