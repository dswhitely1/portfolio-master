import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IPortfolioData} from "./portfolio/portfolioData";
import PortfolioDetail from "./portfolio/PortfolioDetail";

interface IProps {
    component: typeof PortfolioDetail
    project: IPortfolioData
    path: string
    projects: IPortfolioData[]
    setProject: any
}

function EnsureDataRoute({component: Component, project, projects, setProject, ...rest}: IProps) {
    if (project.title === '') {
        return <Redirect to='/'/>
    }

    return <Route {...rest} render={props => <Component {...props} project={project} projects={projects}
                                                        setProject={setProject}/>}/>
}

export default EnsureDataRoute