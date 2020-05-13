import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {axiosNoAuth as axios} from '../utils/axios';
import {ContactTypes, IMessage} from "./contactTypes";

export const useContactActions = () => {
    const dispatch = useDispatch();

    const sendMessage = useCallback((message: IMessage) => {
        const send = axios();
        dispatch({type: ContactTypes.MAIL_SEND_START});
        send.post('/mail', message).then(() => dispatch({type: ContactTypes.MAIL_SEND_SUCCESS})).catch(() => dispatch({
            type: ContactTypes.MAIL_SEND_FAILURE,
            payload: "An Error Has Occurred"
        }))
    }, [dispatch]);

    const resetSuccess = useCallback(() => dispatch({type: ContactTypes.RESET_SUCCESS}), [dispatch]);

    return {sendMessage, resetSuccess}
};
