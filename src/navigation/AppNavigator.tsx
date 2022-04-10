import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../components/screens/Home";
import RestaurantDetails from "../components/screens/RestaurantDetails"
import ViewAll from "../components/screens/ViewAll"

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown: false,
                animation: "fade",
            }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
            <Stack.Screen name='ViewAll' component={ViewAll} />
        </Stack.Navigator>
    );
};

export default AppNavigator;