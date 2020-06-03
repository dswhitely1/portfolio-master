import React from 'react';
import {Container} from "./styled-components/Container";
import {Wrapper} from "./styled-components/Wrapper";
import {Route, Switch} from 'react-router-dom'
import Navigation from "./nav/Navigation";
import Footer from "./footer/Footer";
import LandingPage from "./landing-page/LandingPage";
import {GlobalStyle} from "./styled-components/GlobalStyle";
import ContactPage from "./contact-page/ContactPage";
import {ActionsProvider} from "../context/ActionsContext";
import {useActions} from "../store/useActions";
import PortfolioOverview from "./portfolio/PortfolioOverview";
import Contact from "./landing-page/contact/Contact";

const App = () => {
    const actions = useActions();
    return (
        <ActionsProvider value={actions}>
            <GlobalStyle/>
            <Container>
                <Wrapper>
                    <Navigation/>
                    <Switch>
                        <Route path="/contact" component={ContactPage}/>
                        <Route path="/portfolio" component={PortfolioOverview} />
                        <Route exact path="/" component={LandingPage}/>
                    </Switch>
                <Contact />
                </Wrapper>
                <Footer/>
            </Container>
        </ActionsProvider>
    );
};

export default App;
