import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CurrentPeople = ({items}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Res_Buildin}>
        <Text style={styles.Res_Builidin_text}>
          {items.Restaurant}/{items.Buildin}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.context}>
        <View style={styles.tab1}>
          <Text>{items.Time}</Text>
          <Text>주문 예정</Text>
        </View>
        <View style={styles.tab2}>
          <Text>모인사람</Text>
          <Text>
            {items.Current}/{items.Total}
          </Text>
        </View>
        <View style={styles.tab3}>
          <Icon name="people-circle-outline">별점평균</Icon>
          <Text>{items.Rate}/5</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderWidth: 1,
  },

  Res_Buildin: {
    flexDirection: 'row',
    flex: 3,
    fontSize: 20,
    borderWidth: 1,
    borderBottomColor: '#0C579F',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
  },
  Res_Builidin_text: {
    flex: 3,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  context: {
    flexDirection: 'row',
  },
  tab1: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderRightColor: '#0C579F',
    borderLeftColor: 'white',
    borderBottomColor: 'white',
    borderTopColor: 'white',
  },
  tab2: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderRightColor: '#0C579F',
    borderLeftColor: 'white',
    borderBottomColor: 'white',
    borderTopColor: 'white',
  },
  tab3: {
    flex: 1,
    alignItems: 'center',
  },
  IconImage: {
    width: 10,
    height: 10,
    alignItems: 'center',
  },
  text: {
    flex: 3,
    fontSize: 30,
    textAlign: 'center',
    color: '#0C579F',
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 100,
    marginBottom: 10,
    marginRight: 4,
  },
  buttonText: {
    fontSize: 50,
    textAlign: 'center',
    color: '#0C579F',
    marginBottom: 10,
  },
});

export default CurrentPeople;
