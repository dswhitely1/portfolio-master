import styled from "styled-components";

export const Header = styled.div`
    h1 {
      font-size: 4rem;
      margin-bottom: 3.2rem;
    }
    
    @media (min-width: 501px) {
        width: 51.4rem;
        height: 27.8rem;
        top: 51.2rem;
        padding-top: 5.6rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        position: absolute;
        background: #fafafa;
    
        h1 {
            margin-right: 5.6rem;
            margin-bottom: 0;
        }
    }
    
    @media (min-width: 769px) {
      width: 44rem;
      height: 36rem;
      padding-top: 5.6rem;
      top: 43rem;
      
      h1 {
        font-size: 5rem;
      }
    }
    
    //@media (max-width: 500px) {
    //  width: 31.1rem;
    //  height: auto;
    //  top: inherit;
    //  padding-top: 0;
    //}
`;
