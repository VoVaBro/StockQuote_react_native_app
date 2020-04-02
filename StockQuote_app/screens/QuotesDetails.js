import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { useHttp } from '../hooks/useHttp'


const QuotesDetails = ({ route }) => {

  const { details, description } = route.params

  const { request, loading } = useHttp()

  const [quotesDescription, setQuotesDescription] = useState([])


  const fetchDetails = useCallback(async () => {
    let description = await request(`https://quotes.instaforex.com/api/quotesTick?q=${details}`)
    setQuotesDescription(description)
  }, [request])


  useEffect(() => {
    fetchDetails()
  }, [details])



  if (loading) {

    return (
      <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
        <ActivityIndicator syze='large' color='black' />
      </View>
    )

  } else {

    return (
      <View style={styles.container}>
        {
          quotesDescription.map(i => (
            <ScrollView style={styles.scroll} key={i.symbol}>
              <View style={styles.description}>
                <Text style={styles.text}>Symbol: </Text>
                <Text style={{fontWeight: '600', fontSize: 25}}>{i.symbol}</Text>
              </View>

              <View style={styles.description}>
                <Text style={styles.text}>Description:</Text>
                <Text style={{fontWeight: '600',  fontSize: 17}}>{description}</Text>
              </View>

              <View style={styles.description}>
                <Text style={styles.text}>Digits:</Text>
                <Text style={{fontWeight: '600',  fontSize: 25}}>{i.digits}</Text>
              </View>

              <View style={styles.description}>
                <Text style={styles.text}>Bid:</Text>
                <Text style={{fontWeight: '600',  fontSize: 25}}>{i.bid}</Text>
              </View>

              <View style={styles.description}>
                <Text style={styles.text}>Change:</Text>
                <Text style={{fontWeight: '600',  fontSize: 25}}>{i.change}</Text>
              </View>

              <View style={styles.description}>
                <Text style={styles.text}>Change 24h:</Text>
                <Text style={{fontWeight: '600', fontSize: 25}}>{i.change24h}</Text>
              </View>

            </ScrollView>
          ))
        }
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 340,
    height: 70,
    marginTop: 15,
    paddingTop: 10,
    backgroundColor: '#FBB57D',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.38,
    shadowRadius: 2.00,

    elevation: 60,
  },
  text: {
    fontSize: 15,
    fontWeight: '400'
  }
});

export default QuotesDetails