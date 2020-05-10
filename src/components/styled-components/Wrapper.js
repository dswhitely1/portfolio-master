import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    margin-left: 16.5rem;
    margin-right: 16.5rem;
    
    ${props => props.footer && css`
        display: flex;
        justify-content: flex-start;
        align-items: end;
    `}
`;