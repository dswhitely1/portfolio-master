import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    margin-left: 3.2rem;
    margin-right: 3.2rem;
    
    ${props => props.footer && css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 5.6rem;
        
        @media (min-width: 501px) {
            padding-top: 0;
            justify-content: flex-start;
            flex-direction: row;
            align-items: center;
        }
    `};
    
    @media (min-width: 501px) {
        margin-left: 3.9rem;
        margin-right: 4rem;
    }
    
    @media (min-width: 769px) {
        margin-left: 16.5rem;
        margin-right: 16.5rem;
    }
`;
