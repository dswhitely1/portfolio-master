import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 3.2rem;
   
    @media (min-width: 501px) {
          width: 40%;
          height: auto;
          margin-bottom: 0;
    }
    
    @media (min-width: 769px) {
            max-width: 54rem;
            width: 100%;
            height: auto;
    }
`;
