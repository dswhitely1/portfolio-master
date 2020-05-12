import React from 'react';
import {NavLink} from "react-router-dom";
import {Nav} from "../styled-components/Nav";
import {Links} from "../styled-components/Links";
import Logo from "../icons/Logo";
import Hamburger from "../icons/Hamburger";

const Navigation = () => (
    <Nav>
        <Logo />
        <Links nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </Links>
        <Hamburger/>
    </Nav>
);

export default Navigation;
