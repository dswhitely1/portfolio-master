import {createReducer} from "../utils/createReducer";
import {ContactTypes, IContactState} from "./contactTypes";

const initialState: IContactState = {
    isLoading: false,
    errors: null,
    isSuccess: false
};

type Payload = string | null

type ReducerFunction<S = IContactState, P = Payload> = (state: S, payload: P) => IContactState

const sendMsgStart: ReducerFunction = (state) => ({...state, isLoading: true, isSuccess: false, errors: null});
const sendMsgSuccess: ReducerFunction = (state) => ({...state, isLoading: false, isSuccess: true, errors: null});
const sendMsgFailure: ReducerFunction = (state, payload) => ({
    ...state,
    isLoading: false,
    isSuccess: false,
    errors: payload
});

const resetSuccess: ReducerFunction = (state) => ({...state, isSuccess: false})

export default createReducer(initialState, {
    [ContactTypes.MAIL_SEND_START]: sendMsgStart,
    [ContactTypes.MAIL_SEND_SUCCESS]: sendMsgSuccess,
    [ContactTypes.MAIL_SEND_FAILURE]: sendMsgFailure,
    [ContactTypes.RESET_SUCCESS]: resetSuccess
})
