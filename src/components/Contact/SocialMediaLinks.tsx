import React from 'react';

interface IProps {
    network: string
    link: string
    faClassName: string
}

function SocialMediaLinks(props: IProps) {
    return (
        <li>
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`icon brands ${props.faClassName}`}
            >
                <span className="label">{props.network}</span>
            </a>
        </li>
    )
}

export default SocialMediaLinks;
