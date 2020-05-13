import React from 'react';
import {formData} from "./formData";
import InputElement from "./InputElement";
import {ContactFormContainer, Content, FormButton} from "./contact-form.styles";
import {useForm} from "../../../hooks/useForm";

const ContactForm = () => {
    const [values, handleChange, handleSubmit, handleReset] = useForm({
        name: '', email: '', message: ''
    }, doSubmit);

    function doSubmit() {
        const msg = {
            to: 'don1@donwhitely.com',
            from: 'don1@donwhitely.com',
            subject: `A message sent from ${values.name}, ${values.email}`,
            text: values.message
        };
        console.log(msg)
        // Have a handle Success that displays a message and resets the form
    }

    return (
        <ContactFormContainer>
            <Content>
                <h2>Contact Me</h2>
            </Content>
            <Content>
                <form onSubmit={handleSubmit}>
                    {formData.map((data, id) => <InputElement values={values} data={data} handleChange={handleChange}
                                                              key={id}/>)}
                    <FormButton type="submit">Send Message</FormButton>
                </form>
            </Content>
        </ContactFormContainer>
    )
};

export default ContactForm;
