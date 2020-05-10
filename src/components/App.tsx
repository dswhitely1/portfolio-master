import React from 'react';
import {Container} from "./styled-components/Container";
import {Wrapper} from "./styled-components/Wrapper";
import {Route, Switch} from 'react-router-dom'
import Navigation from "./nav/Navigation";
import Footer from "./footer/Footer";
import LandingPage from "./landing-page/LandingPage";
import {GlobalStyle} from "./styled-components/GlobalStyle";

const App = () => (
    <>
        <GlobalStyle/>
        <Container>
            <Wrapper>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                </Switch>
            </Wrapper>
            <Footer/>
        </Container>
    </>
);

export default App;
