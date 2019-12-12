import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Poppins:100,300,500,700&display=swap');

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;   
  }

  html, body, #root {
    min-height: 100vh;
    width: 100vw; 
    overflow-x: hidden; 
  }

  body, button, input {
    font-family: 'Poppins' , Arial, Helvetica, sans-serif;
  }

  html {
    font-size: 14px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }  
`

