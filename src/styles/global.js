import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
 *{
  margin: 0;
  padding: 0;
  outline: 0;
  outline: none; }
  
 html {
  box-sizing: border-box;
  color: #1E1E1E;
  font-size: 14px;
  scroll-behavior: smooth;
}
  *, *:before, *:after {
  box-sizing: inherit;
}
  h1,h2,h3,h4,p{
    margin: 0;
    
  }

  th{
    font-weight: 500;
  }
  
  h1{
    font-size: 2.2em;
    font-weight: 600;
  }

  h2{
    font-size: 2.0em;
    font-weight: 400;
    padding: 0.5em 0;
  }
  
  h3{
    font-size: 1.8em;
  }

  h4{
    font-size: 1.6em;
  }

  p{
    font-size: 1.3em;
    font-weight: 300;
    padding: 0.5em 0;
    font-weight: 100;

  }
  body {
    margin: 0;
    padding: 0;    
    font-family: 'Inter', sans-serif;
  }

    button, a, select{
      cursor: pointer;
      border: none;
    }

    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
`;

export default GlobalStyle;

  /* Pallete: 
   
  #5b078a
  #6b179c
  #531cad
  #6628c9
  #7f47dd
  #29e3ff
  
  */