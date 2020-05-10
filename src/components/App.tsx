import React from 'react';
import {Container} from "./styled-components/Container";
import {Wrapper} from "./styled-components/Wrapper";
import Navigation from "./nav/Navigation";
import Hero from "./hero/Hero";
import About from "./about/About";

const App = () => (
    <Container>
        <Wrapper>
            <Navigation/>
            <Hero/>
            <About/>
        </Wrapper>
    </Container>
)

export default App;