import styled from 'styled-components';

export const Button = styled.a`
align-items: center;
text-decoration:none;
text-align: center;
background-color: #5b078a;
border:none;
border-radius: 4px;
transition: background 0.5s;

color: #FFF;
font-size: 1.5em;
border: transparent solid 1px;
}


:hover{
  background-color: #6b179c;
}

${({ type }) =>
        type === 'accept' &&
        ` 
        padding: 0.5em;
        margin-bottom: 40px;
  `}

${({ type }) =>
        type === 'see' &&
        ` 
        text-transform: uppercase;
        padding: 1em;
        font-weight: 600;
        margin-top: 40px;
  `}
   
   ${({ type }) =>
        type === 'agreed' &&
        ` 
        padding: 0.5em;
        margin-top: 20px;

        @media (min-width:1000px){width: 300px;}
        

  `}

`;
