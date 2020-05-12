import styled from 'styled-components';

export const IconContainer = styled.div`
  width: 10.4rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  @media (min-width: 769px) {
    margin-bottom: 4.8rem;
  }
`;

export const ContactHeaderContainer = styled.div`
  margin-bottom: 3.2rem;
  border-top: 1px solid rgba(32,58,76,0.15);
  border-bottom: 1px solid rgba(32,58,76,0.15);
  @media (min-width: 769px) {
    padding-top: 4.8rem;
  }
  
  h2 {
    margin-top: 2.5rem;
    margin-bottom: 2.4rem;
    
    @media (min-width: 769px) {
      margin: 0;
    }
  }
  
  p {
    margin: 0 0 2.4rem;
  }
  
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  width: 100%;
`;
