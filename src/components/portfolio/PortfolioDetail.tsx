import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
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
    project: IPortfolioData,
    projects: IPortfolioData[]
    setProject: any
}

function PortfolioDetail({project: {image, title, link, background, description}, projects, setProject}: IProps) {
    const history = useHistory()
    const location = useLocation()
    const [index, setIndex] = useState<{[key: string]: number}>(() => {
        const currIndex = projects.findIndex(i => i.title === title);
        const nextIndex = currIndex === projects.length - 1 ? 0 : currIndex + 1;
        const prevIndex = currIndex === 0 ? projects.length - 1 : currIndex - 1;
        return {
            nextIndex, prevIndex
        }
    })

    useEffect(() => {
        const currIndex = projects.findIndex(i => i.title === title);
        const nextIndex = currIndex === projects.length - 1 ? 0 : currIndex + 1;
        const prevIndex = currIndex === 0 ? projects.length - 1 : currIndex - 1;
        setIndex({nextIndex, prevIndex})
    }, [location])


    function handleClick(index: number) {
        const data = projects[index];
        setProject(data)
        history.push(data.url)
    }

    return (
        <>
            <Image detail src={image} alt={title}/>
            <DetailsContainer>
                <DetailsLeftContainer>
                    <div>
                        <h2>{title}</h2>
                        <DetailsLeftParagraph mobile>{description}</DetailsLeftParagraph>
                        <DetailsTopics first>Interaction Design / Front End Development</DetailsTopics>
                        <DetailsTopics second>HTML / CSS / JS</DetailsTopics>
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            <Button secondary spacing>Visit Website</Button>
                        </a>
                        <Divider mobile/>
                    </div>
                    <DetailsLeftParagraph tablet>{description}</DetailsLeftParagraph>

                </DetailsLeftContainer>
                <Divider tablet/>
                <DetailsRightContainer>
                    <h3>Project Background</h3>
                    <p>{background}</p>
                    <h3>Static Previews</h3>
                    <Image first src={image} alt={title}/>
                    <Image second src={image} alt={title}/>
                </DetailsRightContainer>
            </DetailsContainer>
            <NavigationContainer>
                <NavigationItem>
                    <LeftArrow mode="mobile" handleClick={()=>handleClick(index.prevIndex)}/>
                    <LeftArrow mode="desktop" handleClick={()=>handleClick(index.prevIndex)}/>
                    <div>
                        <h3>{projects[index.prevIndex].title}</h3>
                        <p>Previous Project</p>
                    </div>
                </NavigationItem>
                <NavigationItem right>
                    <RightArrow mode='mobile' handleClick={()=>handleClick(index.nextIndex)}/>
                    <div>
                        <h3>{projects[index.nextIndex].title}</h3>
                        <p>Next Project</p>
                    </div>
                    <RightArrow mode='desktop' handleClick={()=>handleClick(index.nextIndex)}/>
                </NavigationItem>
            </NavigationContainer>
        </>
    )
}

export default PortfolioDetail;