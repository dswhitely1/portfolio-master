import {useContactActions} from "./contact/useContactActions";
import {ContactActions} from "./contact/contactTypes";

export const useActions = () => {
    const contact = useContactActions()

    return {contact}
}

interface UseActions {
    contact: ContactActions
}

export type Actions = UseActions
