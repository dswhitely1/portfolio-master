import React, {useState} from 'react';
import {Container} from "./styled-components/Container";
import {Wrapper} from "./styled-components/Wrapper";
import {Route, Switch, useLocation} from 'react-router-dom'
import Navigation from "./nav/Navigation";
import Footer from "./footer/Footer";
import LandingPage from "./landing-page/LandingPage";
import {GlobalStyle} from "./styled-components/GlobalStyle";
import ContactPage from "./contact-page/ContactPage";
import {ActionsProvider} from "../context/ActionsContext";
import {useActions} from "../store/useActions";
import PortfolioOverview from "./portfolio/PortfolioOverview";
import Contact from "./landing-page/contact/Contact";
import PortfolioDetail from "./portfolio/PortfolioDetail";
import {IPortfolioData, portfolioData} from "./portfolio/portfolioData";
import EnsureDataRoute from "./EnsureDataRoute";
import "./App.css"
import AnimatedSwitch from "./routes/AnimatedSwitch";
import ScrollToTop from "./ScrollToTop";

const App = () => {
    const actions = useActions();
    const location = useLocation();
    const [project, setProject] = useState<IPortfolioData>({
        title: '',
        description: '',
        background: '',
        techStack: '',
        techUsed: [],
        responsibilities: [],
        link: '',
        url: '',
        githubFe: '',
        githubBe: '',
        image: '',
        image1: '',
        image2: ''
    });
    const [projects] = useState<IPortfolioData[]>(portfolioData);
    return (
        <ActionsProvider value={actions}>
            <GlobalStyle/>
            <ScrollToTop />
            <Container>
                <Wrapper>
                    <Navigation/>
                    <AnimatedSwitch project={project} projects={projects} setProject={setProject} />
                    {location.pathname !== '/contact' && <Contact/>}
                </Wrapper>
                <Footer/>
            </Container>
        </ActionsProvider>
    );
};

export default App;
