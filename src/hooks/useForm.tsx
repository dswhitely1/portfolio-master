import {ChangeEvent, FormEvent, useState} from 'react';

type CallBackFunction = () => Promise<void> | void
type FormState = IFormState
type FormChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
type FormSubmit = (event: FormEvent<HTMLFormElement>) => void
type FormReset = () => void

interface IFormState {
    name: string
    email: string
    message: string
}

interface UseFormReturn extends Array<FormState | FormChange | FormSubmit | FormReset> {
    0: FormState,
    1: FormChange,
    2: FormSubmit,
    3: FormReset
}

type UseForm<S = FormState, CB = CallBackFunction> = (initialValues: S, cb: CB) => UseFormReturn

export const useForm: UseForm = (initialState, cb) => {
    const [values, setValues] = useState<FormState>(initialState);

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setValues({
        ...values,
        [name]: value
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        cb();
    }

    const handleReset = () => setValues(initialState);

    return [values, handleChange, handleSubmit, handleReset]
};
