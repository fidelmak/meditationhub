import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scale, verticalScale, moderateScale, vs, s } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

const BackBtn = () => {
  return (
    <TouchableOpacity style={styles.container}>
     <Ionicons name="chevron-back" size={16} color="black" />
    </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({
    container: {
       
        width: s(34),
        height: vs(30),
        borderRadius: s(25),
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        // Space between items
    }  // Makes it horizontal
})