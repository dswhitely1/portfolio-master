export interface IFormData {
    name: string
    label: string
    type: string
    placeholder: string
}


export const formData: IFormData[] = [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Jane Appleseed'
    },
    {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'email@example.com'
    },
    {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'How can I help?'
    }
]
