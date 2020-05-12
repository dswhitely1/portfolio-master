import React from 'react';
import {SVG} from "../styled-components/Logo";

const Hamburger = () => (
    <SVG hamburger xmlns="http://www.w3.org/2000/svg" width="24" height="13">
        <g fillRule="evenodd">
            <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z"/>
        </g>
    </SVG>
);

export default Hamburger;
