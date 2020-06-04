import React from 'react';
import {useHistory} from 'react-router-dom';
import Don from 'assets/Don.png'
import {Image} from "../../styled-components/Image";
import {AboutContainer, AboutMeContainer} from "../../styled-components/AboutContainer";
import {Button} from "../../styled-components/Button";

const About = () => {
    const history = useHistory();
    return (
    <AboutContainer>
        <Image src={Don} alt="Donald Whitely"/>
        <AboutMeContainer>
            <h2>About Me</h2>
            <p>I’m a junior front-end developer looking for a new role in an exciting company.
                I focus on writing accessible HTML, using modern CSS practices and writing clean
                JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to
                whatever tools are required. I’m based in Corydon, IN, but I’m happy working remotely
                and have experience in remote teams. When I’m not coding, you’ll find me spending time
                with my family, or spending time in Azeroth.</p>
            <Button secondary onClick={() => history.push('/portfolio')}>Go to Portfolio</Button>
        </AboutMeContainer>
    </AboutContainer>
)}

export default About;
