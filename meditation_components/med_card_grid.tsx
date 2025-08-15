import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MedCard from './med_card'

const MedCardGrid = () => {
  return (
    <View style={styles.container}>
      {/* First Row */}
      <View style={styles.row}>
        <View style={styles.cardWrapper}>
          <MedCard url={'https://media.istockphoto.com/id/1421420537/photo/peace-relax-and-happy-mindset-of-a-woman-from-indonesia-taking-a-mind-and-meditation-home.jpg?s=1024x1024&w=is&k=20&c=RkED6EynXPa-gRYwo906T5J__Bx6NkH-F-9WIIABFRg='} time={'7:00am - 5:00pm'} state={'Active'} />
        </View>
        <View style={styles.cardWrapper}>
          <MedCard  time={'7:00am - 6:00pm'} state={'Pending'} url={"https://media.istockphoto.com/id/1472059271/photo/hatha-yoga-at-home.jpg?s=1024x1024&w=is&k=20&c=Ppf50Xo13oWadK1AHockxi5BZrEPs13mtCdqK5XyeCs="} />
        </View>
      </View>
      
      {/* Second Row */}
      <View style={styles.row}>
        <View style={styles.cardWrapper}>
          <MedCard  time={'7:00am - 5:00pm'} state={'Active'} url='https://media.istockphoto.com/id/1058768298/photo/listen-relaxing-music-at-home-relaxed-man-sitting-in-headphones.jpg?s=1024x1024&w=is&k=20&c=QOCieTj-hWc43GtJeXyLS5FH59BgS0pCeCysF2-yeDA='  />
        </View>
        <View style={styles.cardWrapper}>
          <MedCard  time={'10:00am - 5:00pm'} state={'Pending'} url={'https://media.istockphoto.com/id/1829995626/photo/content-woman-savoring-the-aroma-of-her-morning-coffee-in-a-well-lit-kitchen-with-modern.jpg?s=1024x1024&w=is&k=20&c=NPQxSGslSKNfkJ8P81eQXHrQkU_gI0JEZqUGPJy1JCk='} />
        </View>
      </View>
      
      {/* Third Row - Single card centered or two cards */}
      <View style={styles.row}>
        <View style={styles.cardWrapper}>
          <MedCard  time={'7:00am - 5:00pm'} state={'Active'} url={'https://media.istockphoto.com/id/2169836748/photo/woman-doing-calming-breathing-exercises-at-home.jpg?s=1024x1024&w=is&k=20&c=XXHi2Uto6_5VboTjzM3-BKZUOE03MWsgK4zMbOzfciY='} />
        </View>


        <View style={styles.cardWrapper}>
          <MedCard  time={'8:00am - 2:00pm'} state={'Active'} url={'https://media.istockphoto.com/id/1303002202/photo/my-presence-is-my-power.jpg?s=1024x1024&w=is&k=20&c=5lxmymzqP11ER5xZce8GfS59Qn_be3q7iyyk7_03jVU='} />
        </View>
        {/* Uncomment below if you want 6 cards total */}
        
        {/* Empty space to maintain grid alignment */}
        {/* <View style={styles.cardWrapper} /> */}
      </View>
    </View>
  )
}

export default MedCardGrid

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cardWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
})