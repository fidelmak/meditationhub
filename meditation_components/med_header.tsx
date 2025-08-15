import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const MedHeader = () => {
  return (
    <View style={styles.container}>
            <Text style={styles.txt1}>Meditation Hubs </Text>
            <View style={{height:s(8)}}/>
            <Text style={styles.txt2}>Locate The best Meditaion Hub around you ... </Text>
             <View style={{height:s(16)}}/>
             
        </View>
  )
}

export default MedHeader

const styles = StyleSheet.create({
container:{

},
txt1:{
    color:"black",
    fontSize: s(36),
    fontWeight:"semibold",
},
txt2:{
    color:"black",
    fontSize: s(18),
    fontWeight:"normal",
}
})