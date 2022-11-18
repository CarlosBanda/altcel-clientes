
import React, { useState } from 'react'
import {Text,StyleSheet,View, TextInput, Pressable, TouchableOpacity, Alert} from 'react-native'
import { dataLogged } from '../../helpers/dataLogged';
import { getDataDB } from '../../helpers/getDataDB';
import { useNavigation } from '@react-navigation/native';

const InputsLogin = () => {
    const navigation = useNavigation(); 
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const {getLogin, dataLogin, login} = dataLogged();
    // const {getDevices} = getDataDB();

    // if (login) {
    //     getDevices(dataLogin.user_id)
    // }

    const handRegistro = () => {
        if(password.length < 8){
            Alert.alert(
                "Error",
                "La contraseña debe tener 8 caracteres"
              )
            return
        }
        getLogin({phone, password})
    }
    return ( 
        <View>
            <Text style={styles.textSesion}>Iniciar Sesión</Text>
            <Text style={styles.subText}>Estamos contentos de verte.</Text>
            <View style={styles.campo}>
                <TextInput style={styles.input} placeholderTextColor="#000" keyboardType='number-pad'
                            maxLength={10} placeholder='Usuario' value={phone} onChangeText={setPhone} />
            </View>

            <View style={styles.campo}>
                <TextInput style={styles.input} secureTextEntry placeholderTextColor="#000" placeholder='Contraseña' value={password} onChangeText={setPassword}/>
            </View>
            {/* <Pressable style={styles.submitBtn} onPress={() => navigation.replace('Panel')}> */}
            <Pressable style={styles.submitBtn} onPress={ handRegistro}>
                <Text style={styles.submitBtnTexto}>Ingresar</Text>
            </Pressable>
            <View style={{flexDirection:'row', marginHorizontal: 20}}>
                <Text style={styles.registrarse}>¿Aun no tienes cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={[styles.registrarse , styles.colorResgistrar]}> Registrate</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    input:{
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 20,
        color: '#000',
        marginTop: 10,
        fontSize: 20
    },
    submitBtn:{
        backgroundColor: 'red',
        padding: 11,
        marginVertical: 20,
        marginHorizontal: 11,
        marginLeft: -2,
        borderRadius: 20
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20
    },
    campo:{
        marginVertical:10,
        marginHorizontal: 10,
        marginLeft: -1
    },
    registrarse:{
        color: '#000',
        textAlign: 'center',
        fontSize: 17
    },
    textSesion:{
        color:'red',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
      },
      subText:{
        color:'#000',
        textAlign:'center',
        fontSize: 20
      },
      colorResgistrar:{
        color: 'red'
      },
})

export default InputsLogin;