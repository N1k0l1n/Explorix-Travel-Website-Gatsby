import { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans/500.css" // Weight 500.

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 'Open Sans';
  }
    `;
