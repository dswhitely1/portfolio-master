import React from 'react';
import {Container} from "./styled-components/Container";
import {Wrapper} from "./styled-components/Wrapper";
import Navigation from "./nav/Navigation";
import Hero from "./hero/Hero";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const App = () => (
    <Container>
        <Wrapper>
            <Navigation/>
            <Hero/>
            <About/>
            <Contact/>
        </Wrapper>
        <Footer />
    </Container>
)

export default App;