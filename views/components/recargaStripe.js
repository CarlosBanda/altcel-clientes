import React from 'react';
import {Modal, Text, StyleSheet, View, Pressable} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const RecargaStripe = ({modalStripe, setModalStripe, categoriaRecarga, offerID}) => {
     console.log("offerID",offerID);
  return (
     <Modal
        animationType='slide'
        visible={modalStripe}
     >
          <View style={styles.contenedor}>
               <View style={styles.contenedorBotones}>
                    <Pressable 
                         onPress={() => {
                              setModalStripe(false)
                         }}
                         style={[styles.btn, styles.btnCancelar]}
                    >
                         <Text style={styles.btnTexto}>Cancelar</Text>
                    </Pressable>
               </View>

               <Text style={styles.contenedorTexto}>Forma de Pago</Text>
               <TextInput label="Nombre de la tarjeta" style={styles.input} />
               <TextInput label="Número de la tarjeta" style={styles.input} />

               <View style={styles.contenedorInput}>
                    <View style={styles.contenedorFechaInput}>
                         <TextInput label="Mes" style={styles.inputData}/>
                         <TextInput label="Año" style={styles.inputData}/>
                    </View>
                    <TextInput label="CVV/CVC" style={styles.inputCvc} />
               </View>
               
               <Button mode='contained' contentStyle={styles.btnContent} labelStyle={styles.btnText}>
                    Pagar (TOTAL $)
               </Button>
          </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
     contenedor:{
          marginTop: 40,
          marginBottom: 30
     },
     contenedorTexto:{
          paddingBottom: 10,
          fontSize: 18,
          fontWeight: 'bold',
          color: '#000'
     },
     input:{
          marginHorizontal: 10,
          marginVertical: 10
     },
     contenedorInput:{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20
     },
     contenedorFechaInput:{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end"
     },
     inputData:{
          marginHorizontal: 10,
          marginVertical: 10,
          width: 100,
          marginRight: 10
     },
     inputCvc:{
          width: "34%",
          marginHorizontal: 10,
     },
     btnContent:{
          paddingVertical: 4,
          backgroundColor: Colors.primary
     },
     btnText:{
          fontSize: 16
     },



     // headerDevice:{
     //     borderColor: '#fff',
     //     alignItems: 'center'
     // },
     // tituloNumero:{
     //   marginTop: 10,
     //   fontWeight: 'bold',
     //   fontSize: 25,
     //   color:'black'
     // },
     btn:{
          padding: 10,
          marginTop: 30,
          marginHorizontal: 10,
          borderRadius: 10
        },
        btnCancelar:{
            backgroundColor: '#DB2777',
        },
        btnTexto:{
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: '#FFF',
          fontSize: 20
      }
})

export default RecargaStripe
