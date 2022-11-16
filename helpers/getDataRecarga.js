import React,{ useEffect, useState }  from 'react'

import Recargas from '../views/pages/Recargas';

const getDataRecarga = () => {
     // const [useGetDevice, setUseGetDevice] = useState([]);
     const [consultar, guardarCondultar] = useState(false);

     useEffect(() =>{
          if (consultar) {
               console.log("Consultando api")
          }
     }, [consultar]);

//      const getRecarga = async () => { 
//         const product = 'MIFI';
//         try {
//             const response = await fetch('https://appmobile.altcel2.com/planes?product='+product, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }) 

    
//             if(response.status == 200){
//                 const {message, http_code, rates} = await response.json()
//                 setUseGetDevice(rates)
//                // console.log("rates: ",rates[1])
//             }
    
//         }catch(error){
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         getRecarga()
//     }, [])
    

    return (
     <>
          <Recargas
               guardarCondultar = {guardarCondultar}
          />
     </>
    )
}

export default getDataRecarga
