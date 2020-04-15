import React, {useState} from 'react';
import data, {ProjectLink} from './projects_data';
import Project from "./Project";

function Projects() {
    const [links] = useState<ProjectLink[]>(data);
    return (
        <section id="projects">
            <header>
                <h2>Projects that I have worked on</h2>
            </header>
            <div className="articles">
            {links.map((link, i) => <Project {...link} key={i}/>)}
            </div>
        </section>
    )
}

export default Projects;
