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

//single source of truth - componente controlado
const NovoLugarTela = () => {
  const [novoLugar, setNovoLugar] = useState('')
  const novoLugarAlterado = (textoDigitado) => {
    setNovoLugar(textoDigitado)
  }

  const adicionarLugar = () => {
    console.log(`adicionando: ${novoLugar}`)
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
        <Button
          title="Salvar Lugar"
          color={Cores.primary}
          onPress={adicionarLugar}
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