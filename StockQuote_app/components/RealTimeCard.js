import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen')


const RealTimeCard = ({ title, change, ask, bid }) => {





    return (
        <View style={styles.card}>
            <Text style={styles.text}>
                {title}
            </Text>
            <Text style={styles.desc}>
                {change}
            </Text>
            <Text style={styles.desc}>
                {ask}
            </Text>
            <Text style={styles.desc}>
                {bid}
            </Text>



        </View >
    );
}

const styles = StyleSheet.create({
    card: {
        width: width <= 320 ? 300 : 360,
        height: 60,
        marginLeft: width <= 320 ? 20 : null,
        backgroundColor: '#B7B4A9',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 32
    },
    text: {
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 5
    }
});

export default RealTimeCard