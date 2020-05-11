import styled from "styled-components";

export const AboutContainer = styled.div`
    margin-bottom: 3.2rem;
    @media (min-width: 501px) {
      display: flex;
      margin-bottom: 15rem;
    }
`;

export const AboutMeContainer = styled.div`
    border-top: 1px solid rgba(32,58,76,0.15);
    border-bottom: 1px solid rgba(32,58,76,0.15);
    margin: 0 auto;
    height: 61.7rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    
    @media (min-width: 501px) {
        width: 35rem;
        height: 50rem;
    }
    
    @media (min-width: 769px) {
        width: 33.9rem;
        height: auto;
    }
`;
