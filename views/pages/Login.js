import React from "react";
import {View, Image, StyleSheet, ScrollView} from 'react-native'
import InputsLogin from "../components/InputsLogin";
const Login = () => {
    
    return ( 
        <View style={styles.container}>
            <ScrollView>
                    <View style={[styles.header,{flex:1}]}>
                        <View style={styles.cont2}>
                            <Image style={styles.altcel} source={require('../../assets/img/logo.png')}/>
                                <Image style={styles.network} source={require('../../assets/img/Social-network.gif')}/>
                            
                        </View>
                        <View style={styles.logo}>
                            <Image style={styles.burbuja} source={require('../../assets/img/Onda.png')}/>
                        </View>
                       
                    </View>
                    <View style={[styles.formulario,{flex:1}]}>
                        <InputsLogin></InputsLogin>
                    </View>
            </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    header:{
        height:300,
        width: '100%',
        flexDirection:'row',
    },
    formulario:{
        height: 400,
        width: '100%',
        // backgroundColor: '#1E40AF',
        marginHorizontal:10,
        padding: 20,
        // paddingVertical: 40,
        paddingHorizontal: 20,
    },
    cont2:{
        height: 50,
        width: '50%',
        // justifyContent:'center',
        // alignItems:'center',
    },
    burbuja:{
        height:300,
        width:300,
        transform: [{ rotate: '30deg' }],
        marginTop: -135
    },
    logo:{
        // backgroundColor:'red',
        height: 50,
        padding: 20,
        marginBottom:60,
        flexDirection:'row',
      },
      altcel:{
        height: 130,
        width:'100%',
        marginTop: 70,
        marginLeft: 105
      },
      network:{
        height: 130,
        width:350,
        marginTop: -20,
        marginLeft: 30
      },
      input:{
        backgroundColor: '#d0d3d4',
        padding: 10,
        borderRadius: 20,
        color: '#000',
        marginTop: 10,
    },
    submitBtn:{
        backgroundColor: 'red',
        padding: 10,
        marginTop: 20,
        borderRadius: 20
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    campo:{
        marginVertical:10
    },
    registrarse:{
        color: '#000',
        marginTop: 30,
        textAlign: 'center'
    },
    textSesion:{
        color:'red',
        fontSize: 40,
        textAlign: 'center'
      },
      subText:{
        color:'#000',
        textAlign:'center',
        fontSize: 20
      },
})
 
export default Login;