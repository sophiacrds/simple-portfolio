import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;;
  };


  :root{
    --green900: #36453b;
    --green850: #505C52;
    --green800: #5a7262;
    --green500: #819c8b;
    --green300: #cdcdb6;
    --green150: #A8B3A9;

    --beige100: #e7e5d4;
    --gray150: #C2C3C1;


    --pad: 2rem;

    @media (min-width: 1400px){
         --max-width-sec: 1300px;
         --pad: 2rem calc((100vw - var(--max-width-sec)) / 2);
      }
  }
`;
