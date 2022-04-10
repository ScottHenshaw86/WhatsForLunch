import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import restaurants from "../../assets/local/restaurants";
import WFLText from '../common/WFLText';
import { colors } from '../../theme';
import { NavigationRouteContext } from '@react-navigation/native';

const ViewAll = ({ navigation }: any) => {

    const handleNav = (item: any) => {
        navigation.navigate("RestaurantDetails", {restaurant: item, random: false})
    }

    const handleBack = () => {
        navigation.goBack()
    }

    const renderItem = ({ item }: any) => (
        <Pressable style={styles.item} onPress={() => handleNav(item)}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={{uri: item.food_img}} />
            </View>
            <View style={styles.textContainer}>
                <WFLText color={item.color} size="h3" font="bold">{item.name}</WFLText>
                <WFLText size="h5" font="regular">{item.type}</WFLText>
            </View>
        </Pressable>
    )

  return (
    <View style={styles.main}>
        <Pressable style={styles.back} onPress={handleBack}>
            <WFLText color="gray" font="semibold" size="h4">{'\u2B05'} Back</WFLText>
        </Pressable>
        <WFLText color="primary" size="h2" style={styles.header}>Nearby Restaurants</WFLText>
        <FlatList
            data={restaurants as any}
            renderItem={renderItem as any}
            keyExtractor={item => item.id}
            style={styles.list}
        />
    </View>
  )
}

export default ViewAll

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        backgroundColor: "black",
        width: '100%'
    },
    back: {
        alignSelf: 'flex-start',
        paddingLeft: 10,
        paddingTop: 10
    },
    header: {
        marginBottom: 10
    },
    list: {
        width: '100%',
    },
    item: {
        width: '100%',
        alignSelf: 'center',
        height: 100,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: colors.primary,
        borderTopWidth: 1
    },
    imageContainer: {
        width: '40%',
        marginLeft: 10,
        marginTop: 10,
        height: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    textContainer: {
        flex: 1,
        marginLeft: 8
    }
})