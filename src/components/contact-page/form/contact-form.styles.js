import styled from 'styled-components';

export const InputGroup = styled.div`
  label {
    font-size: 1.3rem;
    font-weight: 700;
    display: block;
    height: 3rem;
    margin-bottom: 0.8rem;
    opacity: 0.8;
  }
  
  input, textarea {
    background-color: rgb(234,234,235);
    width: 100%;
    padding: .9rem 0 .9rem 1.6rem;
    font-size: 1.3rem;
    line-height: 2.308;
    margin-bottom: 2.4rem;
  }
   
  input {
    height: 4.8rem;
  }
  
  textarea {
    height: 9.6rem;
  }
`;

export const FormButton = styled.button`
    width: 20rem;
    height: 4.8rem;
    color: #fafafa;
    background-color: #203A4C;
    cursor: pointer;
    margin-bottom: 8rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: .2rem;
    
    &:hover {
      background-color: rgb(95,180,162);
    }
    
    &:disabled, &.disabled {
      background-color: rgb(234,234,235);
      color: #000;
      &:hover {
        cursor: not-allowed;
      }
    }    
    
`;

export const Content = styled.div`
    width: 100%;
`;

export const ContactFormContainer = styled.div`
    h2 {
      margin-bottom: 2.4rem;
      
      @media (min-width: 501px) {
        margin-bottom: 3.2rem;
      }
    }
    @media (min-width: 769px) {
      display: flex;
      justify-content: space-between;
    }
`;
