import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react'
import { s } from 'react-native-size-matters'


const WhatsAppIcon = () => {
  return (
    <View style={styles.circle}>
      <FontAwesome name="whatsapp" size={24} color="#1077Af" />
    </View>
  )
}

export default WhatsAppIcon

const styles = StyleSheet.create({
     circle:{
            height:s(46),
            width:s(46),
            borderRadius:s(40),
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: "#fff",
            borderWidth:s(1),
            borderColor:"#178AD9"
    
        }
})