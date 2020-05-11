import styled, {css} from "styled-components";

export const Button = styled.div`
    cursor: pointer;
    border-radius: .5rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 100;
    width: 20rem;
    height: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;    
    
    ${props => props.primary && css`
        background-color: #20394C;
        color: #ffffff;
        &:hover {
            background-color: #5fb482;
        }
    `}
    
    ${props => props.secondary && css`
        color: #20394C;
        border: 1px solid #20394C;
        
        &:hover {
            background-color: #20394C;
            color: #ffffff;
        }
    `}
`;
