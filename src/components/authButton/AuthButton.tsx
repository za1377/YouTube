import React from 'react'
import { StyledAuthButton } from './AuthButton.styles'
import { FaRegUserCircle } from "react-icons/fa";
import { Text } from '../../utils/Text.styles';
import { useAppContext } from '../../context/App.context';

function AuthButton() {

  const {text} = useAppContext();

  return (
    <StyledAuthButton>
        <FaRegUserCircle />
        <Text className='auth'>{text.signIn}</Text>
    </StyledAuthButton>
  )
}

export default AuthButton