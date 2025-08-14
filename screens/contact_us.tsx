import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SendBtn from '../components/sendbtn';
import HeaderBar from '../components/header_';
import SocialSection from '../components/social_section';
import { s } from 'react-native-size-matters';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <Text style={{margin:s(20), fontSize:s(40),fontWeight: 'bold', color:"#202020FF"}} >Get in Contact  </Text>
      <View style={styles.main}>
        <Text style={styles.txt}>Social Media Platforms </Text>
        <SocialSection name="whatsapp" iconname='Whatsapp' />
        <View style={{height:25}}></View>
        <SocialSection name="github" iconname='Github' />
        <View style={{height:25}}></View>
        <SocialSection name="facebook"iconname='Facebook' />
        <View style={{height:25}}></View>
        
        <SocialSection name="twitter" iconname='Twitter'/>
        <View style={{height:25}}></View>
        <SocialSection name="instagram" iconname='Instagram' />
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:"white"
    // This ensures the outer View takes full screen
  },
  main: {
    flex: 1,
    margin:s(20),
    borderRadius:s(30),
    
    backgroundColor:"#F1F1F1FF",
    //width:s(300)
    //justifyContent: "center",
    // paddingHorizontal: 10, // Add some padding for better spacing
    // paddingVertical: 10,
  },
  txt:{
    margin:s(20),
    color:"black",
    fontSize:s(20),
    fontWeight: 500,

  }
});