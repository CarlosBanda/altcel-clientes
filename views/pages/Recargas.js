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
    const {useGetDevice} = getDataDB();


    return ( 
        <>
        <RecargaModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
        />
            <View style={styles.contenedor}>
                <View style={styles.headerDevice}>
                    <Text style={styles.tituloNumero}>Mis números</Text>
                </View>

                {
                    useGetDevice.length === 0 ? <Text></Text> :

                    <FlatList
                        data={useGetDevice}
                        keyExtractor={(item) => item.compay}
                        renderItem={({item}) => {return(
                        <ScrollView>
                            <>
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
                                                )}
                    
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
                                                )}
                    
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
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                    <Pressable
                                        style={styles.btnRecargar}
                                        onPress={() => {
                                        getDataNumber({product: item.service, number: item.number})
                                        // getDataProductDB({product: item.service})
                                        }
                                        }>
                                        <Text style={styles.textoRecargar} component={PanelNavigations}>
                                        <Icon name="shopping-cart" size={30} />Recargar
                                        </Text>
                                    </Pressable>
                                </View>
                            </>
                        </ScrollView>
                    )}}
                  />
                    // <View style={styles.card}>
                    //     <View style={styles.infoPlan}>
                    //         <View style={styles.mtText}>
                    //             <Text style={[styles.text, styles.infoCenter]}>961840957</Text>
                    //             <View>
                    //                 <View>
                    //                     <Image style={styles.servicioMov} source={require('../../assets/img/MIFI-2.png')}/>
                    //                 </View>
                    //                 <View style={styles.logoMov}>
                    //                     <Image style={styles.logoMovImg} source={require('../../assets/img/MIFI.png')}/>
                    //                 </View>
                    //             </View>
                    //         </View>
                    //     </View>
                    //     <Pressable
                    //         style={styles.btnRecargar}
                    //         onPress={() => setModalVisible(true)}
                    //     >
                    //         <Text style={styles.textoRecargar} component={PanelNavigations}>
                    //             <Icon name="shopping-cart" size={30} /> Recargar
                    //         </Text>
                    //     </Pressable>
                    // </View>
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
    servicioMov:{
        width: 90,
        height: 35,
        marginVertical: 15,
        marginHorizontal: 22
    },
    logoMov:{
        marginHorizontal: 30,
        marginVertical: 10
    },
    logoMovImg:{
        width: 80,
        height: 100,
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
    }
});

export default Recargas;