import React, { MouseEventHandler, useEffect, useState } from 'react'
import { HeaderMoreSection, LeftSection, LogoSection, SearchBar, SearchSection, StyledHeader } from './Header.styles'
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { Text } from '../../utils/Text.styles';
import { SlMenu } from "react-icons/sl";
import { Icon } from '../../utils/Icon.styles';
import AuthButton from '../authButton/AuthButton';
import { CgMoreVerticalAlt } from "react-icons/cg";
import Settings from '../settings/Settings';
import { useAppContext } from '../../context/App.context';
import { LuSearch } from "react-icons/lu";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Header = () => {

    const { text, setSearchBarText, toggleMenuSize } = useAppContext();
    const [showSettings, setShowSettings] = useState(false)
    const [searchText, setSearchText] = useState("")

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect( () => {
        setSearchBarText(transcript)
        setSearchText(transcript)
    }, [transcript])

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <StyledHeader>

            <LeftSection>
                <Icon className='menu' onClick={() => toggleMenuSize()}>
                    <SlMenu size={17} />
                </Icon>
                <LogoSection to='/'>
                    <FaYoutube size={30} color='#FF0000' />
                    <Text className='logo'>YouTube</Text>
                </LogoSection>
            </LeftSection>

            <SearchSection>
                <SearchBar>
                    <input
                        value={searchText}
                        placeholder={text.search}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Icon
                        data-tooltip-id='search'
                        data-tooltip-content={text.search}
                        onClick={() => setSearchBarText(searchText)}
                    >
                        <LuSearch size={19} />
                    </Icon>
                </SearchBar>
                <Icon
                    data-tooltip-id='voiceSearch'
                    data-tooltip-content={text.voiceSearch}
                    onClick={SpeechRecognition.startListening as MouseEventHandler<HTMLDivElement>}
                    $backgroundShow
                    className={listening ? "listenign" : ""}
                >
                    <FaMicrophone size={19} />
                </Icon>
            </SearchSection>

            <HeaderMoreSection>
                <Icon data-tooltip-id="setting" data-tooltip-content="Settings"
                    onClick={() => setShowSettings(current => !current)}>
                    <CgMoreVerticalAlt size={21} />
                </Icon>
                <AuthButton />
                {showSettings && <Settings />}
            </HeaderMoreSection>
        </StyledHeader>
    )
}

export default Header