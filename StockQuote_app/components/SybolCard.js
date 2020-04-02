import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const {width} = Dimensions.get('screen')


const SybolCard = ({ title, showDetails, description  }) => {


    return (
        <TouchableOpacity style={styles.card}
        onPress={() => showDetails(title, description)}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: width <= 320 ? 290 : 320,
        height: 60,
        marginLeft: width <= 320 ? 20 : null,
        borderRadius: 30,
        backgroundColor: '#4C9996',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 30,
        fontWeight: "300"
    }
});

export default SybolCard