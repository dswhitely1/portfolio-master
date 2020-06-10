import React from 'react';
import {Button} from "../styled-components/Button";
import {ButtonContainer} from "../styled-components/PortfolioDetailContainer";
import {IGithub} from "./portfolioData";

interface IProps {
    github: IGithub[]
    link: string
}

function PortfolioButtons({github, link}: IProps) {
    return (
        <ButtonContainer>
            {github.map(({title, link}, number) => (
                <Button secondary spacing key={number}>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        {title}
                    </a>
                </Button>
            ))}
            <Button secondary spacing>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                    Visit Website
                </a>
            </Button>
        </ButtonContainer>
    )
}

export default PortfolioButtons;