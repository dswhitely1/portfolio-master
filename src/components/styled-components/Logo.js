import styled, {css} from "styled-components";

export const Logo = styled.svg`
    fill: #33323D;
    
    ${props => props.inverted && css`
        fill: #ffffff;
    `}
`;