import {css} from "styled-components";

export const Global = css`
    html {
      box-sizing: border-box;
      font-size: 62.5%;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    body {
      background-color: #fafafa;
      color: #33323e;
      font-size: 1.6rem;
      line-height: 1.5;
      font-family: 'Public Sans', sans-serif;
    }
    
    h1, h2, h3 {
      line-height: 1.05;
      font-family: 'Ibarra Real Nova', serif;
    }
    
    h1, h2 {
      font-weight: 600;
    }
    
    h1 {
      font-size: 5rem;
      letter-spacing: -0.45px;
    }
    
    h2 {
      font-size: 4rem;
      letter-spacing: -0.36px;
    }
    
    h3 {
      font-size: 3.2rem;
      letter-spacing: -0.29px;
    }
`;
