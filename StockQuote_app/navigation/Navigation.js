import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import QuotesList from '../screens/QuotesList‌'
import QuotesDetails from '../screens/QuotesDetails'
import RealTimeQuotes from '../screens/RealTimeQuotes'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Quotes List"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen name="Quotes List" component={QuotesList} />
            <Stack.Screen name="Quotes Details" component={QuotesDetails} />
        </Stack.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
        initialRouteName="Quotes List"
        >
            <Drawer.Screen name="Quotes List" component={StackNavigator} />
            <Drawer.Screen name="Real time Quotes" component={RealTimeQuotes} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator