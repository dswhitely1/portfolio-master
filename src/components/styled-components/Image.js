import styled from "styled-components";

export const Image = styled.img`
    max-width: 54rem;
    width: 100%;
    height: auto;
    
    @media (max-width: 768px) {
        width: 40%;
        height: 60rem;
    }
`;