import React, {useState} from 'react';
import {Container} from "./styled-components/Container";
import {Wrapper} from "./styled-components/Wrapper";
import {useLocation} from 'react-router-dom'
import Navigation from "./nav/Navigation";
import Footer from "./footer/Footer";
import {GlobalStyle} from "./styled-components/GlobalStyle";
import {ActionsProvider} from "../context/ActionsContext";
import {useActions} from "../store/useActions";
import Contact from "./landing-page/contact/Contact";
import {IPortfolioData, portfolioData} from "./portfolio/portfolioData";
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
        github: [],
        image: '',
        image1: '',
        image2: ''
    });
    const [projects] = useState<IPortfolioData[]>(portfolioData);
    return (
        <ActionsProvider value={actions}>
            <GlobalStyle/>
            <ScrollToTop/>
            <Container>
                <Wrapper>
                    <Navigation/>
                    <AnimatedSwitch project={project} projects={projects} setProject={setProject}/>
                    {location.pathname !== '/contact' && <Contact/>}
                </Wrapper>
                <Footer/>
            </Container>
        </ActionsProvider>
    );
};

export default App;
