import React from 'react';
import {SVG} from "../styled-components/Logo";

interface IProps {
    mode: string
}

const LeftArrow = ({mode}: IProps) => {
    return (
        <SVG desktop={mode==='desktop'} mobile={mode==='mobile'} xmlns="http://www.w3.org/2000/svg" width="10" height="16">
            <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8" />
        </SVG>
    )
}

export default LeftArrow;