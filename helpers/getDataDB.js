import { useEffect, useState } from "react"
import { Alert } from "react-native";
import axios from "axios";
// import axios from 'react-native-axios'

// import Panel from "../components/panel";

export const getDataDB = () => {
    const [useGetDevice, setUseGetDevice] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const getDevices = async () => {
        setIsLoading(true)
            try {
                const userid = 41;
                const response = await axios.get('https://appmobile.altcel2.com/devicesRecharge?userid='+userid);
                setUseGetDevice(response.data.devices)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
    }
    useEffect(() => {
      
        getDevices();
    }, [])

    return{
        useGetDevice,
        isLoading
    }
}
