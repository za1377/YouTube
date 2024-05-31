import { Setting, StyleSettings } from './Settings.styles';
import { HiLanguage } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";
import { Text } from '../../utils/Text.styles';
import { useAppContext } from '../../context/App.context';

function Settings() {

    const {theme} = useAppContext();

    const SETTINGS = [
        {
            lable: 'Language',
            icon: <HiLanguage size={23}/>,
            value: 'English',
            onClick: () => null
        },
        {
            lable: 'Appearance',
            icon: <GoMoon  size={23}/>,
            value: theme,
            onClick: () => null
        },
    ]

  return (
    <StyleSettings>
        {SETTINGS.map( ({lable, icon, value, onClick}) => (
            <Setting>
                {icon}
                <Text>{`${lable} : ${value}`}</Text>
            </Setting>
        ))}
    </StyleSettings>
  )
}

export default Settings