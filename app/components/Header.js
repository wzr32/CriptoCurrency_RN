import React from 'react'
import { StyleSheet, Text, Platform} from 'react-native'

const Header = () => (
    <Text style={styles.encabezado}>Criptomonedas</Text>
)

const styles = StyleSheet.create({
    encabezado:{
        paddingTop: Platform.OS === 'ios' ? 50 : 30,
        backgroundColor: '#5e49e2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff',
        marginBottom: 20, 
        fontSize: 20
    }
})

export default Header;