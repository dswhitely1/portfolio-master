import styled, {css} from "styled-components";

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    width: 26.4rem;
    
    ${props => props.icons && css`
        width: 10.4rem;
        margin-left: auto;
    `}
    
    ${props => props.footer && css`
        margin-left: 10rem;
        width: 30.9rem;
    `}
`;