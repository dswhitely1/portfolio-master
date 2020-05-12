import React, {ChangeEvent, FormEvent, useState} from 'react';
import {formData} from "./formData";
import InputElement from "./InputElement";
import {ContactFormContainer, Content, FormButton} from "./contact-form.styles";

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
        console.log(values)
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
                    <FormButton disabled type="submit">Send Message</FormButton>
                </form>
            </Content>
        </ContactFormContainer>
    )
};

export default ContactForm;
