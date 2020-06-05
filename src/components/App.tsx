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
        image: ''
    });
    const [projects] = useState<IPortfolioData[]>(portfolioData);
    return (
        <ActionsProvider value={actions}>
            <GlobalStyle/>
            <Container>
                <Wrapper>
                    <Navigation/>
                    <Switch>
                        <Route path="/contact" component={ContactPage}/>
                        <EnsureDataRoute path="/portfolio/founder-grants" project={project} projects={projects}
                                         setProject={setProject}
                                         component={PortfolioDetail}/>
                        <EnsureDataRoute path="/portfolio/emergency-electric-inc" project={project} projects={projects}
                                         setProject={setProject}
                                         component={PortfolioDetail}/>
                        <EnsureDataRoute path="/portfolio/create-react-project" project={project} projects={projects}
                                         setProject={setProject}
                                         component={PortfolioDetail}/>} />
                        <Route path="/portfolio"
                               render={() => <PortfolioOverview setProject={setProject} projects={projects}/>}/>
                        <Route exact path="/" component={LandingPage}/>
                    </Switch>
                    {location.pathname !== '/contact' && <Contact/>}
                </Wrapper>
                <Footer/>
            </Container>
        </ActionsProvider>
    );
};

export default App;
