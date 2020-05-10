import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    margin-left: 165px;
    margin-right: 165px;
    
    ${props => props.footer && css`
        display: flex;
        justify-content: flex-start;
        align-items: end;
    `}
`;