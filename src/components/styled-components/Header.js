import styled from "styled-components";

export const Header = styled.div`
    background: #fafafa;
    width: 44rem;
    height: 36rem;
    padding-top: 5.6rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    top: 43rem;
    
    @media (max-width: 768px) {
        width: 51.4rem;
        height: 27.8rem;
        top: 51.2rem;
        h1 {
            font-size: 4rem;
            margin-right: 5.6rem;
        }
    }
`;