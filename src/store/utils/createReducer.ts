import {Reducer} from "redux";
import {IContactState} from "../contact/contactTypes";

type State = IContactState
type FunctionMap = FnMap

interface FnMap {
    [key: string]: (state: State, payload: string | null) => void
}

type CreateReducer<S = State, F = FunctionMap> = (initialState: S, fnMap: F) => Reducer

export const createReducer: CreateReducer = (initialState, fnMap) => (state = initialState, action) => {
    const handler = fnMap[action.type];
    return handler ? handler(state, action.payload) : state;
};
