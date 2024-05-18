import React from 'react'
import { HeaderMoreSection, LeftSection, LogoSection, SearchSection, StyledHeader } from './Header.styles'
import { FaYoutube } from "react-icons/fa";
import { Text } from '../../utils/text.styles';

const Header = () => {
    return (
        <StyledHeader>

            <LeftSection>
                <LogoSection to='/'>
                    <FaYoutube size={30} color='#FF0000'/>
                    <Text>YouTube</Text>
                </LogoSection>
            </LeftSection>

            <SearchSection>search</SearchSection>
            <HeaderMoreSection>header more</HeaderMoreSection>
        </StyledHeader>
    )
}

export default Header