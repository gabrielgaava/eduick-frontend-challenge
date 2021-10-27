import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&family=Poppins:wght@400;700&display=swap');

  *{
    padding: 0px;
    margin: 0px;
  }

  body {
    width: 100%;
    height: 100vh;
    background: transparent;
    font-family: 'Poppins', 'Open Sans', sans-serif;
  }
`