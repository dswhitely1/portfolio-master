import React, {ChangeEvent, FormEvent, useState} from 'react';
import {formData} from "./formData";
import InputElement from "./InputElement";
import {ContactFormContainer, Content, FormButton} from "./contact-form.styles";
import axios from 'axios';


export interface IFormState {
    name: string
    email: string
    message: string

    [key: string]: string
}


const ContactForm = () => {
    const [values, setValues] = useState<IFormState>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => setValues({
        ...values,
        [name]: value
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const msg = {
            to: 'don1@donwhitely.com',
            from: 'don1@donwhitely.com',
            subject: `A message sent from ${values.name}, ${values.email}`,
            text: values.message
        };
        axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/mail`, msg).then(() => setValues({
            name: '',
            email: '',
            message: ''
        })).catch(err => console.log(err.response))
    };

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
