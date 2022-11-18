import React, {useState, useEffect} from 'react';
import {SafeAreaView, Modal, Text, StyleSheet, View, Image, Pressable} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import PanelNavigations from '../../views/pages/Profile';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from "axios";

import RecargaStripe from './recargaStripe';


const RecargaModal = ({modalVisible, setModalVisible, producto, number}) => {

  const [modalStripe, setModalStripe] = useState(false);

  const [ categoriaRecarga, setCategoriaRecarga ] = useState('') ;

  const [useGetRecarga, setUseGetRecarga] = useState([]);

  
  const getRecarga = async () => {
    try {
          const response = await axios.get('https://appmobile.altcel2.com/planes?product='+producto);
          // const response = await axios.get(`https://appmobile.altcel2.com/planes?product=${producto}`);
            setUseGetRecarga(response.data.rates);
            console.log("response.data.rates",response.data.rates);
        } catch (error) {
              console.log(error);
          }
  }
 
  useEffect(() => {  
    getRecarga();
  },[useGetRecarga]);

  // const itemsInPicker = useGetRecarga.map( data=> {
  //   const dataRace = data.name + " - " + "$"+data.price
  //   return <Picker.Item label={dataRace} key={data.id} value={data.id}/>
  // });

  const realizarPago = pago =>{
    setModalStripe(true);  
    // console.log(pago)
  }

  const { offerID } = useGetRecarga;
  console.log("offerID",offerID)

  return (
     <Modal
        animationType='slide'
        visible={modalVisible}
     >
        <RecargaStripe
          setModalStripe = {setModalStripe}
          modalStripe = {modalStripe}
          categoriaRecarga = {categoriaRecarga}
        />
        <SafeAreaView>
          <View style={styles.headerDevice}>
            <Text style={styles.tituloNumero}>Mis números {number}</Text>
          </View>

          <View>
            <Pressable 
                onPress={() => {
                  setModalVisible(false)
                }}
                style={[styles.btn, styles.btnCancelar]}
            >
              <Text style={styles.btnTexto}>Cancelar</Text>
            </Pressable>
          </View>
          
          <View style={styles.card}>
            <View>
              <Text style={[styles.text, styles.infoHbb]}>{producto}</Text>
              <Text style={[styles.text, styles.infoCenter]}>{number}</Text>
            </View>
            <View>
              <Image style={styles.servicioMov} source={require('../../assets/img/MIFI.png')}/>
            </View>
            <View style={styles.planes}>
              <Text style={styles.textoPlanes}>Planes disponibles</Text>
            </View>

            <View style={styles.inputPicker}>
              <Picker
                selectedValue={categoriaRecarga}
                onValueChange={(valor) => {
                  setCategoriaRecarga(valor)
                }}
              >
                {/* {itemsInPicker}  */}
                <Picker.Item label="-- Seleccione --" value="" />
                {
                    useGetRecarga.map( data => (
                      <Picker.Item label={data.name + " - " + "$"+data.price} key={data.id} value={data.id}/>
                    ))
                }
              </Picker>
            </View> 
            <Pressable 
                style={styles.btnRecargar}
                onPress={() =>
                  realizarPago(categoriaRecarga)
                }
                >
                <Text style={styles.textoRecargar} component={PanelNavigations}>
                  <Icon name="credit-card-alt" size={20} /> Pagar
                </Text> 
            </Pressable>
          </View>
        </SafeAreaView>
      </Modal>
  )
}

const styles = StyleSheet.create({
     contenedor:{
       flex: 1,
       backgroundColor: '#f2f2f2'
     },
     card:{
         alignItems:'center',
         justifyContent:'center',
         width: '80%',
         marginVertical: 40,
         marginHorizontal: 40,
         marginBottom: 1,
         borderWidth: 2,
         borderStyle: 'solid',
         borderRadius: 15,
         borderColor: '#4923F5',
         backgroundColor: '#FFF',
     },
     headerDevice:{
         borderColor: '#fff',
         alignItems: 'center'
     },
     tituloNumero:{
       marginTop: 10,
       fontWeight: 'bold',
       fontSize: 25,
       color:'black'
     },
     btnRecargar:{
       backgroundColor: '#001b54',
       paddingVertical: 7,
       paddingHorizontal: 20,
       borderRadius: 5,
       marginVertical: 20
   
     },
     textoRecargar:{
       color: '#FFF',
       textAlign: 'center',
       textTransform: 'uppercase',
       fontWeight: 'bold'
     },
     mtText:{
         marginTop:10,
         alignItems:'center',
     },
     infoHbb:{
         color: '#000',
         fontWeight: 'bold',
         fontSize: 25,
         textAlign: 'center',
         marginVertical: 10
     },
     infoCenter:{
         color: '#705ae5',
         fontWeight: 'bold',
         textAlign:'center',
         fontSize: 25,
         marginVertical: 1
     },
     servicioMov:{
       width: 80,
       height: 100,
       marginVertical: 20,
       // marginHorizontal: 28
     },
     info:{
       flexDirection: 'row',
       justifyContent: 'space-between'
     },
     textoPlanes:{
       color: '#919292',
       fontSize: 20,
       marginHorizontal: -140,
       marginVertical: 20,
       textAlign: 'center'
     },
     inputPicker:{
       backgroundColor: '#919292',
       width: '90%',
       borderRadius: 5,
      
     },
     colorLabel:{
       color: '#000'
     }, 
     btn:{
       padding: 10,
       marginTop: 30,
       marginHorizontal: 10,
       borderRadius: 10
     },
     btnCancelar:{
         backgroundColor: '#DB2777',
     },
     btnTexto:{
       textAlign: 'center',
       textTransform: 'uppercase',
       fontWeight: 'bold',
       color: '#FFF',
       fontSize: 20
   },
})

export default RecargaModal
