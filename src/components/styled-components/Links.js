import styled, {css} from "styled-components";

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    width: 26.4rem;
    text-transform: uppercase;
    
    ${props => props.nav && css`
        display: none;
        @media (min-width: 501px) {
          display: inherit;
        }
    `}
    
    ${props => props.icons && css`
        width: 10.4rem;
        padding-bottom: 5.6rem;
        @media (min-width: 501px) {
            padding-bottom: 0;
            margin-left: auto;
        }
    `}
    
    ${props => props.footer && css`
        flex-direction: column;
        align-items: center;
        margin: 4rem auto;
        height: 10.6rem;
        @media (min-width: 501px) {
            flex-direction: row;
            margin-left: 4.892rem;
            width: 30.9rem;
            height: auto;
        }
        
        @media (min-width: 769px) {
            margin-left: 10rem;
        }
    `}
`;
