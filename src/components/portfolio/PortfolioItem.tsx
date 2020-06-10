import React from 'react';
import {useHistory} from 'react-router-dom';
import {IPortfolioData} from "./portfolioData";
import {Button} from "../styled-components/Button";
import {Image} from "../styled-components/Image";
import {PortfolioOverviewContainer, PortfolioRightContainer} from "../styled-components/PortfolioOverviewContainer";

interface IProps {
    data: IPortfolioData
    reverse: boolean
    setProject: any
}

function PortfolioItem({reverse, data, setProject}: IProps) {
    const {description, title, image1, url} = data;
    const history = useHistory();

    function handleClick() {
        setProject(data)
        history.push(url)
    }

    return (
        <PortfolioOverviewContainer>
            <Image src={image1} alt={title}/>
            <PortfolioRightContainer reverse={reverse}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button secondary onClick={handleClick}>View Case Study</Button>
            </PortfolioRightContainer>
        </PortfolioOverviewContainer>
    )
}

export default PortfolioItem