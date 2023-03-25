import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { Cards } from "../Cards";
import { Loading } from "../Loading";
import { MainContainer } from "./styles";
export const Main = () => {
  const { isLoading } = useContext(GlobalContext);
  return (
    <MainContainer>
      {isLoading && <Loading />}
      {!isLoading && <Cards />}
    </MainContainer>
  );
};
