import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

import Cores from '../constantes/Cores'

const TiraFoto = (props) => {
    const [imagemURI, setImagemURI] = useState()
    const tiraFoto = async () => {
        const foto = await ImagePicker.launchCameraAsync({
            allowEditing: true,
            aspect: [16, 9],
            quality: 1
        })
        setImagemURI(foto.uri)
        props.onFotoTirada(foto.uri)
    }

    return (
        <View style={styles.principal}>
            <View style={styles.previewDaImagem}>
                {
                    imagemURI ?
                        <Image
                            style={styles.imagem}
                            source={{ uri: imagemURI }}
                        />
                        :
                        <Text>Nenhuma foto</Text>
                }
            </View>
            <Button
                title='Tirar Foto'
                color={Cores.primary}
                onPress={tiraFoto}
            />
        </View>
    )
}

export default TiraFoto

const styles = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 16
    },
    previewDaImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    },
})