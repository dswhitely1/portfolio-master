import styled, {css} from "styled-components";

export const PortfolioOverviewContainer = styled.div`
    @media (min-width: 501px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8rem;
        
        img {
            width: 50%;
            height: auto;
            
            @media (min-width: 769px) {
                max-width: 100%;
                width: 60%;
            }
        }
    }
`;

export const PortfolioWrapper = styled.div`

`;

export const PortfolioRightContainer = styled.div`
    border-top: 1px solid rgba(32,58,76,0.15);
    border-bottom: 1px solid rgba(32,58,76,0.15);
    padding-top: 2.4rem;
    margin-bottom: 7.2rem;
    
    @media (min-width: 501px) {
        width: 28.1rem;
        padding-top: 3.2rem;
        margin-bottom: 0;
    }
    
    @media (min-width: 769px) {
        padding-top: 10.4rem;
        padding-bottom: 10.4rem;
        margin: 0 auto;
        width: 35rem;
    }
    
    h2 {
        margin-bottom: 2.4rem;
        
        @media (min-width: 501px) {
            margin-bottom: 2.9rem;
        }
    }
    
    p {
        line-height: 2;
        margin-bottom: 2.4rem;
        
        @media (min-width: 501px) {
            margin-bottom: 3.5rem;
        }
        
        @media (min-width: 769px) {
            margin-bottom: 2.4rem;
        }
    }
    
    div {
        margin-bottom: 2.5rem;
        
        @media (min-width: 501px) {
            margin-bottom: 5.1rem;
        }
    }
    
    ${props => props.reverse && css`
        @media (min-width: 501px) {
            order: -1;
        }
    `}
`