import React from "react";
import { LoadingContainer } from "./styles";
import MarvelLogo from "../../assets/logoMarvel.svg";

export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={MarvelLogo} alt="" srcset="" />
    </LoadingContainer>
  );
};
