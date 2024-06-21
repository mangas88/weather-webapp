import { createGlobalStyle } from "styled-components";
// Questi stili globali vengono importati in App.js per essere applicati a tutti i componenti
const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${props => props.theme.darkPurple};
    font-family: 'Arial', sans-serif;
    color: white
  }

  h2 {
    font-size: ${props => props.theme.s3};
    line-height: 39px;
    margin: 0;
    padding: 0;
  }
  h3 {
    margin: 0;
    padding: 0;
  }
  p {
    font-size: ${props => props.theme.default};
  }

  a {
    text-decoration: none;
  }
  
  button {
    &:focus {
      outline: 0;
    }
  }
  
  .small-text {
    font-size: ${props => props.theme.s1};
    line-height: 18px
  }
  .big-text {
    font-size: ${props => props.theme.s5};
    font-weight: 600;
  }
`

export default GlobalStyles;