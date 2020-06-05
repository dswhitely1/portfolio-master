import styled, {css} from "styled-components";

export const DetailsContainer = styled.div`
    margin-top: 4rem;
    border-top: 1px solid rgba(32,58,76,0.15);
    padding-top: 2.4rem;
   
    h2 {
        margin-bottom: 2.4rem;
    }
    
    p {
        line-height: 2;
        margin-bottom: 2.4rem;
    }
    
    @media (min-width: 501px) {
        padding-top: 3.3rem;
    }
`;

export const DetailsLink = styled.a`
    padding-bottom: 2.4rem;
`;

export const DetailsLeftContainer = styled.div`
    @media (min-width: 501px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const DetailsLeftParagraph = styled.p`
    ${props => props.mobile && css`
        @media (min-width: 501px) {
            display: none;
        }
        
        @media (min-width: 769px) {
            display: inherit;
        }
    `}
    
    ${props => props.tablet && css`
        display: none;
        
        @media (min-width: 501px) {
            display: inherit;
            width: 50%;;
        }
        
        @media (min-width: 769px) {
            display: none;
        }
    `}
`;

export const Divider = styled.div`
    border-top: 1px solid rgba(32,58,76,0.15);
    ${props => props.spacing && css`
        margin-bottom: 4.8rem;
    `}
`;

export const DetailsRightContainer = styled.div`
    padding-top: 4rem;
    h3 {
        margin-bottom: 2.8rem;
    }
    
    p {
        margin-bottom: 4rem;
    }
`;

export const DetailsTopics = styled.div`
    color: #5fB4A2;
    font-size: 1.3rem;
    font-weight: 700;
    height: 3rem;
    ${props => props.first && css`
        // margin-top: 2.3rem;
        // margin-bottom: 1.6rem;
    `}
    ${props => props.second && css`
        margin-bottom: 2.4rem;
    `}
`;

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(32,58,76,0.15);
    border-bottom: 1px solid rgba(32,58,76,0.15);
    margin-bottom: 6.4rem;
    
    @media (min-width: 501px) {
        margin-bottom: 8rem;
    }
`;

export const NavigationItem = styled.div`    
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
    border-right: 1px solid rgba(32,58,76,0.15);
    width:50%;
    
    p {
        color: rgba(32,58,76,0.5);
    }
    
    @media (min-width: 501px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        div {
            margin-left: 3.2rem;
        }
    }
    
    ${props => props.right && css`    
        text-align: right;
        border-right: none;
        @media (min-width: 501px) {
            justify-content: flex-end;
            div {
                margin-right: 3.2rem;
            }
        }
    `}
`;
