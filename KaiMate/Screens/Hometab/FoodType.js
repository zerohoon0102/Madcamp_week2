import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList,
  StatusBar,
  Image,
} from 'react-native';
import CurrentPeople from '../components/CurrentPeople';

const data = [
  {
    title: '열려있는 그룹',
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

export default function FoodType({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchTch}
          onPress={() => navigation.navigate('Search')}>
          <Text style={styles.searchText}>가게 검색 >></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.topTab}>
          <TouchableOpacity style={styles.topTabBtn} under>
            <Image
              style={styles.iconImage}
              source={require('../../image/krFoodIcon.jpg')}
            />
            <Text style={styles.topTabText}>한식</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topTabBtn}>
            <Image
              style={styles.iconImage}
              source={require('../../image/cnFoodIcon.jpg')}
            />
            <Text style={styles.topTabText}>중식</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topTabBtn}>
            <Image
              style={styles.iconImage}
              source={require('../../image/jpFoodIcon.jpg')}
            />
            <Text style={styles.topTabText}>일식</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topTabBtn}>
            <Image
              style={styles.iconImage}
              source={require('../../image/gbFoodIcon.jpg')}
            />
            <Text style={styles.topTabText}>양식</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topTabBtn}>
            <Image
              style={styles.iconImage}
              source={require('../../image/ngFoodIcon.jpg')}
            />
            <Text style={styles.topTabText}>야식/분식</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <SectionList
            sections={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <CurrentPeople items={item} />}
            renderSectionHeader={({section: {title}}) => (
              <Text style={{fontSize: 30, fontFamily: 'BMJUA_ttf'}}>
                {title}
              </Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  searchTch: {
    width: '20%',
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#0C579F',
    borderRadius: 20,
    alignItems: 'center',
  },
  searchText: {
    fontSize: 12,
    fontFamily: 'BMJUA_ttf',
    color: 'white',
  },
  groupContainer: {
    width: '100%',
    height: '90%',
  },
  iconImage: {
    width: '70%',
    height: '70%',
  },
  topTab: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    backgroundColor: 'gray',
  },
  topTabBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 1,
    marginBottom: 1,
    marginTop: 1,
  },
  topTabText: {
    fontFamily: 'BMJUA_ttf',
  },
  listContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 30,
  },
});
