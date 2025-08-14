import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import WhatsAppIcon from './whatsapp_icon'
import SendBtn from './sendbtn'
import { s } from 'react-native-size-matters'
import ReusableIcon1 from './reusable'

interface IconProps {
  name: any;
  iconname:string;
 
}

const SocialSection = ({name, iconname}:IconProps) => {
  return (
    <View style={styles.container}>
       
        <View style={{flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
             <ReusableIcon1 name={name} color='#1077Af' />
             <View style={{width:s(10)}}/>
 <Text style={styles.memo}>
            {iconname}
        </Text>
        </View>
       
        <SendBtn />
    
    </View>
  )
}

export default SocialSection

const styles = StyleSheet.create({
    container:{
        paddingLeft:s(12),
        paddingRight:s(12),
        flexDirection:"row", 
        justifyContent:"space-between"
    },
    memo:{

       
        textAlign:"center",
        fontWeight: 'normal',
        fontSize:s(16)}
        
})