import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CurrentPeople = ({item}) => {
  <View style={styles.container}>
    <View style={styles.text}>
      <Text>
        {item.Restaurant}/{item.Buildin}
      </Text>
      <Text>{item.Time} 주문 예정</Text>
      <Text>
        {item.Current}/{item.Total}
      </Text>
      <Text>사람들 평균 평점 : {item.Rate}/5</Text>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>-</Text>
    </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#0C579F',
  },
  button: {
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    marginBottom: 30,
    borderRadius: 35,
    borderColor: '#0C579F',
  },
});

export default CurrentPeople;
