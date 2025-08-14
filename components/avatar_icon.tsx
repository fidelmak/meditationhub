import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const Avatar = () => {
  return (
    <View >
      <View style={styles.container}>
        <Image style={styles.avatar}
          source={{ uri: 'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
          </View>
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  container: {
   
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
  
  },
  avatar: {
    width: s(50),
    height: s(50),
    borderRadius: s(50),
    borderWidth: 2,
    borderColor: 'red',
  }
})