import React, {useState} from "react";
import {View, Text, StyleSheet, Image, Pressable, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import PanelNavigations from '../../views/pages/Profile';
import RecargaModal from "../components/recargaModal";

import { getDataDB } from '../../helpers/getDataDB/';


const diccionarioServicio = {
    MIFI: require('../../assets/img/MIFI-2.png'),
    HBB: require('../../assets/img/HBB-2.png'),
    MOV: require('../../assets/img/MOV-2.png'),
  }
  
const diccionarioLogo = {
    MIFI: require('../../assets/img/MIFI.png'),
    HBB: require('../../assets/img/Grupo22.png'),
    MOV: require('../../assets/img/Cel.png'),
  }

const Recargas = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const {useGetDeviceRecharge, getPrdocuts} = getDataDB();
    const [producto, setProduct] = useState('');
    const [number, setNumber] = useState('');

    // console.log(useGetDeviceRecharge[0].service, 'LALO PUTO')
    // const getDataNumber = data => {
    //     getPrdocuts()
    //     setProduct(data.producto);
    //     setNumber(data.number);
    //     setModalVisible(true);

    // }

    return ( 
        <>
          <RecargaModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            producto={producto}
            number={number}
          />
          <View style={styles.contenedor}>
            <View style={styles.headerDevice}>
                <Text style={styles.tituloNumero}>Mis números</Text>
            </View>

            {
              useGetDeviceRecharge.length === 0 ? <Text></Text> :
                <FlatList
                  data={useGetDeviceRecharge}
                  keyExtractor={(item) => item.compay}
                  renderItem={({item}) => {return(
                  <ScrollView>
                    <View>
                      <View style={styles.card}>
                        <View style={styles.content}>
                          <View style={styles.infoPlan}>
                            <View style={styles.mtText}>
                              <Text style={[styles.text, styles.infoCenter]}>{item.number}</Text>
                              { item.service == 'MOV' &&
                                (
                                  <View>
                                    <View>
                                      <Image style={styles.servicioMov} source={diccionarioServicio[item.service]}/>
                                    </View>
                                    <View>
                                      <Image style={styles.logoMov} source={diccionarioLogo[item.service]}/>
                                    </View>
                                  </View>
                                )
                              }
                    
                              { item.service == 'MIFI' &&
                                (
                                  <View>
                                    <View>
                                      <Image style={styles.servicioMifi} source={diccionarioServicio[item.service]}/>
                                    </View>
                                    <View>
                                      <Image style={styles.logoMifi} source={diccionarioLogo[item.service]}/>
                                    </View>
                                  </View>
                                )
                              }
                    
                              { item.service == 'HBB' &&
                                (
                                  <View>
                                    <View>
                                      <Image style={styles.servicioHbb} source={diccionarioServicio[item.service]}/>
                                    </View>
                                    <View>
                                      <Image style={styles.logoHbb} source={diccionarioLogo[item.service]}/>
                                    </View>
                                  </View>
                                )
                              }
                            </View>
                          </View>
                        </View>
                        <Pressable
                          style={styles.btnRecargar}
                            onPress={() => getPrdocuts(item)
                              // getDataNumber({producto: item.service, number: item.number})
                            }
                        >
                          <Text style={styles.textoRecargar} component={PanelNavigations}>
                            <Icon name="shopping-cart" size={30} /> Recargar
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </ScrollView>
                    )}}
                />
            }
          </View>
        </>
     );
}
 
const styles = StyleSheet.create({
    contenedor:{
      flex: 1,
      backgroundColor: '#f2f2f2'
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
    card:{
        alignItems:'center',
        justifyContent:'center',
        width: '60%',
        marginVertical: 40,
        marginHorizontal: 80,
        marginBottom: 1,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#4923F5',
        backgroundColor: '#FFF'
    },
    infoPlan:{
        alignItems: 'center'
    },
    mtText:{
        marginTop:10,
        alignItems:'center'
    },
    infoCenter:{
        color: '#000',
        fontWeight: 'bold',
        alignItems:'center',
        fontSize: 25
    },
    servicioMifi:{
      width: 90,
      height: 35,
      marginVertical: 15,
      marginHorizontal: 1
    },
    mifiDevice:{
        height: 140,
        width: 150,
        marginVertical: 30,
        marginHorizontal: 50,
    },
    servicioHbb:{
      width: 90,
      height: 35,
      marginVertical: 15,
      marginHorizontal: 15
    },
    servicioMov:{
      width: 90,
      height: 35,
      marginVertical: 15,
      marginHorizontal: 22
    },
    logoMov:{
      width: 100,
      height: 80,
    },
    logo:{
      width: 100,
      height: 80,
    },
    logoMifi:{
      width: 80,
      height: 100,
    },
    logoHbb:{
      width:100,
      height: 80,
      marginBottom: 10
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    btnRecargar:{
        backgroundColor: '#001b54',
        paddingVertical: 5,
        paddingHorizontal: 70,
        borderRadius: 5,
        marginVertical: 10
  
    },
    textoRecargar:{
      color: '#FFF',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginHorizontal: -5
    },
  
  })

export default Recargas;