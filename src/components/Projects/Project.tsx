import React from 'react';
import {ProjectLink} from "./projects_data";

function Project(props: ProjectLink) {
    return (
        <article className="article">
            <a href={props.link} className="image featured" target="_blank" rel="noopener noreferrer">
                <img src={props.src} alt={props.header} />
            </a>
            <header>
                <h3>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        {props.header}
                    </a>
                </h3>
            </header>
            <p>{props.description}</p>
            <span className="github-font">{`Backend Repository ->`}</span>
            <ul className="icons">
                <li>
                    <a href={props.githubBe} className="icon brands fa-github">
                        <span className="label">
                            Backend Repository
                        </span>
                    </a>
                </li>
                <li>
                    <a href={props.githubFe} className="icon brands fa-github">
                        <span className="label">
                            Front End Repository
                        </span>
                    </a>
                </li>
            </ul>
            <span className="github-font">{`<- Front End Repository`}</span>
        </article>
    )
}

export default Project;
