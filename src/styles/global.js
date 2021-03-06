import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background: #F5F5F5;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
