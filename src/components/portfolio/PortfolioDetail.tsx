import React, {useEffect, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {IPortfolioData} from "./portfolioData";
import {Image} from "../styled-components/Image";
import {Button} from "../styled-components/Button";
import {
    ButtonContainer,
    DetailsContainer,
    DetailsLeftContainer,
    DetailsLeftParagraph,
    DetailsRightContainer,
    DetailsTopics,
    Divider,
    NavigationContainer,
    NavigationItem,
    NavigationWords,
    Responsibilities,
    StyledH1
} from "../styled-components/PortfolioDetailContainer";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import PortfolioButtons from "./PortfolioButtons";

interface IProps {
    project: IPortfolioData,
    projects: IPortfolioData[]
    setProject: any
}

function PortfolioDetail({project: {image, responsibilities, image1, image2, title, link, github, background, description, techUsed}, projects, setProject}: IProps) {
    const history = useHistory()
    const location = useLocation()
    const [index, setIndex] = useState<{ [key: string]: number }>(() => {
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

    function handleLambdaSchoolLink(data: String) {
        const newStr = data.split('Lambda School.')
        return (
            <p>
                <span>{newStr[0]}</span>
                <a href='https://www.lambdaschool.com' target='_blank' rel='noopener noreferrer'>Lambda School</a>
                <span>{`.${newStr[1]}`}</span>
                <a href='https://medium.com/javascript-in-plain-english/opinionated-redux-setup-with-typescript-eb71eb619716'
                   target='_blank' rel='noopener noreferrer'>here</a>
                <span>.</span>
            </p>
        )
    }

    return (
        <>
            <StyledH1>{`${title} Case Study`}</StyledH1>
            <DetailsContainer>
                <DetailsLeftContainer>
                    <div>
                        <h2>{title}</h2>
                        <DetailsLeftParagraph mobile>{description}</DetailsLeftParagraph>
                        <DetailsTopics first>Interaction Design / Front End Development</DetailsTopics>
                        <DetailsTopics second>Built using:
                            <ul>
                                {techUsed.map((tech, index) => <li key={index}>{tech}</li>)}
                            </ul>
                        </DetailsTopics>
                        <PortfolioButtons github={github} link={link} />
                        <Divider mobile/>
                    </div>
                    <DetailsLeftParagraph tablet>{description}</DetailsLeftParagraph>

                </DetailsLeftContainer>
                <Divider tablet/>
                <DetailsRightContainer>
                    <h3>Project Background</h3>
                    {title != 'Founder Grants' ? <p>{background}</p> : handleLambdaSchoolLink(background)}
                    <Responsibilities>Responsibilities:</Responsibilities>
                    <ul>
                        {responsibilities.map((listItem, index) => <li key={index}>{listItem}</li>)}
                    </ul>
                    <h3>Static Previews</h3>
                    <Image first src={image1} alt={title}/>
                    <Image second src={image2} alt={title}/>
                </DetailsRightContainer>
            </DetailsContainer>
            <NavigationContainer>
                <NavigationItem>
                    <Link to={projects[index.prevIndex].url}>
                        <LeftArrow mode="mobile" handleClick={() => handleClick(index.prevIndex)}/>
                        <LeftArrow mode="desktop" handleClick={() => handleClick(index.prevIndex)}/>
                    </Link>
                    <NavigationWords onClick={() => handleClick(index.prevIndex)}>
                        <h3>{projects[index.prevIndex].title}</h3>
                        <p>Previous Project</p>
                    </NavigationWords>
                </NavigationItem>
                <NavigationItem right>
                    <Link to={projects[index.nextIndex].url}>
                        <RightArrow mode='mobile' handleClick={() => handleClick(index.nextIndex)}/>
                    </Link>
                    <NavigationWords onClick={() => handleClick(index.nextIndex)}>
                        <h3>{projects[index.nextIndex].title}</h3>
                        <p>Next Project</p>
                    </NavigationWords>
                    <Link to={projects[index.nextIndex].url}>
                        <RightArrow mode='desktop' handleClick={() => handleClick(index.nextIndex)}/>
                    </Link>
                </NavigationItem>
            </NavigationContainer>
        </>
    )
}

export default PortfolioDetail;