import styled, {css} from "styled-components";

export const DetailsContainer = styled.div`
    margin-top: 8rem;
    display: flex;
    justify-content: space-between;
    h2, h3 {
        margin-bottom: 2.8rem;
    }
    p {
        line-height: 2;
    }
`;

export const DetailsLeftContainer = styled.div`
    width: 47.5rem;
    margin-right: 12.5rem;
    border-top: 1px solid rgba(32,58,76,0.15);
    padding-top: 4.8rem;
`;

export const Divider = styled.div`
    margin-top: 4.9rem;
    border-bottom: 1px solid rgba(32,58,76,0.15);
`;

export const DetailsRightContainer = styled.div`
    width: 63.5rem;
    margin-bottom: 6.4rem;
    p {
        margin-bottom: 4rem;
    }
`;

export const DetailsTopics = styled.p`
    color: #5fB4A2;
    font-weight: 700;
    margin-bottom: 3.2rem;
    ${props => props.first && css`
        margin-top: 2.3rem;
        margin-bottom: 1.6rem;
    `}
`;

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(32,58,76,0.15);
    border-bottom: 1px solid rgba(32,58,76,0.15);
    margin-bottom: 11.5rem;
`;

export const NavigationItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3.3rem;
    padding-bottom: 3.3rem;
    border-right: 1px solid rgba(32,58,76,0.15);
    width:50%;
    
    p {
        color: rgba(32,58,76,0.5);
        line-height: 3;
    }
    
    div {
        margin-left: 3.2rem;
    }
    
    ${props => props.right && css`
        text-align: right;
        border-right: none;
        justify-content: flex-end;
        
        div {
            margin-right: 3.2rem;
        }
    `}
`;
