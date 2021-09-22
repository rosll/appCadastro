import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native'
import { DataTable } from 'react-native-paper';
import { Container } from './styles'

interface InfoCardProps extends TouchableOpacityProps {
  cod: string;
  escolaridade: string
}

export function TableBody({ cod, escolaridade, ...rest }: InfoCardProps) {
  return (
    <TouchableOpacity 
      {...rest}
    >
      <Container>
      
        <DataTable.Row>
          <DataTable.Cell>{cod}</DataTable.Cell>
          <DataTable.Cell>{escolaridade}</DataTable.Cell>
        </DataTable.Row>
    
      </Container>
    </TouchableOpacity>
  )
}

