import { useEffect, useState } from "react"
import { Alert } from "react-native";
import axios from "axios";

export const dataLogged = () => {
    const [login, setLogin] = useState(false)
    const [dataLogin, setDataLogin] = useState({})

    const getLogin = async ({phone, password}) => {
        console.log(phone, password)
            try {
                const response = await axios.post('https://appmobile.altcel2.com/login',{
                    phone,
                    password
                });
                setDataLogin(response.data)
                setLogin(true)
            } catch (error) {
                return Alert.alert(
                    'Error',
                    'Favor de ingresar sus datos correctamente.',
                    [{text: 'Ok'}]
                )
            }
    }

    const detRegister = async ({name, email, phone, password, passwordConfirm}) => {
        console.log(name)
        try {
            const response = await axios.post('https://appmobile.altcel2.com/registro',{
                name,
                email,
                phone,
                password,
                passwordConfirm
            });
            setDataLogin(response.data)
            setLogin(true)
        } catch (error) {
            return Alert.alert(
                'Error',
                'Favor de ingresar sus datos correctamente.',
                [{text: 'Ok'}]
            )
        }
    }
    useEffect(() => {
        
    }, [])

    return{
        getLogin,
        dataLogin,
        login,
        detRegister
    }
}
