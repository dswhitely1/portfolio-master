import React from 'react';
import {SVG} from "../styled-components/Logo";

interface IProps {
    inverted?: boolean
}

const Logo = ({inverted}: IProps) => (
    <SVG inverted={inverted} xmlns="http://www.w3.org/2000/svg" width="61" height="32">
        <g fillRule="evenodd">
            <path d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/>
        </g>
    </SVG>
);

export default Logo;
