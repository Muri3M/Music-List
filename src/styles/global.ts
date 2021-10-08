import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-color: #00161a;
    // background-image: linear-gradient( #013944 25%, 75%,#00161a);
    color: #d7d7d7;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px 'Roboto';
  }

  button{
    cursor: pointer;
  }
`;
