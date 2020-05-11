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
`;
