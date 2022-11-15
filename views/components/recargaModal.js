import React from 'react'
import {SafeAreaView, Modal, Text, StyleSheet, View, Image, Pressable, Picker} from 'react-native';

const RecargaModal = ({modalVisible, setModalVisible}) => {
  return (
     <Modal
        animationType='slide'
        visible={modalVisible}
     >
        <SafeAreaView>
          <View style={styles.headerDevice}>
            <Text style={styles.tituloNumero}>Mis números 9611840957</Text>
          </View>

          <View style={styles.contenedorBotones}>
            <Pressable 
                onPress={() => {
                  setModalVisible(false)
                }}
                style={[styles.btn, styles.btnCancelar]}
            >
              <Text style={styles.btnTexto}>Cancelar</Text>
            </Pressable>
          </View>
          
          <View style={styles.card}>
            <View>
              <Text style={[styles.text, styles.infoHbb]}>MIFI</Text>
              <Text style={[styles.text, styles.infoCenter]}>9614527258</Text>
            </View>
            <View>
              <Image style={styles.servicioMov} source={require('../../assets/img/MIFI.png')}/>
            </View>
            <View style={styles.planes}>
              <Text style={styles.textoPlanes}>Planes disponibles</Text>
            </View>

            {/* <View style={styles.inputPicker}>
              <Picker
                selectedValue={categoriaRecarga}
                onValueChange={(valor) => {
                setCategoriaRecarga(valor)
            }}
              >
                {itemsInPicker} */}
                {/* <Picker.Item label="-- Seleccione --" value="" style={styles.colorLabel}/> */}
              {/* </Picker>
            </View> */}
            <Pressable 
                style={styles.btnRecargar}
                // onPress={getRecarga}
                >
                {/* <Text style={styles.textoRecargar}>
                <Icon name="cart-outline" size={30} />Recargar
                </Text> */}
            </Pressable>
          </View>
        </SafeAreaView>
      </Modal>
  )
}

const styles = StyleSheet.create({
     contenedor:{
       flex: 1,
       backgroundColor: '#f2f2f2'
     },
     card:{
         alignItems:'center',
         justifyContent:'center',
         width: '80%',
         marginVertical: 40,
         marginHorizontal: 40,
         marginBottom: 1,
         borderWidth: 2,
         borderStyle: 'solid',
         borderRadius: 15,
         borderColor: '#4923F5',
         backgroundColor: '#FFF',
     },
     headerDevice:{
         borderColor: '#fff',
         alignItems: 'center'
     },
     tituloNumero:{
       marginTop: 10,
       fontWeight: 'bold',
       fontSize: 25,
       color:'black'
     },
     btnRecargar:{
       backgroundColor: '#001b54',
       paddingVertical: 5,
       paddingHorizontal: 70,
       borderRadius: 5,
       marginVertical: 10
   
     },
     textoRecargar:{
       color: '#FFF',
       textAlign: 'center',
       textTransform: 'uppercase',
       fontWeight: 'bold'
     },
     mtText:{
         marginTop:10,
         alignItems:'center',
     },
     infoHbb:{
         color: '#000',
         fontWeight: 'bold',
         fontSize: 25,
         textAlign: 'center',
         marginVertical: 10
     },
     infoCenter:{
         color: '#705ae5',
         fontWeight: 'bold',
         textAlign:'center',
         fontSize: 25,
         marginVertical: 1
     },
     servicioMov:{
       width: 80,
       height: 100,
       marginVertical: 20,
       // marginHorizontal: 28
     },
     info:{
       flexDirection: 'row',
       justifyContent: 'space-between'
     },
     planes:{
       // marginHorizontal: 60
       
     },
     textoPlanes:{
       color: '#919292',
       fontSize: 18,
       marginHorizontal: -140,
       marginVertical: 20
     },
     inputPicker:{
       backgroundColor: '#919292',
       width: '90%',
       borderRadius: 5,
     },
     colorLabel:{
       color: '#000'
     }, 
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
   },
   })

export default RecargaModal
