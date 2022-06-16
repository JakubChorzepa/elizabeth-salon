import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    color: #333;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
  }

`

export default GlobalStyle;
