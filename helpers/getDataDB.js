import { useEffect, useState } from "react"
import { Alert } from "react-native";
import axios from "axios";
// import axios from 'react-native-axios'

// import Panel from "../components/panel";

export const getDataDB = () => {
    const [useGetDevice, setUseGetDevice] = useState({})
    const [useGetDeviceRecharge, setUseGetDeviceRecharge] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const getDevices = async () => {
        setIsLoading(true)
            try {
                const userid = 41;
                const response = await axios.get('https://appmobile.altcel2.com/devices?userid='+userid);
                setUseGetDevice(response.data.devices)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
    }

    const addDevice = async (dn) => {
        const user_id = 41;
        setIsLoading(true)
        try {
            const response = await axios.post('https://appmobile.altcel2.com/addDevice',{
                user_id,
                dn
            })
            console.log(response.data.deviceNew[0])
            // setUseGetDevice([...useGetDevice, response.data.deviceNew[0]])
        } catch (error) {
            return Alert.alert(
                'Error',
                'Favor de ingresar un número correcto.',
                [{text: 'Ok'}]
            )
        }
    }
    const getDevicesRecharge = async () => {
        setIsLoading(true)
        try {
            const userid = 41;
            const response = await axios.get('https://appmobile.altcel2.com/devicesRecharge?userid='+userid);
            setUseGetDeviceRecharge(response.data.devices)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      
        getDevices();
    }, [])
    useEffect(() => {
      
        getDevicesRecharge();
    }, [])

    return{
        useGetDevice,
        isLoading,
        useGetDeviceRecharge
    }
}
