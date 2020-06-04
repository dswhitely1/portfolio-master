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
import {IPortfolioData} from "./portfolio/portfolioData";
import FounderGrants from "../assets/Founder Grants.png";

const App = () => {
    const actions = useActions();
    const location = useLocation();
    const [project, setProject] = useState<IPortfolioData>({
        title: 'Founder Grants',
        description: 'A searchable website attached to a database that can feed users grants based on requirements they enter like the amount of the grant, the founder demographics, the geography of the grant, and the steps involved in getting the grant.',
        techStack: 'Built using React and Node Express.',
        techUsed: ['React', 'Redux', 'Node', 'Express', 'TypeScript', 'Auth0', 'PostgreSQL', 'Material-UI'],
        responsibilities: ['Increased performance of production site by 5%.', 'Refactored Code Base trimming 2000 lines of code.', 'Introduced TypeScript to help other developers understand how the data is flowing through the application.'],
        link: 'https://www.foundergrants.com',
        url: '/portfolio/foundergrants',
        githubFe: 'https://github.com/dswhitely1/startup-grant-database-fe',
        githubBe: 'https://github.com/dswhitely1/startup-grant-database-be',
        image: FounderGrants
    });
    console.log(project);
    return (
        <ActionsProvider value={actions}>
            <GlobalStyle/>
            <Container>
                <Wrapper>
                    <Navigation/>
                    <Switch>
                        <Route path="/contact" component={ContactPage}/>
                        <Route path="/portfolio/founder-grants" render={() => <PortfolioDetail project={project}/>} />
                        <Route path="/portfolio/emergency-electric-inc" render={() => <PortfolioDetail project={project} />} />
                        <Route path="/portfolio/create-react-project" render={() => <PortfolioDetail project={project} />} />
                        <Route path="/portfolio" render={() => <PortfolioOverview setProject={setProject}/>} />
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
