import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    margin-bottom: 15rem;
`;

export const AboutMeContainer = styled.div`
    width: 35rem;
    border-top: 1px solid rgba(32,58,76,0.15);
    border-bottom: 1px solid rgba(32,58,76,0.15);
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    
    @media (max-width: 768px) {
        width: 33.9rem;
    }
`;