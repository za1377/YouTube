import { Setting, StyleSettings } from './Settings.styles';
import { HiLanguage } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";
import { Text } from '../../utils/Text.styles';
import { useAppContext } from '../../context/App.context';

function Settings() {

    const {theme, text, language, toggleLanguage, toggleTheme} = useAppContext();

    const SETTINGS = [
        {
            lable: text.language,
            icon: <HiLanguage size={23}/>,
            value: text[language === "english" ? "farsi" : "english"],
            onClick: () => toggleLanguage()
        },
        {
            lable: text.appearance,
            icon: <GoMoon  size={23}/>,
            value: text[theme === "dark" ? "light" : "dark"],
            onClick: () => toggleTheme()
        },
    ]

  return (
    <StyleSettings>
        {SETTINGS.map( ({lable, icon, value, onClick}) => (
            <Setting onClick={onClick}>
                {icon}
                <Text>{`${lable} : ${value}`}</Text>
            </Setting>
        ))}
    </StyleSettings>
  )
}

export default Settings