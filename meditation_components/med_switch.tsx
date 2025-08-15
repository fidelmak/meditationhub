import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const MedSwitch = () => {
  return (
    <View style={styles.container}>
               <TouchableOpacity style={styles.con1}>
                   <Text style={{fontSize:s(20), color:"white", fontWeight:"bold"}}>Opened</Text>
               </TouchableOpacity>
               <View style={{width:s(40)}} />
                
              <TouchableOpacity >
               <Text style={{fontSize:s(20), color:"black", fontWeight:"normal", padding:s(5)}}>Closed</Text></TouchableOpacity>
                <View style={{width:s(20)}} />
           </View>
  )
}

export default MedSwitch

const styles = StyleSheet.create({
    container:{
        margin:s(1),
        height:s(50),
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:s(12),
        
        backgroundColor:"#ffffFF",
        borderColor:"#E6E6E6FF",
        borderWidth:s(1),
        padding:s(10),
        alignItems:"center",
        
    }
    ,
    con1:{
        backgroundColor:"#C26033FF",
        height:s(40),
        width:s(100),
        borderRadius:s(12),
        flex:1,
        alignItems:"center",
        justifyContent:"center"



    }
})