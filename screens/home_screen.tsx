import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from '../components/avatar_icon'
import HeaderBar from '../components/header_'
import MedHeader from '../meditation_components/med_header'
import MedSwitch from '../meditation_components/med_switch'
import MedCard from '../meditation_components/med_card'
import { s } from 'react-native-size-matters'
import MedCardGrid from '../meditation_components/med_card_grid'

const HomeScreen = () => {
  return (
   
   <SafeAreaView style={styles.container}>
    <View>
        {/* content */}
        
        <MedHeader />
        <MedSwitch />
        <View style={{height:s(16)}}/>
       <MedCardGrid />
       

       



    </View>


   </SafeAreaView>

    
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        
        
        alignItems: 'center',
        backgroundColor: 'white',
    },
})