import React from 'react'
import { StyledBody } from './Body.styles'
import { useAppContext } from '../../context/App.context'
import Menu from '../menu/Menu';

function Body() {

    const {isMenuSmall} = useAppContext();

  return (
    <StyledBody $isSmallMenu={isMenuSmall} >
        <Menu />
        <p>content</p>
    </StyledBody>
  )
}

export default Body