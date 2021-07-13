import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList,
  StatusBar,
  Image,
  ToastAndroid,
  SectionListData,
} from 'react-native';
import CurrentPeople from '../components/CurrentPeople';

const data = [
  {
    title: '열려있는 그룹',
    data: [],
  },
];

export default function FoodType({navigation}) {
  const [foodType, setFoodType] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState([{title: '열려있는 그룹', data: []}]);
  let dataList = [];
  fetch('http://192.249.18.122:80/getGroup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      foodType: '한식',
    }),
  })
    .then(res => res.json())
    .then(json => {
      if (json.foodType === 'no Info') {
        ToastAndroid.showWithGravity(
          '존재하는 그룹이 없습니다.',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        dataList = [];
        for (let i = 0; i < json.length; i++) {
          dataList.push({
            Restaurant: json[i].storeName,
            Buildin: json[i].deliveryPlace,
            Current: String(json[i].curPerson),
            Total: String(json[i].leastPerson),
            Rate: json[i].storeRating,
          });
        }
        setData([{title: '열려있는 그룹', data: dataList}]);
      }
    })
    .catch(error => console.log('error', error));
  console.log(data.data);
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
          <TouchableOpacity
            style={styles.topTabBtn}
            onPress={() => {
              fetch('http://192.249.18.122:80/getGroup', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  foodType: '한식',
                }),
              })
                .then(res => res.json())
                .then(json => {
                  if (json.foodType === 'no Info') {
                    ToastAndroid.showWithGravity(
                      '존재하는 그룹이 없습니다.',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                    );
                  } else {
                    dataList = [];
                    for (let i = 0; i < json.length; i++) {
                      dataList.push({
                        Restaurant: json[i].storeName,
                        Buildin: json[i].deliveryPlace,
                        Current: String(json[i].curPerson),
                        Total: String(json[i].leastPerson),
                        Rate: json[i].storeRating,
                      });
                    }
                    data.data = dataList;
                    setData([{title: '열려있는 그룹', data: dataList}]);
                  }
                })
                .catch(error => console.log('error', error));
            }}>
            <Image
              style={styles.iconImage}
              source={require('../../image/krFoodIcon.jpg')}
            />
            <Text style={styles.topTabText}>한식</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topTabBtn}
            onPress={() => {
              fetch('http://192.249.18.122:80/getGroup', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  foodType: '중식',
                }),
              })
                .then(res => res.json())
                .then(json => {
                  if (json.foodType === 'no Info') {
                    ToastAndroid.showWithGravity(
                      '존재하는 그룹이 없습니다.',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                    );
                  } else {
                    dataList = [];
                    for (let i = 0; i < json.length; i++) {
                      dataList.push({
                        Restaurant: json[i].storeName,
                        Buildin: json[i].deliveryPlace,
                        Current: String(json[i].curPerson),
                        Total: String(json[i].leastPerson),
                        Rate: json[i].storeRating,
                      });
                    }
                    data.data = dataList;
                    setData([{title: '열려있는 그룹', data: dataList}]);
                  }
                })
                .catch(error => console.log('error', error));
            }}>
            <Image
              style={styles.iconImage}
              source={require('../../image/cnFoodIcon.jpg')}
            />
            <Text style={styles.topTabText}>중식</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topTabBtn}
            onPress={() => {
              fetch('http://192.249.18.122:80/getGroup', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  foodType: '일식',
                }),
              })
                .then(res => res.json())
                .then(json => {
                  if (json.foodType === 'no Info') {
                    ToastAndroid.showWithGravity(
                      '존재하는 그룹이 없습니다.',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                    );
                  } else {
                    dataList = [];
                    for (let i = 0; i < json.length; i++) {
                      dataList.push({
                        Restaurant: json[i].storeName,
                        Buildin: json[i].deliveryPlace,
                        Current: String(json[i].curPerson),
                        Total: String(json[i].leastPerson),
                        Rate: json[i].storeRating,
                      });
                    }
                    data.data = dataList;
                    setData([{title: '열려있는 그룹', data: dataList}]);
                  }
                })
                .catch(error => console.log('error', error));
            }}>
            <Image
              style={styles.iconImage}
              source={require('../../image/jpFoodIcon.jpg')}
            />
            <Text style={styles.topTabText}>일식</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topTabBtn}
            onPress={() => {
              fetch('http://192.249.18.122:80/getGroup', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  foodType: '양식',
                }),
              })
                .then(res => res.json())
                .then(json => {
                  if (json.foodType === 'no Info') {
                    ToastAndroid.showWithGravity(
                      '존재하는 그룹이 없습니다.',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                    );
                  } else {
                    dataList = [];
                    for (let i = 0; i < json.length; i++) {
                      dataList.push({
                        Restaurant: json[i].storeName,
                        Buildin: json[i].deliveryPlace,
                        Current: String(json[i].curPerson),
                        Total: String(json[i].leastPerson),
                        Rate: json[i].storeRating,
                      });
                    }
                    data.data = dataList;
                    setData([{title: '열려있는 그룹', data: dataList}]);
                  }
                })
                .catch(error => console.log('error', error));
            }}>
            <Image
              style={styles.iconImage}
              source={require('../../image/gbFoodIcon.jpg')}
            />
            <Text style={styles.topTabText}>양식</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topTabBtn}
            onPress={() => {
              fetch('http://192.249.18.122:80/getGroup', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  foodType: '야식/분식',
                }),
              })
                .then(res => res.json())
                .then(json => {
                  if (json.foodType === 'no Info') {
                    ToastAndroid.showWithGravity(
                      '존재하는 그룹이 없습니다.',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                    );
                  } else {
                    dataList = [];
                    for (let i = 0; i < json.length; i++) {
                      dataList.push({
                        Restaurant: json[i].storeName,
                        Buildin: json[i].deliveryPlace,
                        Current: String(json[i].curPerson),
                        Total: String(json[i].leastPerson),
                        Rate: json[i].storeRating,
                      });
                    }
                    data.data = dataList;
                    setData([{title: '열려있는 그룹', data: dataList}]);
                  }
                })
                .catch(error => console.log('error', error));
            }}>
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
