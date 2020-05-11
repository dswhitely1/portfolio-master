import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8rem;
    height: 21.4rem;
    
    h2 {
      width: 70%;
      text-align: center;
      margin: 0 auto 4rem;
      
      @media (min-width: 501px) {
        width: 100%;
        text-align: inherit;
        margin: inherit;
      }
    }
    
    @media (min-width: 501px) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 15rem;
      height: auto;
    }
`;

export const Line = styled.div`
    display: none;
    @media (min-width: 501px) {
      display: inherit;
      border-top: 1px solid #203A4C;
      opacity: 0.15;
      max-width: 11.3rem;
      width: 100%;
    }
    
    @media (min-width: 769px) {
      max-width: 53.4rem;
    }
`;

export const ContactHeader = styled.div`
    width: 35rem;
`;
