import React, { useContext, useState } from "react";
import {
  CardsContainer,
  SearchContainer,
  CardListContainer,
  PaginationContainer,
  Pagination,
} from "./styles";
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

  const {
    pages,
    setCurrentPage,
    currentItens,
    handleSearch,
    handleChange,
    inputText,
    error,
  } = useContext(GlobalContext);
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
            onChange={handleChange}
            value={inputText}
          />
          <button onClick={handleSearch}>
            <FaSearchengin />
          </button>
        </Search>
        <span>{error}</span>
      </SearchContainer>
      <CardListContainer>
        {currentItens.map(
          (comic) =>
            comic.prices[0].price > 0 && (
              <Card
                key={comic.id}
                thumbnail={comic.thumbnail.path}
                comicTitle={comic.title}
                price={comic.prices[0].price}
                creators={
                  comic.creators.items.length > 0
                    ? comic.creators.items.map((author) => author.name)
                    : "Autor Desocnhecido"
                }
                pageCount={
                  comic.pageCount > 0 ? comic.pageCount : "Desconhecido"
                }
              />
            )
        )}
        <PaginationContainer>
          {Array.from(Array(pages), (item, index) => (
            <Pagination
              key={item}
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </Pagination>
          ))}
        </PaginationContainer>
      </CardListContainer>
    </CardsContainer>
  );
};
