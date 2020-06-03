import styled, {css} from "styled-components";

export const PortfolioOverviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8rem;
`;

export const PortfolioWrapper = styled.div`
    margin-bottom: 15rem;
`;

export const PortfolioRightContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border-top: 1px solid rgba(32,58,76,0.15);
    border-bottom: 1px solid rgba(32,58,76,0.15);
    margin-left: 10rem;
    margin-right: 10rem;
    
    p {
        line-height: 1.875;
    }
    
    ${props => props.reverse && css`
        order: -1;
    `}
`;