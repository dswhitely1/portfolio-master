import React from "react";
import HeroImage from 'assets/image-homepage-hero.jpg'
import {HeroContainer, HeroImg} from "../styled-components/HeroContainer";
import {Header} from "../styled-components/Header";
import {Button} from "../styled-components/Button";

const Hero = () => (
    <HeroContainer>
            <HeroImg src={HeroImage} alt="IMac displaying a webpage"/>
            <Header>
                <h1>Hey, I’m Donald Whitely and I love building beautiful websites</h1>
                <Button primary>About Me</Button>
            </Header>
    </HeroContainer>
)

export default Hero