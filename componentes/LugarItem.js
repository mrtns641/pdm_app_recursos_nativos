import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Cores from '../constantes/Cores'
import React from 'react'

const LugarItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.lugarItem}>
            <Image
                style={styles.imagem}
                source={{ uri: props.imagem }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.nomeLugar}>{props.nomeLugar}</Text>
                <Text style={styles.endereco}>{props.endereco}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LugarItem

const styles = StyleSheet.create({
    lugarItem: {
        borderBottomColor: "#CCC",
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    nomeLugar: {
        color: 'black',
        fontSize: 18,
        marginBottom: 8
    },
    endereco: {
        color: '#888',
        fontSize: 8
    }

})