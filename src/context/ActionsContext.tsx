import {createContext} from 'react';
import {Actions} from "../store/useActions";

export const ActionsContext = createContext<Actions|null>(null);
export const ActionsProvider = ActionsContext.Provider;
