import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { ButtonOpacity, ButtonText } from './styles'


interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonOpacity 
      activeOpacity={0.8}
      {...rest}
    > 
      <ButtonText>
        {title}
      </ButtonText>
    </ButtonOpacity>
  )
}
