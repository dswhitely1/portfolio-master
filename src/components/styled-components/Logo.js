import styled, {css} from "styled-components";

export const SVG = styled.svg`
    fill: #33323D;
    
    ${props => props.inverted && css`
        fill: #ffffff;
    `};
    
    ${props => props.hamburger && css`
        @media (min-width: 501px) {
          display: none;
        }
    `};
    
    &:hover {
      fill: rgb(95, 180, 162);
    }
    
    ${props => props.mobile && css`
        margin-bottom: 1.6rem;
        @media (min-width: 501px) {
            display: none;
        }
    `}
    
    ${props => props.desktop && css`
        display: none;
        
        @media (min-width: 501px) {
            display: inherit;
        }
    `}
`;
