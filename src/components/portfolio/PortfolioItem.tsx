import React from 'react';
import {IPortfolioData} from "./portfolioData";
import {Button} from "../styled-components/Button";
import {Image} from "../styled-components/Image";
import {PortfolioOverviewContainer, PortfolioRightContainer} from "../styled-components/PortfolioOverviewContainer";

interface IProps {
    data: IPortfolioData
    reverse: boolean
}

function PortfolioItem({reverse, data: {description, title, githubBe, githubFe, image, link, url}}: IProps) {
    console.log(reverse);
    return (
        <PortfolioOverviewContainer>
            <Image src={image} alt={title}/>
            <PortfolioRightContainer reverse={reverse}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button secondary>View Project</Button>
            </PortfolioRightContainer>
        </PortfolioOverviewContainer>
    )
}

export default PortfolioItem