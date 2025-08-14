import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import SendSvg from '../src/assets/sendbotton'

const SendBtn = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendSvg/>
    </TouchableOpacity>
  )
}

export default SendBtn

const styles = StyleSheet.create({
    circle:{
        height:s(46),
        width:s(46),
        borderRadius:s(40),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#1077Af"

    }
})