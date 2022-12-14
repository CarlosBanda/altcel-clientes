import React, { useState } from 'react';
import {View, StyleSheet, Text, Pressable, Modal, Button, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { getDataDB } from '../../helpers/getDataDB';
import { globalStyle } from '../../styles';
import Card from '../components/card';
const Panel = () => {
    const [dn, setdn] = useState('')
    const [isVisible, setIsVisible] = useState(false);
    const {useGetDevice, addDevice, isLoading} = getDataDB();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={ 100 } />
            </View>
        )
    }
    return ( 
        <View style={styles.container}>
            <View style={styles.addDevice}>
                <Pressable style={styles.btnAddDevice} onPress={() => setIsVisible(true)}>
                    <Text style={{color:'black', alignItems:'center', fontSize: 15}}>Agregar Dispositivo <Icon name='plus' size={15} color={'#005bc5'}/></Text>
                </Pressable>

                <Modal animationType='slide' transparent={true} visible={isVisible}>
                    <View style={styles.modalAdd}>
                        <View style={styles.bodyModal}>
                            <View style={styles.formModal}>
                                <Text style= {[styles.text, styles.textTitle]}>Nuevo Dispositivo</Text>
                                <Text style= {[styles.text, styles.textNum]}>Número de SIM</Text>
                                <TextInput style={styles.input} placeholderTextColor="#000" keyboardType='number-pad'
                        maxLength={10} placeholder='Número' value={dn}  onChangeText={setdn}/>
                            </View>
                            <View style={styles.btns}>
                                <Button color="red"  title='Cancelar' onPress={() => setIsVisible(false)}></Button>
                                <Button title='Agregar' onPress={() => addDevice(dn)}></Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.body}>
                {/* <Card></Card> */}
            {
                    useGetDevice.length === 0 ? <Text>Aún no cuenta con dispositivos</Text> :
                    <View style={{flex: 1}}>
                        <Carousel
                        itemWidth={300}
                        sliderWidth={400}
                        data={useGetDevice}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => {return(
                            <Card device={item} item={item}></Card>
                        )}}
                        
                        />
                    </View>

                }  
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        borderColor: '#d5d9dc',
        borderWidth: 2,
        color: '#000',
        marginTop: 10,
        marginBottom: 30,
        fontSize: 15,
        marginHorizontal: 10
    },
    textTitle:{
        marginTop: 20,
        fontSize: 15,
        marginHorizontal: 80,
        fontWeight: 'bold'
    },
    textNum:{
        marginLeft: 20,
        marginTop: 20
    },
    text:{
        color: 'black'
    },
    container:{
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    body:{
        flex: 10,
        width:'100%',
        marginVertical: 100,
        height: 500,
        alignContent: 'center',
    },
    addDevice:{
        flex:1,
        marginHorizontal:35,
        alignItems:'flex-start',
        marginBottom: -50,
        marginTop: 10,
    },
    btnAddDevice:{
        paddingHorizontal: 10,
        // paddingVertical: 5 ,
        color:'black',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        borderColor: '#fb0c06',
        marginTop: 10
    },
    modalAdd:{
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyModal:{
        borderRadius: 10,
        width: 300,
        height: 250,
        backgroundColor: 'white',
        // alignItems: 'center',
    },
    btns:{
        ...globalStyle.btnsModal
    }
})
export default Panel;