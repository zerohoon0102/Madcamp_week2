import React from 'react';
import {
  StyleSheet,
  SectionList,
  FlatList,
  Text,
  View,
  StatusBar,
} from 'react-native';
import CurrentPeople from './components/CurrentPeople';

const data = [
  {
    title: '참여중인 사람',

    data: [
      {
        Restaurant: '엽떡',
        Buildin: '인사동',
        Time: '17:30',
        Current: '2',
        Total: '3',
        Rate: '4.5',
      },
      {
        Restaurant: '신떡',
        Buildin: '신학관',
        Time: '19:30',
        Current: '2',
        Total: '5',
        Rate: '4.8',
      },
    ],
  },
  {
    title: 'History',

    data: [
      {
        Restaurant: '엽떡',
        Buildin: '인사동',
        Time: '17:30',
        Current: '2',
        Total: '3',
        Rate: '4.5',
      },
      {
        Restaurant: '배떡',
        Buildin: '나래관',
        Time: '18:00',
        Current: '3',
        Total: '4',
        Rate: '4.0',
      },
      {
        Restaurant: '응떡',
        Buildin: '매점',
        Time: '18:30',
        Current: '5',
        Total: '5',
        Rate: '4.7',
      },
      {
        Restaurant: '신떡',
        Buildin: '신학관',
        Time: '19:30',
        Current: '2',
        Total: '5',
        Rate: '4.8',
      },
    ],
  },
];

export default function People() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <CurrentPeople items={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontSize: 30, fontFamily: 'BMJUA_ttf'}}>{title}</Text>
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
