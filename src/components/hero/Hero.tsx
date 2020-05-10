import React from "react";
import HeroDesktopImage from 'assets/hero-desktop.jpg'
import HeroTabletImage from 'assets/hero-tablet.jpg'
import HeroMobileImage from 'assets/hero-mobile.jpg'
import {
    HeroContainer,
    HeroImg,
    HeroMobileImg,
    HeroTabletImg
} from "../styled-components/HeroContainer";
import {Header} from "../styled-components/Header";
import {Button} from "../styled-components/Button";

const Hero = () => (
    <HeroContainer>
            <HeroImg src={HeroDesktopImage} alt="IMac displaying a webpage"/>
            <HeroTabletImg src={HeroTabletImage} alt="IMac displaying a webpage" />
            <HeroMobileImg src={HeroMobileImage} alt="IMac displaying a webpage" />
            <Header>
                <h1>Hey, I’m Donald Whitely and I love building beautiful websites</h1>
                <Button primary>About Me</Button>
            </Header>
    </HeroContainer>
)

export default Hero