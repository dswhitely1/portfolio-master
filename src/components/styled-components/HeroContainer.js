import styled, {css} from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 15rem;
`;

export const HeroImg = styled.img`
    width: 100%;
    height: auto;
    
    ${props => props.desktop && css`
        @media (max-width: 768px) {
            display: none;
        }
    `}
    
    ${props => props.tablet && css`
      display: none;
      
      @media (max-width: 768px) {
        display: inherit;
      }
      @media (max-width: 500px) {
        display: none
      }
    `}
    
    ${props => props.mobile && css`
      display: none;
      @media (max-width: 500px) {
        display: inherit;
      }
    `}
   `;
