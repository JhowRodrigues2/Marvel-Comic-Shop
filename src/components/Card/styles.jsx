import styled from "styled-components";

export const CardItem = styled.li`
  width: 300px;
  min-width: 20vh;
  height: 32vh;
  background: linear-gradient(to bottom, #1b1b1a 60%, #000000 40%);
  font-family: "Bangers", cursive;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  img {
    height: 100%;
    border-radius: 8px;
  }
`;
export const CardInformation = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover,
  &:active {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
`;

export const Price = styled.span`
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
`;

export const Details = styled.button`
  padding: 7px;
  border: none;
  width: 30%;
  border-radius: 24px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  background: transparent;
  border: 1px solid rgba(160, 160, 160, 0.9);
  transition: all 0.3s ease;
  font-family: "Bangers", cursive;
  color: #fff;

  &:hover {
    transform: scale(1.125);

    transition: all 0.3s ease;
  }
`;
export const Buy = styled.button`
  width: 30%;
  padding: 7px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  background: transparent;
  border-radius: 24px;
  border: none;
  color: #fff;
  border: 1px solid rgba(160, 160, 160, 0.9);
  font-weight: 700;
  transition: all 0.3s ease;

  font-family: "Bangers", cursive;

  &:hover {
    transform: scale(1.125);
    transition: all 0.3s ease;
    border-color: rgba(160, 160, 160, 0.9);
  }
`;
