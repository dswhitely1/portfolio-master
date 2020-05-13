import {combineReducers} from "redux";
import contact from "./contact/contactReducer";

export const rootReducer = combineReducers({contact})

export type AppState = ReturnType<typeof rootReducer>
