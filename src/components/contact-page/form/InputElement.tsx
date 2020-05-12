import React, {ChangeEvent} from 'react';
import {IFormData} from "./formData";
import {IFormState} from "./ContactForm";
import {InputGroup} from "./contact-form.styles";

interface IProps {
    values: IFormState
    data: IFormData,
    handleChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
}

const InputElement = ({data: {label, name, type, placeholder}, handleChange, values}: IProps) => (
    <InputGroup>
        <label htmlFor={`#${name}`}>{label}</label>
        {type === "textarea" ?
            (<textarea name={name} onChange={handleChange} rows={4} value={values[name]} id={name} placeholder={placeholder}/>)
            :
        (<input onChange={handleChange} name={name} type={type} value={values[name]} id={name} placeholder={placeholder}/>)}
    </InputGroup>
);

export default InputElement
