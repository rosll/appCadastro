import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Title, Input } from './styles'
import { Button } from '../components/Button/Button';
import { TableBody } from '../components/TableBody/TableBody';
import { TableHeader } from '../components/TableHeader/TableHeader';



interface IInfoData {
  id: string;
  cod: string;
  escolaridade: string;
}

export function Home({}) {
  const [cod, setCod] = useState('')
  const [escolaridade, setEscolaridade] = useState('')
  const [escolaridadeInfo, setEscolaridadeInfo] = useState<IInfoData[]>([])

  function handleAddNewInfo() {
    const data = {
      id: String(new Date().getTime()),
      cod: cod,
      escolaridade: escolaridade,
    }

    if (cod === '' || escolaridade === '') {
      alert('Você esqueceu de preencher um campo!')
      return
    }
    
    setEscolaridadeInfo([...escolaridadeInfo, data])
    setCod('')
    setEscolaridade('')
  }

  function handleRemoveInfo(id: string) {
    setEscolaridadeInfo(escolaridadeInfo => escolaridadeInfo.filter(info => info.id !== id))
  }


  useEffect(() => {
    async function loadData() {
      const storagedInfos = await AsyncStorage.getItem('@escolaridadeInfo:infos')
      if (storagedInfos) {
        setEscolaridadeInfo(JSON.parse(storagedInfos))
      } 
    }
    loadData()

    // async function removeAll() {
    //   await AsyncStorage.removeItem('@myinfos:infos')
    // }
    // removeAll()
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@escolaridadeInfo:infos', JSON.stringify(escolaridadeInfo))
    }
    saveData()
  }, [escolaridadeInfo])

  return (
    <>
      <LinearGradient
        colors={['#fbc2eb', '#a6c1ee']}
        style={{
          flex: 1
        }}
      >
        <Container>
            <Title>Cadastro Escolaridades</Title>

            <Input  
              placeholder='Código'
              placeholderTextColor='#9D9D9D'
              value={cod}
              onChangeText={n => setCod(n)}
            />

            <Input  
              placeholder='Escolaridade'
              placeholderTextColor='#9D9D9D'
              value={escolaridade}
              onChangeText={e => setEscolaridade(e)}
            />


            <Button 
              title="Cadastrar"
              onPress={handleAddNewInfo}
            />

            <TableHeader />
            <FlatList
              showsVerticalScrollIndicator={false}
              data={escolaridadeInfo}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TableBody 
                  cod={item.cod}
                  escolaridade={item.escolaridade}
                  onPress={() => handleRemoveInfo(item.id)}
                />
              )}
            />

        </Container>
      </LinearGradient>
    </>
  );
}
