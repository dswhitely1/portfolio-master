import React, {useContext, useEffect} from 'react';
import {formData} from "./formData";
import InputElement from "./InputElement";
import {ContactFormContainer, Content, FormButton} from "./contact-form.styles";
import {useForm} from "../../../hooks/useForm";
import {ActionsContext} from "../../../context/ActionsContext";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/reducers";

const ContactForm = () => {
    const actions = useContext(ActionsContext);
    const {isLoading, isSuccess} = useSelector((state: AppState) => state.contact);
    const [values, handleChange, handleSubmit, handleReset] = useForm({
        name: '', email: '', message: ''
    }, doSubmit);

    useEffect(() => {
        if (isSuccess) {
            handleReset()
            actions?.contact.resetSuccess()
        }
    }, [isSuccess])

    function doSubmit() {
        const msg = {
            to: 'don1@donwhitely.com',
            from: 'don1@donwhitely.com',
            subject: `A message sent from ${values.name}, ${values.email}`,
            text: values.message
        };
        actions?.contact.sendMessage(msg);
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
                    <FormButton disabled={isLoading} type="submit">
                        {isLoading ? 'Sending' : 'Send Message'}
                    </FormButton>
                </form>
            </Content>
        </ContactFormContainer>
    )
};

export default ContactForm;
