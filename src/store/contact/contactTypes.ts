export enum ContactTypes {
    MAIL_SEND_START = "MAIL_SEND_START",
    MAIL_SEND_SUCCESS = "MAIL_SEND_SUCCESS",
    MAIL_SEND_FAILURE = "MAIL_SEND_FAILURE",
    RESET_SUCCESS = "RESET_SUCCESS"
}

export interface IContactState {
    isLoading: boolean
    errors: string | null
    isSuccess: boolean
}

export interface IMessage {
    to: string
    from: string
    subject: string
    text: string
}

export interface ContactActions {
    sendMessage: (message: IMessage) => void
    resetSuccess: () => void
}
