import React, {useState} from 'react';
import SocialMediaLinks from "./SocialMediaLinks";
import links from './links';
function Contact() {
    return (
        <section className="contact">
            <header>
                <h3>Contact Me</h3>
            </header>
            <p>Click on an icon below to reach me.</p>
            <ul className='icons'>
                {links.map((link, i) => <SocialMediaLinks network={link.network} link={link.link}
                                                          faClassName={link.faClassName} key={i}/>)}
            </ul>
        </section>
    )
}

export default Contact;
