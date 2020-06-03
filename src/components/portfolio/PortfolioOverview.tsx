import React, {useState} from 'react';
import {IPortfolioData, portfolioData} from "./portfolioData";
import PortfolioItem from "./PortfolioItem";
import {PortfolioWrapper} from "../styled-components/PortfolioOverviewContainer";

function PortfolioOverview() {
    const [data] = useState<IPortfolioData[]>(portfolioData);
    return (
        <PortfolioWrapper>
            {data.map((d, i) => <PortfolioItem data={d} key={i} reverse={i % 2 !== 0}/>)}
        </PortfolioWrapper>
    )
}

export default PortfolioOverview;