import { ReactNode, createContext, useContext, useState } from "react"

interface IAppContextValue {
    theme: "dark" | "light"
}

interface IAppContextProvider {
    children: ReactNode
}

const AppContext = createContext<IAppContextValue | null>(null)

export const useAppContext = () => {
    const appContext = useContext(AppContext)

    if(!appContext) {
        throw new Error("There is no theme")
    }

    return appContext;
}

export const AppContextProvider = ( {children} : IAppContextProvider) => {

    const [theme, setTheme] = useState<"dark" | "light">("dark")

    const value = {
        theme,
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
