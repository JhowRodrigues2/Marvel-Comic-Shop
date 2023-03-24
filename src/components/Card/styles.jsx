import styled from "styled-components";

export const CardItem = styled.li`
  min-width: 20vh;
  height: 300px;
  background: linear-gradient(to bottom, #1b1b1a 61.2%, #000000 37.8%);
  font-family: "Bangers", cursive;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 2px;
  gap: 0.5rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  img {
    height: 60%;
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba(160, 160, 160, 0.9);
  }
`;
export const Title = styled.h1`
  font-size: 18px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Price = styled.span`
  color: #fff;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

export const Details = styled.button`
  padding: 7px;
  border: none;
  border-radius: 24px;
  font-size: 10px;
  letter-spacing: 2px;
  cursor: pointer;
  background: transparent;
  color: rgba(160, 160, 160, 0.9);
  border: 1px solid rgba(160, 160, 160, 0.9);
  transition: all 0.3s ease;
  font-family: "Bangers", cursive;

  &:hover {
    transform: scale(1.125);

    transition: all 0.3s ease;
  }
`;
export const Buy = styled.button`
  display: flex;
  gap: 0.5rem;
  padding: 7px;
  font-size: 10px;
  letter-spacing: 2px;
  cursor: pointer;
  background: transparent;
  border-radius: 24px;
  border: none;

  color: rgba(160, 160, 160, 0.9);
  border: 1px solid rgba(160, 160, 160, 0.9);
  font-weight: 700;
  transition: all 0.3s ease;

  font-family: "Bangers", cursive;

  &:hover {
    transform: scale(1.125);
    transition: all 0.3s ease;
    border-color: rgba(160, 160, 160, 0.9);
    color: rgba(160, 160, 160, 0.9);
  }
`;
