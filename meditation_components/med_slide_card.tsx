import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { s } from 'react-native-size-matters';

interface pops {
    icon: any,
    text: string

}

const MedSlideCard = ({icon , text}:pops) => {
  return (
    <View style={{flexDirection:"column", alignItems:"center"}}>
   <View style={{backgroundColor:"#F3EFEFFF",borderRadius:s(12),width:s(120),justifyContent:"center",alignItems:"center", height:s(100)}}>
{icon}
</View>
<View style={{height:s(20)}} />
<Text style={{fontSize:s(28), alignItems:"center", }}>{text}</Text>
</View>
  )
}

export default MedSlideCard

const styles = StyleSheet.create({})