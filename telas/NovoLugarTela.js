import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import React, { useState } from 'react'
import Cores from '../constantes/Cores'
import * as lugaresActions from '../store/lugares-actions';
import { useDispatch } from 'react-redux';
import TiraFoto from '../componentes/TiraFoto';

//single source of truth - componente controlado
const NovoLugarTela = (props) => {
  const dispacth = useDispatch()
  const [imagemURI, setImagemURI] = useState()
  const [novoLugar, setNovoLugar] = useState('')
  const novoLugarAlterado = (textoDigitado) => {
    setNovoLugar(textoDigitado)
  }

  const fotoTirada = (imagemURI) => {
    setImagemURI(imagemURI)
  }

  const adicionarLugar = () => {
    const acao = lugaresActions.addLugar(novoLugar, imagemURI)
    dispacth(acao)
    props.navigation.goBack()
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.titulo}>Novo Lugar</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={novoLugarAlterado}
          value={novoLugar}
        />
        <TiraFoto onFotoTirada={fotoTirada()} />
        <Button
          title="Salvar Lugar"
          color={Cores.primary}
          onPress={() => adicionarLugar()}
        />
      </View>
    </ScrollView>
  )
}

export default NovoLugarTela

const styles = StyleSheet.create({
  form: {
    margin: 40,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 8
  },
  textInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 8
  }
})