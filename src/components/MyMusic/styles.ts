import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const slide = keyframes`
  0% {width: 30px;}
  100% { width: 140px;}
`;

const grow = keyframes`
  0% { font-size: 0px;}
  100% { font-size: 14px;}
`;

const fill = keyframes`
  0% { color: #000000;}
  100% { color: #23cdec;}
`;

export const Artist = styled.h1`
  font-size: 14px;
  margin: 3px 5px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Container = styled.div`
  margin: 20px;
  width: 80%;
  height: 100px;

  display: flex;
  align-items: stretch;
  flex-direction: row;

  border-radius: 12px;
  background: #013944;

  animation: ${appearFromLeft} 1s;

  div {
    display: flex;
    flex-direction: column;
    div {
      height: 40px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Duration = styled.h1`
  font-size: 12px;
  margin: 5px;
  @media (max-width: 768px) {
    margin: 3px 5px;
  }
`;

export const Flex = styled.div`
  flex: 1;
`;

export const FullMusic = styled.button`
  display: flex;
  flex-direction: row;
  position: absolute;
  margin: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: transparent;

  align-self: flex-end;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 10px;
    display: none;
    font-size: 14px;
  }
  &:hover {
    width: 140px;
    animation: ${slide} 0.3s;
  }
  &:hover span {
    display: block;
    animation: ${grow} 0.3s;
  }
  &:hover svg {
    color: #23cdec;
    animation: ${fill} 0.7s;
  }
`;

export const Imagem = styled.img`
  margin: 2px;

  border-radius: 12px;
`;

export const Remove = styled.button`
  margin: 10px;

  justify-content: center;
  align-items: center;

  border: transparent;
  border-radius: 10px;

  color: #d7d7d7;
  background: transparent;
  transition: color 0.2s;

  align-self: flex-end;

  &:hover {
    color: ${shade(0.3, '#d7d7d7')};
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  margin: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
