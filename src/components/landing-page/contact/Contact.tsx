import React from 'react';
import {useHistory} from 'react-router-dom';
import {ContactContainer, ContactHeader, Line} from "../../styled-components/Contact";
import {Button} from "../../styled-components/Button";

const Contact = () => {
    const history = useHistory()
    return (
    <ContactContainer>
        <ContactHeader>
            <h2>Interested in doing a project together?</h2>
        </ContactHeader>
        <Line/>
        <Button secondary onClick={() => history.push('/contact')}>Contact Me</Button>
    </ContactContainer>
)}

export default Contact;
