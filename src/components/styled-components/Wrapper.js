import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    margin-left: 16.5rem;
    margin-right: 16.5rem;
    
    ${props => props.footer && css`
        display: flex;
        justify-content: flex-start;
        align-items: end;
    `}
    
    @media (max-width: 768px) {
        margin-left: 3.9rem;
        margin-right: 4rem;
    }
`;