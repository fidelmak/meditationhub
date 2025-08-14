import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react'
import { s } from 'react-native-size-matters'


interface IconProps {
  name: any;
  color?: string;
}


const ReusableIcon1 = ( { name, color = "#000" }: IconProps) => {
  return (
    <View style={styles.circle}>
      <FontAwesome name={name} size={24} color={color} />
    </View>
  )
}

export default ReusableIcon1

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