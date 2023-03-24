import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 85%;
  height: 75vh;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10vh;
  align-items: center;
`;

export const Search = styled.div`
  position: relative;
  justify-content: center;
  width: 50%;

  input {
    background-color: black;
    height: 4vh;
    width: 100%;
    border: none;
    border-radius: 50px;
    font-family: "Bangers", cursive;
    color: #fff;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 16px;
    padding-left: 24px;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 22px 18px;

    &::placeholder {
      font-size: 18px;
      letter-spacing: 4px;
      font-weight: 700;
      color: #fff;
    }
  }

  button {
    position: absolute;
    font-size: 25px;
    width: 50px;
    height: 25px;
    margin-left: -50px;
    margin-top: 10px;
    background: 0;
    border: none;
    cursor: pointer;
    color: #ffeb38;
    :hover {
      font-size: 30px;
      transition: 0.3s ease-in;
    }
  }

  @media (max-width: 880px) {
    width: 100%;
  }
  @media (max-width: 620px) {
    input::placeholder {
      font-size: 16px;
    }
    @media (max-width: 430px) {
      button {
        font-size: 20px;
        margin-top: 8x;
      }
      input::placeholder {
        font-size: 12px;
      }
    }
    @media (max-width: 340px) {
      input::placeholder {
        color: transparent;
      }
    }
  }
`;
export const CardListContainer = styled.ul`
  background: blue;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  gap: 1rem;
  padding: 5px;
  list-style: none;

  @media (max-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
    height: auto;
  }
  @media (max-width: 660px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(9, 1fr);
  }
  @media (max-width: 440px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(16, 1fr);
    align-items: center;
    justify-items: center;
  }
`;
