import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Axios from 'axios';


const Formulario = ({moneda, cripto, setMoneda, setCripto, setConsult}) => {

    const [criptomonedas, setCriptomonedas] = useState([])

    useEffect(() => {
        const API = async () => {
            let url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

            const res = await Axios.get(url)
            setCriptomonedas(res.data.Data)
        };
        API();
    }, [])

    const handleAlert = () => {
        Alert.alert(
            'Campos Vacios',
            'Todos los campos son obligatorios',
            [{text: 'OK',}]
        )
    }

    const handleSubmit = () => {
        if (moneda.trim() === '' || cripto.trim() === ''){
            handleAlert()
            return;
        }
        setConsult(true);
    }

    return (
        <View>
            <Text style={styles.laber}>Moneda</Text>
            <Picker 
                selectedValue={moneda}
                onValueChange={(val) => setMoneda(val)}
            >
                <Picker.Item label="Seleccione" value="" />
                <Picker.Item label="US Dolar" value="USD" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>

            <Text style={styles.laber}>Criptomoneda</Text>
            <Picker
                selectedValue={cripto}
                onValueChange={ val => setCripto(val)}
            >
                <Picker.Item label="Seleccione" value="" />
                {criptomonedas.map(cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                ))}
            </Picker>

            <TouchableHighlight style={styles.btn} onPress={() => handleSubmit()}>
                <Text style={styles.textoBtn}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    )
}


const styles = StyleSheet.create({
    laber: {
        fontSize: 22,
        marginVertical: 20,
        textTransform: 'uppercase' 
    },
    btn: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: "#5e48e2",
        marginTop: 20
    },
    textoBtn: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Formulario