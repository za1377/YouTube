import { ReactNode, createContext, useContext, useState } from "react"

interface IAppContextValue {
    theme: "dark" | "light",
    language: "english" | "farsi",
    toggleLanguage: () => void,
    toggleTheme: () => void
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
    const [language, setLanguage] = useState<"english" | "farsi">("english")

    const toggleTheme = () => {
        setTheme( (theme) => theme === "dark" ? "light" : "dark" )
    }

    const toggleLanguage = () => {
        setLanguage( (lang) => lang === "english" ? "farsi" : "english" )
    }

    const value = {
        theme,
        language,
        toggleLanguage,
        toggleTheme
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
