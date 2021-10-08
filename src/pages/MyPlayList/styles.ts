import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  place-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 20px;
  font-size: 40px;
  font-family: Poppins;
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0;
  }
`;
