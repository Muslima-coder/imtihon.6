import { createContext } from "react";

export const Context = createContext()

export const GlobalContext = ({children}) => {
    return <Context.Provider value={{}}>{children}</Context.Provider>
}