import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo';


interface popface  {
    url :string,
    time: string,
    state: string

}

const MedCard = ({url, time,state}:popface) => {
  return (
    <TouchableOpacity  >
    <ImageBackground 
      style={styles.container} 
      imageStyle={styles.image}
      source={{ uri: url }} // Using a working image URL
      resizeMode="cover"
    >
       
      <View style={styles.content}>
        <View style={styles.redCard}
        
        ><Text style={styles.text}>{state}</Text></View>
        <View style={{margin:s(10), position:"absolute", bottom: s(5), // Distance from top
    left: s(5),}}>

            <Text style={styles.text2}>Schedule Time</Text>
            <View style={{height:s(5)}} />
            <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
                <Entypo name="stopwatch" size={14} color="gold" />
                <View style={{width:s(8)}} />
                <Text style={styles.time} >{time}</Text>
            </View>
            
         <View>
            
            </View>
            </View>
        
      </View>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default MedCard

const styles = StyleSheet.create({
  container: {
    borderRadius:s(12),
    width:s(140),
    backgroundColor:"black",
    
    height: s(150),
    justifyContent: 'center',
  
    //alignItems: 'center',
  },
  image: {
    borderRadius: s(12), // Image-specific styling goes here
  },
  content: {
     borderRadius:s(12),
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
   flex:1,
   flexDirection:'column',
   alignItems: 'center',
   
   
    justifyContent: 'space-between',
   
  },
  text: {
    
    color: 'white',
    fontSize: s(16),
    fontWeight: 'bold',
  },
   text2: {
    
    color: 'white',
    fontSize: s(18),
    fontWeight: 'bold',
  }
  ,
  redCard:{backgroundColor:"red", 
     marginTop:s(2),
    
    
    borderRadius:s(12), height:s(30),alignItems:"center" ,
    justifyContent:"center",width:s(80),
     position: 'absolute', // Position in top-right corner
    top: s(10), // Distance from top
    right: s(10), // Distance from right


},
    time:{
        alignItems:"center",
         color: 'white',
         justifyContent:"center",
    fontSize: s(12),
    fontWeight: 'bold',
   

    }
})