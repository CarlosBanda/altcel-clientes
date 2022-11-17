
import React, {useState, useEffect} from 'react'
import {Text,StyleSheet,View, Image, Button, Pressable, Modal} from 'react-native'
import { globalStyle } from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import  ModalConsumo  from './ModalConsumo';
import ProgressBar from 'react-native-progress/Bar'

function Card({device}) {
    console.log(device)
    const {status, IMEI, DN, email, offerId, service} = device;
    const [modalConsumo, setModalConsumo] = useState(false)

    const diccionarioServicio = {
        MIFI: require('../../assets/img/MIFI-letra.png'),
        HBB: require('../../assets/img/hbb-letra.png'),
        MOV: require('../../assets/img/mov-letra.png'),
    }

    return ( 
        <View style={styles.card}>
            <View style={[styles.headerDevice,{flex:1}]}>
                { service == 'MOV' && <Image style={styles.mifiLetra} source={diccionarioServicio[service]}/> }

                { service == 'HBB' && <Image style={styles.mifiLetra} source={diccionarioServicio[service]}/> }
                { service == 'MIFI' && <Image style={styles.mifiLetra} source={diccionarioServicio[service]}/> }
                <Text style={styles.dateActivation}>Activado desde:</Text> 
                <Text style={[styles.infoCenter, styles.text]}>11/11/2022</Text> 
            </View>
            <View style={[styles.content,{flex:4}]}>
                <View style={[styles.infoPlan,{flex:2}]}>
                    <View style={[styles.textFirst]}>
                        <Text style={[styles.text, styles.infoCenter]}>Paquete:</Text>
                        <Text style={styles.text}>{offerId}</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Número</Text>
                        <Text style={[styles.text]}>{DN}</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Estado de servicio: </Text>
                        <Text style={[styles.text, styles.sombra]}>{status}</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Correo electrónico:</Text>
                        <Text style={styles.text}>{email}</Text>
                    </View>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Image style={styles.mifiDevice} source={require('../../assets/img/MIFI.png')}/>
                </View>
            </View>
            <Pressable style={styles.btnConsumos} onPress={()=> setModalConsumo(true)}><Text style={styles.text}>Consumos de datos <Icon name='tachometer' size={18} color={'#005bc5'}/></Text></Pressable>
            <Modal transparent={true}  visible={modalConsumo}>
                <View style={styles.modalConsumos}>
                    <View style={styles.contentConsumos}>
                        <View style={styles.devicePlan}>
                            <View style={{marginBottom:10}}>
                                <Text style={[styles.text, styles.textplanDevice]}>Dispositivo</Text>
                                <Text style={styles.text}>MIFI HOSPOT INTERNET CASA HOGAR</Text>
                            </View>
                            <View>
                                <Text style={[styles.text, styles.textplanDevice]}>Plan</Text>
                                <Text style={styles.text}>MOVILIDAD TN 30 DÍAS</Text>
                            </View>
                        </View>
                        <View style={styles.bodyConsumos}>
                            <View style={styles.infodateStatus}>
                                <View>
                                    <Text style={styles.textBody}>Fecha de Activación</Text>
                                    <Text style={styles.text}>10/07/2022</Text>
                                </View>
                                <View>
                                    <Text style={styles.textBody}>Estado</Text>
                                    <Text style={styles.text}>{status}</Text>
                                </View>
                                <View>
                                    <Text style={styles.textBody}>Velocidad</Text>
                                    <Text style={styles.text}>10 mbs</Text>
                                </View>
            
                            </View>
                            <View style={[styles.dataConsumo]}>
                                {
                                    service == 'MOV' ?
                                        <View>
                                            <Text style={styles.textBody}>Consumo de datos: </Text>
                                            <View style={{marginBottom:10}}>
                                                <Text style={styles.text}>Dtos:</Text>
                                                <ProgressBar  progress={0.5} width={320} height={10}/>
                                            </View>
                                            <View style={{marginBottom:10}}>
                                                <Text style={styles.text}>Llamadas:</Text>
                                                <ProgressBar  progress={0.5} width={320} height={10}/>
                                            </View>
                                            <View>
                                                <Text style={styles.text}>Mensajes:</Text>
                                                <ProgressBar  progress={0.5} width={320} height={10}/>
                                            </View>
                                        </View>
                                    :
                                    <View>
                                        <Text style={styles.textBody}>Consumo de datos: </Text>
                                        <ProgressBar  progress={0.5} width={320} height={10}/>
                                        {/* <CircularProgress value={58} /> */}
                                    </View>
                                }
                                <View style={styles.infodateStatus}>
                                    <View>
                                        <Text style={styles.textBody}>Contratado</Text>
                                        <Text style={styles.text}>100 Gb</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.textBody}>Consumo</Text>
                                        <Text style={styles.text}>3.99 Gb</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.textBody}>Restante </Text>
                                        <Text style={styles.text}>10 mbs</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.btns}>
                        <Icon.Button style={{backgroundColor:'red', height:40}} name='close' onPress={()=>setModalConsumo(false)}>Regresar</Icon.Button>
                        <Icon.Button style={{backgroundColor: '#005bc5'}} name='cart-plus' onPress={()=>null}>Recargar</Icon.Button>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        height:'100%',
        width:'100%',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#005bc5',
        backgroundColor: '#ffff'
    },
    headerDevice:{
        width: '100%',
        borderColor: '#fff',
        alignItems: 'center',
        marginTop:-8
    },
    content:{
        width: '100%',
        borderColor: '#fff',
        height: 800
    },
    text:{
        ...globalStyle.text
    },
    mifiLetra:{
        height: 50,
        width: 140,
        marginVertical: 20
    },
    dateActivation:{
        marginTop: -10,
        fontSize: 15,
        color:'black'
    },
    btnConsumos:{
        color:'black',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        borderColor: '#fb0c06',
        padding: 3,
        marginHorizontal: 50,  
        marginVertical: 10,
        paddingHorizontal:10,
        paddingVertical:5,
        alignItems: 'center'
    },
    infoPlan:{
        alignItems: 'center'
    },
    mifiDevice:{
        height: 125,
        width: 98,
        marginTop: 0
    },
    mtText:{
        marginTop:10,
        alignItems:'center'
    },
    infoCenter:{
        fontWeight: 'bold',
        alignItems:'center',
        color:'#000'
    },
    textFirst:{
        marginTop: 40,
        alignItems:'center'
    },
    sombra:{
        backgroundColor:'#abdb25',
        color: 'white',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: -5
    },
    btns:{
        ...globalStyle.btnsModal
    },
    text:{
        ...globalStyle.text
    },
    contentConsumos:{
        borderRadius: 10,
        backgroundColor: '#F4F6F7',
        marginHorizontal: 20,
        width: '90%',
        height:'70%',
        marginTop: 80,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    modalConsumos:{
        alignContent:'center',
        flex: 1,
        backgroundColor:'white'
    },
    devicePlan:{
        marginHorizontal: 20,
        marginTop:20,
        flex: 2,
        // backgroundColor: 'blue',
    },
    bodyConsumos:{
        marginHorizontal: 20,
        flex:7,
        // backgroundColor:'pink'
    },
    textplanDevice:{
        fontSize: 20,
        color: '#005bc5',
        fontWeight: 'bold'
    },
    infodateStatus:{
        flex: 1,
        flexDirection:'row',
        // backgroundColor: 'red',
        justifyContent:'space-between', 
        marginTop:10
    },
    dataConsumo: {
        flex: 5
    },
    textBody:{
        color:'#005bc5',
        fontWeight: 'bold',
        fontSize: 16
    }
})
export default Card