import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')


const PaginationBtns = ({ total, current, setFirstIndex, setLastIndex, indexOfFirstQuotes, indexOfLastQuotes }) => {


    const next = () => {
        if (indexOfLastQuotes < (total - 6)) {
            setFirstIndex(indexOfLastQuotes - 2)
            setLastIndex(prev => prev + 50)
        }

        if (indexOfLastQuotes === (total - 6)) {
            setFirstIndex(indexOfLastQuotes)
            setLastIndex(prev => prev + 6)
        }
    }

    const prev = () => {
        if (indexOfFirstQuotes > 0) {
            setLastIndex(indexOfFirstQuotes)
            setFirstIndex(prev => prev - 50)
        }
    }


    return (
        <View style={styles.btnBox}>
            <TouchableOpacity size={styles.left}
                onPress={() => prev()}
            >
                <Entypo name="arrow-with-circle-left" size={46} color='#268421' />
            </TouchableOpacity>
            <View size={styles.counter}>
                <Text style={styles.text}>
                    {current}
                    {indexOfLastQuotes === total ?
                        ' '
                        :
                        <Text>... </Text>
                    }

                    of
                    <Text>  </Text>
                    {total}
                </Text>
            </View>


            <TouchableOpacity size={styles.right}
                onPress={() => next()}
            >
                <Entypo name="arrow-with-circle-right" size={46} color='#268421' />
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    btnBox: {
        position: 'absolute',
        width: width - 50,
        height: 90,
        backgroundColor: '#A2282B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
        marginTop: -155,
        marginLeft: width < 414 ? 25 : 22,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.68,
        shadowRadius: 18.00,

        elevation: 24,
    },
    text: {
        color: 'gold',
        fontSize: 15
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default PaginationBtns