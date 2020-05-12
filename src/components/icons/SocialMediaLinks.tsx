import React from 'react';
import Github from "./Github";
import Twitter from "./Twitter";
import LinkedIn from "./LinkedIn";

interface IProps {
    inverted?: boolean
}

const SocialMediaLinks = ({inverted}: IProps) => (
    <>
        <Github inverted={inverted}/>
        <Twitter inverted={inverted}/>
        <LinkedIn inverted={inverted}/>
    </>
);

export default SocialMediaLinks
