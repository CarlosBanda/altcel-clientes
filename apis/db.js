import axios from 'react-native-axios'

const devices = axios.create({
    baseURL: 'https://appmobile.altcel2.com'
})

export default devices;