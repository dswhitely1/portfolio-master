import React from 'react';
import {Container} from "./styled-components/Container";
import {Wrapper} from "./styled-components/Wrapper";
import Navigation from "./nav/Navigation";

const App = () => (
    <Container>
        <Wrapper>
            <Navigation />
            <h1>Hello World</h1>
        </Wrapper>
    </Container>
)

export default App;