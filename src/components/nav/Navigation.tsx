import React from 'react';
import {NavLink} from "react-router-dom";
import {Nav} from "../styled-components/Nav";
import {SVG} from "../styled-components/Logo";
import {Links} from "../styled-components/Links";

const Navigation = () => (
    <Nav>
        <SVG xmlns="http://www.w3.org/2000/svg" width="61" height="32">
            <path fill-rule="evenodd"
                  d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"></path>
        </SVG>
        <Links>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </Links>
    </Nav>
)

export default Navigation;