
import React, {useState, useEffect} from 'react'
import {Text,StyleSheet,View, Image, Button, Pressable, Modal} from 'react-native'
import { globalStyle } from '../../styles'
// import  ModalConsumo  from './modalConsumo';

function Card({device}) {
    console.log(device)
    // const {number, company, service, user_email, created_at, id} = device;
    const [modalConsumo, setModalConsumo] = useState(false)
    // const {consultUF} = getDataAltan();

    const onClick =() => {
        setModalConsumo(true)
        accessToken
    }
    return ( 
        <View style={styles.card}>
            <View style={[styles.headerDevice,{flex:1}]}>
                <Image style={styles.mifiLetra} source={require('../../assets/img/MIFI-2.png')}/>
                <Text style={styles.dateActivation}>Activado desde:</Text> 
                <Text style={[styles.infoCenter, styles.text]}>11/11/2022</Text> 
            </View>
            <View style={[styles.content,{flex:4}]}>
                <View style={[styles.infoPlan,{flex:2}]}>
                    <View style={[styles.textFirst]}>
                        <Text style={[styles.text, styles.infoCenter]}>Paquete:</Text>
                        <Text style={styles.text}>MIFI 20 GB TN USO INTERNO</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Número</Text>
                        <Text style={[styles.text]}>3339064244</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Estado de servicio: </Text>
                        <Text style={[styles.text, styles.sombra]}>Activo</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Correo electrónico:</Text>
                        <Text style={styles.text}>c.banada07@gmail.com</Text>
                    </View>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Image style={styles.mifiDevice} source={require('../../assets/img/MIFI.png')}/>
                </View>
            </View>
            <Pressable style={styles.btnConsumos} onPress={()=> onClick(onClick)}><Text style={styles.text}>Consumos de datos</Text></Pressable>
            
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
        width: 100,
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
        paddingHorizontal:20,
        paddingVertical:5
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
    }
})
export default Card