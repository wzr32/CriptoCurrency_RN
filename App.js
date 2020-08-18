import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ScrollView, ActivityIndicator} from 'react-native';

import Header from './app/components/Header';
import Cotizacion from './app/components/Cotizacion';
import Formulario from './app/components/Formulario';
import Axios from 'axios';

export default function App() {

  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [consult, setConsult] = useState(false);
  const [response, setResponse] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect (() => {
    if (consult){
      const api = async () => {
        const res = await Axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`)
        
        setCargando(true);

        setTimeout(() => {
          setResponse(res.data.DISPLAY[cripto][moneda]);
          setCargando(false);
          setConsult(false);
        }, 3000)
      }
      api()
    }
  }, [consult])

  const spinner = cargando ? <ActivityIndicator style={styles.spinner} /> : <Cotizacion response={response}/>

  return (
    <>
     <ScrollView>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
        <Formulario 
          moneda={moneda}
          cripto={cripto}
          setMoneda={setMoneda}
          setCripto={setCripto}
          setConsult={setConsult}
        />
      </View>

      <View>
        {spinner}
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
  spinner: {
    marginTop: 30
  }
});
