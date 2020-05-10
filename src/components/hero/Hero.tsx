import React from "react";
import HeroImage from 'assets/image-homepage-hero.jpg'
import {HeroContainer} from "../styled-components/HeroContainer";
import {Header} from "../styled-components/Header";
import {Button} from "../styled-components/Button";

const Hero = () => (
    <HeroContainer>
        <img src={HeroImage} alt="Hero Image"/>
        <Header>
            <h1>Hey, I’m Donald Whitely and I love building beautiful websites</h1>
            <Button primary>About Me</Button>
        </Header>
    </HeroContainer>
)

export default Hero