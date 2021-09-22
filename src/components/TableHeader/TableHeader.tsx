import React from 'react';
import { DataTable } from 'react-native-paper';

export function TableHeader() {
  return (
    <DataTable>
          <DataTable.Header>
            <DataTable.Title>Código</DataTable.Title>
            <DataTable.Title>Escolaridade</DataTable.Title>
          </DataTable.Header>
    </DataTable>

  )
}