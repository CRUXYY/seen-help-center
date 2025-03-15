import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #F5F3EF;
    color: #1E2324;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyle; 