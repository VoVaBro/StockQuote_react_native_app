import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const SybolCard = ({ title }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 320,
        height: 60,
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