import styled, {css} from "styled-components";

export const SVG = styled.svg`
    fill: #33323D;
    
    ${props => props.inverted && css`
        fill: #ffffff;
    `}
`;