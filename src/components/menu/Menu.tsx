import React from 'react'
import { LargeMenuSection, MenuItem, StyledMenu } from './Menu.styles'
import { useAppContext } from '../../context/App.context'
import { MENU_LARGE, MENU_SMALL } from '../../utils/SideMenu';
import { Text } from '../../utils/Text.styles';
import { ITranslation } from '../../utils/translation';
import AuthButton from '../authButton/AuthButton';

function Menu() {

    const { isMenuSmall, text, activeMenuText } = useAppContext();

    if (isMenuSmall) {
        return <StyledMenu>
            {
                MENU_SMALL.map(({ name, icon }) =>
                    <MenuItem
                        active={
                            activeMenuText.toLowerCase() ===
                            name.toLowerCase()
                        } className='small' key={name}>
                        {icon}
                        <Text>{text[name as keyof ITranslation]}</Text>
                    </MenuItem>
                )
            }
        </StyledMenu>
    } else {
        return <StyledMenu>
            {
                MENU_LARGE.map(({ title, list }, index) =>
                    <>
                        <LargeMenuSection key={index}>
                            {title && <Text className='title'>{text[title as keyof ITranslation]}</Text>}
                            {
                                list.map(({ name, icon }) =>
                                    <MenuItem
                                        active={
                                            activeMenuText.toLowerCase() ===
                                            name.toLowerCase()
                                        }
                                        className='large'
                                        key={name}
                                    >
                                        {icon}
                                        <Text>{text[name as keyof ITranslation]}</Text>
                                    </MenuItem>
                                )
                            }
                        </LargeMenuSection>
                        {index === 1 &&
                            <LargeMenuSection key={index} className='text'>
                                <Text>{text.signInMenuText}</Text>
                                <AuthButton />
                            </LargeMenuSection>
                        }
                    </>

                )
            }
        </StyledMenu>
    }

}

export default Menu