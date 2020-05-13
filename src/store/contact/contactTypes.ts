export enum ContactTypes {
    MAIL_SEND_START = "MAIL_SEND_START",
    MAIL_SEND_SUCCESS = "MAIL_SEND_SUCCESS",
    MAIL_SEND_FAILURE = "MAIL_SEND_FAILURE"
}

export interface IContactState {
    isLoading: boolean
    errors: string | null
}

export interface IMessage {
    to: string
    from: string
    subject: string
    text: string
}
