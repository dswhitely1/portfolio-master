import React from 'react';
import {ContactContainer, ContactHeader, Line} from "../../styled-components/Contact";
import {Button} from "../../styled-components/Button";

const Contact = () => (
    <ContactContainer>
        <ContactHeader>
            <h2>Interested in doing a project together?</h2>
        </ContactHeader>
        <Line/>
        <Button secondary>Contact Me</Button>
    </ContactContainer>
)

export default Contact;
