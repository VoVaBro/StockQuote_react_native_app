import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import QuotesList from '../screens/QuotesList‌'
import QuotesDetails from '../screens/QuotesDetails'
import RealTimeQuotes from '../screens/RealTimeQuotes'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Quotes List"
            screenOptions={{
                headerTintColor: 'gold',
                headerStyle: {
                    backgroundColor: '#A2282B',
                    borderRadius: 25,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                },
                headerTitleStyle: { fontSize: 24 },
            }}
        >
            <Stack.Screen name="Quotes List" component={QuotesList} options={{
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ marginLeft: 20 }}
                        onPress={() => navigation.openDrawer()}>
                        <MaterialCommunityIcons name="backburger" size={32} color='#268421' />
                    </TouchableOpacity>
                )
            }} />
            <Stack.Screen name="Quotes Details" component={QuotesDetails} />
        </Stack.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            hideStatusBar={true}
            initialRouteName="Quotes List"
            drawerStyle={{
                width: 230,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,
            }}
            drawerContentOptions={{
                activeTintColor: '#268421',
                itemStyle: { marginHorizontal: 15, marginVertical: 15, padding: 6, borderRadius: 20, alignItems: 'center' },
                labelStyle: { fontSize: 20, color: 'black' },
            }}
        >
            <Drawer.Screen options={{ drawerLabel: 'Quotes' }} name="Quotes List" component={StackNavigator} />
            <Drawer.Screen name="Real time Quotes" component={RealTimeQuotes} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator