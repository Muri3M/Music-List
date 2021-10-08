import { shade } from 'polished';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 100%;
  color: #ffffff;
  height: 50px;
  background-color: #343434;
  border-radius: 0 0 20px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 70px;
    border-radius: 0 0;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    margin: 10px;
    height: 70px;
    @media (max-width: 768px) {
      margin: 0;
      position: static;
    }
  }
`;

export const Button = styled.button`
  width: 40%;
  height: 100%;
  color: #ffffff;
  background-color: transparent;
  border: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.3, '#23cdec')};
  }
`;
