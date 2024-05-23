import React from 'react'
import { HeaderMoreSection, LeftSection, LogoSection, SearchSection, StyledHeader } from './Header.styles'
import { FaYoutube } from "react-icons/fa";
import { Text } from '../../utils/Text.styles';
import { SlMenu } from "react-icons/sl";
import { Icon } from '../../utils/Icon.styles';
import AuthButton from '../authButton/AuthButton';

const Header = () => {
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

            <SearchSection>search</SearchSection>
            <HeaderMoreSection>
                <AuthButton />
            </HeaderMoreSection>
        </StyledHeader>
    )
}

export default Header