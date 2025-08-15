import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

interface pops {
    icon: any,
    text: string

}

const MedAddCard = ({icon,text}:pops) => {
  return (
  
     <View style={{backgroundColor:"#F3EFEFFF",borderRadius:s(12),width:s(120),justifyContent:"center",alignItems:"center", height:s(100)}}>
     {icon}
    </View>
  )
}

export default MedAddCard

const styles = StyleSheet.create({})