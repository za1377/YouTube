import React, { useState } from 'react'
import { HeaderMoreSection, LeftSection, LogoSection, SearchBar, SearchSection, StyledHeader } from './Header.styles'
import { FaYoutube } from "react-icons/fa";
import { Text } from '../../utils/Text.styles';
import { SlMenu } from "react-icons/sl";
import { Icon } from '../../utils/Icon.styles';
import AuthButton from '../authButton/AuthButton';
import { CgMoreVerticalAlt } from "react-icons/cg";
import Settings from '../settings/Settings';

const Header = () => {

    const [showSettings, setShowSettings] = useState(false)
    const [searchText, setSearchText] = useState("")

    return (
        <StyledHeader>

            <LeftSection>
                <Icon className='menu'>
                    <SlMenu size={17}/>
                </Icon>
                <LogoSection to='/'>
                    <FaYoutube size={30} color='#FF0000' />
                    <Text className='logo'>YouTube</Text>
                </LogoSection>
            </LeftSection>

            <SearchSection>
                <SearchBar>
                    <input value={searchText}/>
                </SearchBar>
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