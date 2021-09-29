import React from 'react';
import {useLocation, Switch, Route} from 'react-router-dom'
import {IPortfolioData} from "../portfolio/portfolioData";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ContactPage from "../contact-page/ContactPage";
import EnsureDataRoute from "../EnsureDataRoute";
import PortfolioDetail from "../portfolio/PortfolioDetail";
import PortfolioOverview from "../portfolio/PortfolioOverview";
import LandingPage from "../landing-page/LandingPage";

interface IProps {
    project: IPortfolioData
    projects: IPortfolioData[]
    setProject: any
}

const AnimatedSwitch = ({project, projects, setProject}: IProps) => {
    const location = useLocation()
    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" timeout={1500}>
                <Switch location={location}>
                    <Route path="/contact" component={ContactPage}/>
                    <EnsureDataRoute path="/portfolio/founder-grants" project={project} projects={projects}
                                     setProject={setProject}
                                     component={PortfolioDetail}/>
                    <EnsureDataRoute path="/portfolio/emergency-electric-inc" project={project} projects={projects}
                                     setProject={setProject}
                                     component={PortfolioDetail}/>
                    <EnsureDataRoute path="/portfolio/create-react-project" project={project} projects={projects}
                                     setProject={setProject}
                                     component={PortfolioDetail} />
                    <Route path="/portfolio"
                           render={() => <PortfolioOverview setProject={setProject} projects={projects}/>}/>
                    <Route exact path="/" component={LandingPage}/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default AnimatedSwitch;
