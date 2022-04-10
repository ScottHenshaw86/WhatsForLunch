import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import WFLText from '../common/WFLText'
import WFLButton from '../common/WFLButton';
import { borderRadius_screen, colors } from '../../theme';
import WFLModal from '../common/WFLModal';

const RestaurantDetails = ({ navigation, route} : any) => {
    const { restaurant, random } = route?.params;
    const [isLoading, setIsLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [menuVisible, setMenuVisible] = useState<boolean>(false)

    useEffect(() => {


        Image.prefetch(restaurant.food_img);
        Image.prefetch(restaurant.map);

        if (!random) {
            setIsLoading(false);
        }

        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    

    const openModal = () => {
        setModalVisible(true);
    }

    const openMenu = () => {
        setMenuVisible(true)
    }

    if (isLoading) return (
        <View style={styles.main}>
        <Image source={require('../../assets/images/cookieloading.gif')} style={styles.loading}/>
      </View>
    )

    return (
        <View style={styles.main}>
            <View style={[styles.spread, {borderColor: restaurant.color}]}>
                <View style={styles.center}>
                    <WFLText color={restaurant.color ?? "primary"} font="black" size="h2" onPress={() => Linking.openURL(restaurant.link)}>{restaurant.name}</WFLText>
                    <WFLText color="white" font="lobster" size="h3">{restaurant.type}</WFLText>
                </View>
                <View style={styles.imagesContainer}>
                    <Pressable style={styles.foodImageContainer} onPress={openMenu}>
                        <Image style={styles.img} source={{uri: restaurant.food_img}}/>
                    </Pressable>
                    <Pressable style={styles.mapContainer} onPress={openModal}>
                        <Image style={styles.map} source={{uri: restaurant.map}}/>
                    </Pressable>
                </View>
                <WFLButton style={styles.back} onPress={() => navigation.goBack()}>Choose Another</WFLButton>
            </View>
            <WFLModal modalVisible={modalVisible} setModalVisible={setModalVisible} uri={restaurant.map}/>
            <WFLModal modalVisible={menuVisible} setModalVisible={setMenuVisible} uri={restaurant.menu_img}/>
        </View>
    )
}

export default RestaurantDetails

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        width: '100%',
        backgroundColor: colors.black,
    },
    center: {
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 20,
    },
    spread: {
        justifyContent: "space-around",
        alignItems: "center",
        height: '100%',
        width: '100%',
        backgroundColor: "black",
        borderWidth: 3,
        borderRadius: borderRadius_screen
    },
    imagesContainer: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
    }, 
    foodImageContainer: {
        width: '100%',
        flex: 1,
        marginBottom: 10
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
    },
    mapContainer: {
        width: '100%',
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
    },
    loading: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    back: {
        marginVertical: 20,
        backgroundColor: colors.gray
    }
})