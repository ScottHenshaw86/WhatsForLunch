import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WFLText from '../common/WFLText'
import WFLButton from '../common/WFLButton'
import restaurants from "../../assets/local/restaurants";
import WFLModal from '../common/WFLModal';

const Home = ({navigation}: any) => {
    const selectRandomRestaurant = () => {
        const min = 1;
        const max = restaurants.length;
        const winner =Math.floor(Math.random() * max)
        console.log(winner)
        navigation.navigate("RestaurantDetails", {restaurant: restaurants[winner], random: true});
    }

    const handleViewAll = () => {
      navigation.navigate("ViewAll");
    }

  return (
    <View style={styles.center}>
      <WFLText color="primary" font="lobster" size="h1" style={styles.h1}>What's for Lunch?</WFLText>
      <WFLButton onPress={selectRandomRestaurant}>Choose for Me!</WFLButton>
      <Pressable style={styles.viewAll} onPress={handleViewAll}>
        <WFLText  font="medium" size="h4" color="gray">View all</WFLText>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        backgroundColor: "black",
    },
    h1: {
        fontSize: 38,
        color: "orange",
        marginBottom: 90,
    },
    viewAll: {
      position: 'absolute',
      bottom: 50,

    }
})