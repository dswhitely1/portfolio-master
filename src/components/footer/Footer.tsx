import React from 'react';
import {Link} from "react-router-dom";
import {FooterContainer} from "../styled-components/Footer";
import {Wrapper} from "../styled-components/Wrapper";
import {Links} from "../styled-components/Links";
import Logo from "../icons/Logo";
import SocialMediaLinks from "../icons/SocialMediaLinks";

const Footer = () => (
    <FooterContainer>
        <Wrapper footer>
            <Logo inverted={true}/>
            <Links footer>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Links>
            <Links icons>
                <SocialMediaLinks inverted/>
            </Links>
        </Wrapper>
    </FooterContainer>
);

export default Footer;
