import React from 'react'
import { StyledAuthButton } from './AuthButton.styles'
import { FaRegUserCircle } from "react-icons/fa";
import { Text } from '../../utils/Text.styles';

function AuthButton() {
  return (
    <StyledAuthButton>
        <FaRegUserCircle />
        <Text className='auth'>Sign In</Text>
    </StyledAuthButton>
  )
}

export default AuthButton