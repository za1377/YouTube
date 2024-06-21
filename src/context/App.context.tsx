import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"
import {ITranslation, LANGAUGE} from '../utils/translation'

interface IAppContextValue {
    theme: "dark" | "light";
    language: "english" | "farsi";
    toggleLanguage: () => void;
    toggleTheme: () => void;
    text: ITranslation;
    searchBarText: string;
    setSearchBarText: Dispatch<SetStateAction<string>>;
    isMenuSmall: boolean;
    toggleMenuSize: () => void;
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
    const [language, setLanguage] = useState<"english" | "farsi">("farsi")
    const [searchBarText, setSearchBarText] = useState("");
    const [isMenuSmall, setIsMenuSmall] = useState(false);

    const toggleTheme = () => {
        setTheme( (theme) => theme === "dark" ? "light" : "dark" )
    }

    const toggleLanguage = () => {
        setLanguage( (lang) => lang === "english" ? "farsi" : "english" )
    }

    const toggleMenuSize = () => {
        setIsMenuSmall(state => !state)
    }

    const value = {
        theme,
        language,
        toggleLanguage,
        toggleTheme,
        text: LANGAUGE[language],
        searchBarText,
        setSearchBarText,
        isMenuSmall,
        toggleMenuSize
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
