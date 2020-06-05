import styled, {css} from "styled-components";

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
    
    ${props => props.detail && css`
        @media (min-width: 501px) {
            max-width: 100%;
            width: 100%;
        }
    `}
    
    ${props => props.first && css`
        margin-top: 1.2rem;
        margin-bottom: 3.2rem;
        @media (min-width: 501px) {
            max-width: 100%;
            width: 100%;
            margin-bottom: 3.2rem;
        }
    `}
    
    ${props => props.second && css`
        margin-bottom: 6.4rem;
        @media (min-width: 501px) {
            max-width: 100%;
            width: 100%;
            margin-bottom: 8rem;
        }
    `}
`;
