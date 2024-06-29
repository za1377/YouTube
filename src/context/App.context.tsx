import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { ITranslation, LANGAUGE } from '../utils/translation';
import { Video, Videos, createClient } from "pexels";
import { PEXELS_API_KEY } from "../utils/pexels";

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
    activeMenuText: string;
    activeCategory: string;
    setActiveCategory: Dispatch<SetStateAction<string>>;
    videos: Video[];
    isFetchingVideos: boolean;
}

interface IAppContextProvider {
    children: ReactNode
}

const AppContext = createContext<IAppContextValue | null>(null)

export const useAppContext = () => {
    const appContext = useContext(AppContext)

    if (!appContext) {
        throw new Error("There is no theme")
    }

    return appContext;
}

const client = createClient(PEXELS_API_KEY)



export const AppContextProvider = ({ children }: IAppContextProvider) => {

    const [theme, setTheme] = useState<"dark" | "light">("dark")
    const [language, setLanguage] = useState<"english" | "farsi">("farsi")
    const [searchBarText, setSearchBarText] = useState("");
    const [isMenuSmall, setIsMenuSmall] = useState(false);
    const [activeMenuText, setActiveMenuText] = useState("home")
    const [activeCategory, setActiveCategory] = useState("all")
    const [videos, setVideos] = useState<Video[]>([])
    const [isFetchingVideos, setIsFetchingVideos] = useState(false);

    useEffect(() => {
        fetchVideos(activeCategory)
    }, [activeCategory])

    useEffect(() => {
        fetchVideos(searchBarText)
    }, [searchBarText])

    const fetchVideos = async (query: string) => {
        setIsFetchingVideos(true)
        try {
            client.videos.search({
                query,
                per_page: 44
            }).then(response => {
                setVideos((response as Videos).videos)
                setIsFetchingVideos(false)

                console.log("response : " + response)
            }).catch(error => {
                setIsFetchingVideos(false)

                console.log("there was an error!!")

            })
        } catch (error) {
            console.log("there was an error!!")

        }
    }

    const toggleTheme = () => {
        setTheme((theme) => theme === "dark" ? "light" : "dark")
    }

    const toggleLanguage = () => {
        setLanguage((lang) => lang === "english" ? "farsi" : "english")
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
        toggleMenuSize,
        activeMenuText,
        activeCategory,
        setActiveCategory,
        videos,
        isFetchingVideos
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
