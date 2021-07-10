import React from 'react';
import {StyleSheet, FlatList, Text, View, StatusBar} from 'react-native';
import CurrentPeople from './components/CurrentPeople';

const data = [
  {
    id: '1',
    Restaurant: '엽떡',
    Buildin: '인사동',
    Time: '17:30',
    Current: '2',
    Total: '3',
    Rate: '4.5',
  },
  {
    id: '2',
    Restaurant: '배떡',
    Buildin: '나래관',
    Time: '18:00',
    Current: '3',
    Total: '4',
    Rate: '4.0',
  },
  {
    id: '3',
    Restaurant: '응떡',
    Buildin: '매점',
    Time: '18:30',
    Current: '5',
    Total: '5',
    Rate: '4.7',
  },
  {
    id: '4',
    Restaurant: '신떡',
    Buildin: '신학관',
    Time: '19:30',
    Current: '2',
    Total: '5',
    Rate: '4.8',
  },
];

export default function People() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>참여 중인 파티</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CurrentPeople style={styles.people} items={item} />
        )}
      />
      <Text style={styles.header}>참여 중인 파티</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CurrentPeople style={styles.people} items={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 30,
  },
});
