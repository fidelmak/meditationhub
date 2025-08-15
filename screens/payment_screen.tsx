import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import BackBtn from '../components/back_btn'
import { s } from 'react-native-size-matters'
import MedSlideCard from '../meditation_components/med_slide_card'
import  Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';


const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{padding:s(20), marginTop:s(20)}}>
        <View style={{flexDirection:'row', alignItems:"center"}}
        >
            <BackBtn />
            <View style={{width:s(20)}} />

<Text style={{fontSize:s(34)}}>Payment</Text>
        </View>
<View style={{height:s(30)}} />
<ScrollView style={{}}  horizontal={true} // Enable horizontal scrolling
          showsHorizontalScrollIndicator={true} // Optional: hide scroll bar
          >

<MedSlideCard icon={<Ionicons name="cash" size={34} color="orange" />} text={'Cash'}/>
<View style={{width:s(20)}} />
<MedSlideCard icon={<FontAwesome5 name="cc-visa" size={34} color="#2566AF" />} text={'Visa'}/>
<View style={{width:s(20)}} />
<MedSlideCard icon={<Fontisto name="mastercard" size={34} color="orange" />} text={'Mastercard'}/>
<View style={{width:s(20)}} />
<MedSlideCard icon={<Entypo name="paypal" size={34} color="green" />} text={'Paypal'}/>
</ScrollView>

        </View>
      
    </SafeAreaView>
  )
}

export default PaymentScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        
        
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
})