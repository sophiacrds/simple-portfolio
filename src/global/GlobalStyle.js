import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;;
  };


  :root{
    --green950: #273131;
    --green900: #36453b;
    --green850: #505C52;
    --green800: #5a7262;
    --green150: #929d93;

    --beige100: #e7e5d4;
    --gray150: #C2C3C1;


    --pad: 2rem;

    @media (min-width: 1400px){
         --max-width-sec: 1300px;
         --pad: 2rem calc((100vw - var(--max-width-sec)) / 2);
      }
  }

  a {
		color: unset;
		text-decoration: none;
	}

  body{
    width: 100%;
    height: 100%;
    background: var(--green950);
  }
`;
