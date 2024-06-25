import React from 'react'
import { StyledBody } from './Body.styles'
import { useAppContext } from '../../context/App.context'
import Menu from '../menu/Menu';
import Content from '../content/Content';

function Body() {

    const {isMenuSmall} = useAppContext();

  return (
    <StyledBody $isSmallMenu={isMenuSmall} >
        <Menu />
        <Content />
    </StyledBody>
  )
}

export default Body