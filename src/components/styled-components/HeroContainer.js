import styled, {css} from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 3.2rem;
    
    @media (min-width: 501px) {
      margin-bottom: 15rem;
    }
`;

export const HeroImg = styled.img`
    width: 100%;
    height: auto;
    
    ${props => props.desktop && css`
        display: none;
        @media (min-width: 769px) {
            display: inherit;
        }
    `}
    
    ${props => props.tablet && css`
      display: none;
      
      @media (min-width: 501px) {
        display: inherit;
      }
      @media (min-width: 769px) {
        display: none
      }
    `}
    
    ${props => props.mobile && css`
      margin-bottom: 3.2rem;
      @media (min-width: 501px) {
        display: none;
        margin-bottom: 0;
      }
    `}
   `;
