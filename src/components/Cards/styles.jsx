import styled, { keyframes } from "styled-components";

export const CardsContainer = styled.div`
  width: 80%;
  height: 85vh;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 8vh;
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const CardListContainer = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 5px;
  list-style: none;
  opacity: 0;

  animation: ${fadeIn} 1s ease-in-out forwards;

  li {
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
  }

  li:nth-child(1) {
    animation-delay: 0.1s;
  }

  li:nth-child(2) {
    animation-delay: 0.3s;
  }

  li:nth-child(3) {
    animation-delay: 0.5s;
  }

  li:nth-child(4) {
    animation-delay: 0.7s;
  }
  li:nth-child(4) {
    animation-delay: 0.9s;
  }
  li:nth-child(5) {
    animation-delay: 1.1s;
  }
  li:nth-child(6) {
    animation-delay: 1.3s;
  }
  li:nth-child(7) {
    animation-delay: 1.5s;
  }
  li:nth-child(8) {
    animation-delay: 1.7s;
  }
  li:nth-child(8) {
    animation-delay: 1.9s;
  }
  li:nth-child(9) {
    animation-delay: 2.1s;
  }
  li:nth-child(10) {
    animation-delay: 2.3s;
  }
  li:nth-child(11) {
    animation-delay: 2.5s;
  }
  li:nth-child(12) {
    animation-delay: 2.7s;
  }
  @media (max-width: 780px) {
    height: auto;
  }

  @media (max-width: 440px) {
    align-items: center;
    justify-items: center;
  }
`;
export const PaginationContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
  @media (min-width: 550px) {
    margin-bottom: 5vh;
  }
`;

export const Pagination = styled.button`
  background: transparent;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;
  color: #fff;
  border: none;
  &:hover {
    opacity: 1;
  }
`;
