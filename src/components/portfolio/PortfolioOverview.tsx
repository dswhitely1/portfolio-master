import React, {useState} from 'react';
import {IPortfolioData, portfolioData} from "./portfolioData";
import PortfolioItem from "./PortfolioItem";
import {PortfolioWrapper} from "../styled-components/PortfolioOverviewContainer";

interface IProps {
    setProject: any
    projects: IPortfolioData[]
}

function PortfolioOverview({setProject, projects}:IProps) {
    return (
        <PortfolioWrapper>
            {projects.map((d, i) => <PortfolioItem data={d} key={i} reverse={i % 2 !== 0} setProject={setProject}/>)}
        </PortfolioWrapper>
    )
}

export default PortfolioOverview;