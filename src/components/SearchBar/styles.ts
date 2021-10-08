import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 40px;

  margin: 10px;

  border: 2px #1e3137 solid;
  border-radius: 10px;

  background: #ffffff;
  justify-content: center;
  font-size: 16px;
  color: #5c6c74;
  font-weight: bold;

  input {
    width: 100%;
    height: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    margin-left: 10px;

    &::placeholder {
      color: #5c6c74;
    }

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  & + & {
    margin-top: 20px;
  }
`;
