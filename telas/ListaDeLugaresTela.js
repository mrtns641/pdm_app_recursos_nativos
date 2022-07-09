import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import React from 'react'
import LugarItem from '../componentes/LugarItem'

const ListaDeLugaresTela = (props) => {
  const lugares = useSelector(estado => estado.lugares.lugares)
  return (
    <FlatList
      data={lugares}
      keyExtractor={lugar => lugar.id}
      renderItem={lugar => (
        <LugarItem
          nomeLugar={lugar.item.titulo}
          onSelect={
            () => props.navigation.navigate('DetalhesDoLugar', { titulo: lugar.item.titulo, idLugar: lugar.id })
          }
          imagem={lugar.item.imagemURI}
          endereco={null}
        />
      )}
    />
  )
}

export default ListaDeLugaresTela

const styles = StyleSheet.create({})