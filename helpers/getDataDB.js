import { useEffect, useState } from "react"
import { Alert } from "react-native";
import axios from "axios";
// import axios from 'react-native-axios'

// import Panel from "../components/panel";

export const getDataDB = () => {
    const [useGetDevice, setUseGetDevice] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getDevices = async () => {
            try {
                const userid = 41;
                const response = await axios.get('https://appmobile.altcel2.com/devices?userid='+userid);
                setUseGetDevice(response.data.devices)
            } catch (error) {
                console.log(error);
            }
    }

    useEffect(() => {
      
        getDevices();
    }, [])


    // const getDevices = async () => {
    //     const userid = 41;
    //     const url = 'https://appmobile.altcel2.com/devices?userid='+userid;
    //     const response = await axios.get(url)
    //     setUseGetDevice(response.diveces)
    // }

    // useEffect(() => {
    //     getDevices();
    // }, [])

    return{
        useGetDevice
    }
}
