import React from 'react';
import {SVG} from "../styled-components/Logo";

interface IProps {
    mode: string
    handleClick: () => void
}

const RightArrow = ({mode, handleClick}: IProps) => {
    return (
        <SVG desktop={mode==='desktop'} mobile={mode==='mobile'} xmlns="http://www.w3.org/2000/svg" width="10" height="16" onClick={handleClick}>
            <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" />
        </SVG>
    )
}

export default RightArrow;