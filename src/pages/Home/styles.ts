import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {  opacity: 0;}
  100% { opacity: 1;}
`;

export const Container = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  place-content: center;
  flex-direction: column;
  form {
    display: flex;
    width: 100%;
  }
`;

export const Scroll = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  margin: 20px;
  font-size: 40px;
  font-family: Poppins;

  animation: ${slide} 1s;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0;
  }
`;

export const TitleBusca = styled.h1`
  margin: 20px;
  font-size: 40px;
  font-family: Poppins;

  animation: ${slide} 1s;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0;
  }
`;

export const Message = styled.h2`
  width: 80%;
  margin: 20px;
  font-size: 32px;
  align-self: center;
  text-align: center;
  margin: 10%;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  place-content: center;
`;

export const Button = styled.button`
  width: 26px;
  height: 26px;
  position: relative;
  right: 50px;
  border-radius: 90px;

  background: transparent;
  border: transparent;
  transition: background-color 1s;
  &:hover {
    background-color: #23cdec;
  }
`;
