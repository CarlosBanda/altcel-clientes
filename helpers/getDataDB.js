import { useEffect, useState } from "react"
import { Alert } from "react-native";
import axios from 'react-native-axios'
import devices from '../apis/db';
// import Panel from "../components/panel";

export const getDataDB = () => {
    const [useGetDevice, setUseGetDevice] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    

    const getDevices = async () => { 
        // setIsLoading(true)
        const userid = 41;
        try {
            const response = await fetch('https://appmobile.altcel2.com/devices?userid='+userid, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }) 
    
            if(response.status == 200){
                const {message, http_code, devices} = await response.json()
                setUseGetDevice(devices)
                setIsLoading(false)
            }
            // console.log(devices)
    
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getDevices();
    }, [])
    return{
        useGetDevice
    }
}
