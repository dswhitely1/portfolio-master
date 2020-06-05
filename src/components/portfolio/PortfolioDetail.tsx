import React from 'react';
import {IPortfolioData} from "./portfolioData";
import {Image} from "../styled-components/Image";
import {Button} from "../styled-components/Button";
import {
    DetailsContainer,
    DetailsLeftContainer,
    DetailsLeftParagraph,
    DetailsRightContainer,
    DetailsTopics,
    Divider,
    NavigationContainer,
    NavigationItem
} from "../styled-components/PortfolioDetailContainer";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

interface IProps {
    project: IPortfolioData
}

function PortfolioDetail({project: {image, title, link}}: IProps) {
    return (
        <>
            <Image detail src={image} alt={title}/>
            <DetailsContainer>
                <DetailsLeftContainer>
                    <div>
                        <h2>{title}</h2>
                        <DetailsLeftParagraph mobile>The project required me to build a fully responsive landing page to
                            the designs provided. I used
                            HTML5, along with CSS Grid and JavaScript for the area that required interactivity, such as
                            the
                            testimonial slider.</DetailsLeftParagraph>
                        <DetailsTopics first>Interaction Design / Front End Development</DetailsTopics>
                        <DetailsTopics second>HTML / CSS / JS</DetailsTopics>
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            <Button secondary spacing>Visit Website</Button>
                        </a>
                        <Divider mobile/>
                    </div>
                    <DetailsLeftParagraph tablet>The project required me to build a fully responsive landing page to the
                        designs provided. I used
                        HTML5, along with CSS Grid and JavaScript for the area that required interactivity, such as the
                        testimonial slider.</DetailsLeftParagraph>

                </DetailsLeftContainer>
                <Divider tablet/>
                <DetailsRightContainer>
                    <h3>Project Background</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iure, neque quo reiciendis velit
                        vero voluptatibus. Amet dicta fugiat, harum hic incidunt inventore laboriosam, laborum nihil
                        nisi porro rerum tempora.</p>
                    <h3>Static Previews</h3>
                    <Image first src={image} alt={title}/>
                    <Image second src={image} alt={title}/>
                </DetailsRightContainer>
            </DetailsContainer>
            <NavigationContainer>
                <NavigationItem>
                    <LeftArrow mode="mobile"/>
                    <LeftArrow mode="desktop"/>
                    <div>
                        <h3>{title}</h3>
                        <p>Previous Project</p>
                    </div>
                </NavigationItem>
                <NavigationItem right>
                    <RightArrow mode='mobile'/>
                    <div>
                        <h3>{title}</h3>
                        <p>Next Project</p>
                    </div>
                    <RightArrow mode='desktop'/>
                </NavigationItem>
            </NavigationContainer>
        </>
    )
}

export default PortfolioDetail;