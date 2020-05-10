import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 15rem;
`;

export const HeroImg = styled.img`
    width: 100%;
    height: auto;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const HeroTabletImg = styled.img`
    display: none;
    
    @media (max-width: 768px) {
        display: inherit;
    }
    
    @media (max-width: 500px) {
        display: none;
    }
`;

export const HeroMobileImg = styled.img`
    display: none;
    
    @media (max-width: 500px) {
        display: inherit;
    }
`;
