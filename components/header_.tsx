import { StyleSheet, Text, View } from 'react-native'
import { scale, verticalScale, moderateScale, vs,s } from 'react-native-size-matters';
import React from 'react'
import BackBtn from './back_btn';
import Avatar from './avatar_icon';
import SendBtn from './sendbtn';

const HeaderBar = () => {
  return (
    <View style={{ marginTop: vs(20), padding:s(20)}} >
    <View style={styles.container}>
        <BackBtn />
    <Avatar />
    
    
   

    </View>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    container: {
       
    
   
        alignItems:"center",
        flexDirection: 'row',
        justifyContent: 'space-between', // Space between items
      }  // Makes it horizontal          
})