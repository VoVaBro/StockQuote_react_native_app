import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import {Entypo} from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')


const PaginationBtns = () => {

    return (
        <View style={styles.btnBox}>

<TouchableOpacity size={styles.left}>
    <Entypo name="arrow-with-circle-left" size={46} color='#268421'/>
</TouchableOpacity>

<View size={styles.counter}>
    <View>
    <Text style={styles.text}>
        {}
    </Text>

    </View>
    <Text style={styles.text}>
        of
    </Text>
    <View>
    <Text style={styles.text}>
        {}
    </Text>
    </View>

</View>


<TouchableOpacity size={styles.right}>
    <Entypo name="arrow-with-circle-right" size={46} color='#268421'/>
</TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    btnBox: {
        width: width - 50,
        height: 90,
        backgroundColor: '#A2282B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
        marginTop: height - 250,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    text: {
        color: 'gold',
        fontSize: 15
    }
});

export default PaginationBtns