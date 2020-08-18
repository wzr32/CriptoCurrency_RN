import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cotizacion = ({response}) => {
    
    if (Object.keys(response).length === 0) return null;    
    
    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.texto]}> Precio: 
                <Text style={styles.span}>{response.PRICE}</Text>
            </Text>
            <Text style={styles.texto}> Precio mas Alto: {' '}
                <Text style={styles.span}>{response.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}> Precio mas bajo: {' '}
                <Text style={styles.span}>{response.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}> Variacion ultimas 24h : {' '}
                <Text style={styles.span}>{response.CHANGEPCT24HOUR}</Text>
            </Text>
            <Text style={styles.texto}> Ultima Actualizacion: {' '}
                <Text style={styles.span}>{response.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado :{
        backgroundColor: '#5e49e2',
        padding: 20,
        marginTop: 20
    },
    texto: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10
    },
    precio: {
        fontSize: 25
    },
    span: {
        fontSize: 16
    }
})


export default Cotizacion