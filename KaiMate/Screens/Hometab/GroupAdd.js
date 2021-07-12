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
import {TextInput} from 'react-native-gesture-handler';

export default function GroupAdd({route, navigation}) {
  const {storeName, storeAdd, storeRating} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.inputTabBar}>
        <Text style={styles.inputTabTitle}>그룹 추가</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputMenu}>가게 이름 : {storeName}</Text>
        <Text style={styles.inputMenu}>가게 주소 : {storeAdd}</Text>
        <View style={styles.inputMenuContainer}>
          <Text style={styles.inputMenuText}>배달 건물 : </Text>
          <TextInput
            placeholder="건물을 입력하세요. ex) 사랑관 "
            placeholderTextColor="gray"
            style={styles.inputMenuEdit}></TextInput>
        </View>
        <View style={styles.inputMenuContainer}>
          <Text style={styles.inputMenuText}>모집 인원 : </Text>
          <TextInput
            placeholder="인원을 입력해주세요. ex) 4 "
            placeholderTextColor="gray"
            style={styles.inputMenuEdit}></TextInput>
        </View>
        <View style={styles.inputMenuContainer}>
          <Text style={styles.inputMenuText}>주문 예정 시간 : </Text>
          <TextInput
            placeholder="주문 예정 시간을 입력해주세요. ex) hh/mm "
            placeholderTextColor="gray"
            style={styles.inputMenuEdit}></TextInput>
        </View>
        <Text style={styles.inputMenu}>가게 평점 : {storeRating}</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchTch}
          onPress={() => navigation.goBack()}>
          <Text style={styles.searchText}>추가</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchTch}
          onPress={() => navigation.replace('Search')}>
          <Text style={styles.searchText}>취소</Text>
        </TouchableOpacity>
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
  inputTabBar: {
    flex: 1,
    width: '98%',
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTabTitle: {
    fontSize: 30,
    fontFamily: 'BMJUA_ttf',
  },
  inputContainer: {
    flex: 10,
    paddingTop: '10%',
  },
  inputMenuContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'flex-end',
  },
  inputMenu: {
    fontSize: 15,
    fontFamily: 'BMJUA_ttf',
    marginVertical: 5,
    alignSelf: 'center',
  },
  inputMenuText: {
    fontSize: 15,
    fontFamily: 'BMJUA_ttf',
    marginVertical: 5,
  },
  inputMenuEdit: {
    fontSize: 15,
    fontFamily: 'BMJUA_ttf',
    borderWidth: 1,
    width: '70%',
    borderColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    flex: 1,
  },
  searchTch: {
    width: '20%',
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#0C579F',
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  searchText: {
    fontSize: 12,
    fontFamily: 'BMJUA_ttf',
    color: 'white',
  },
});
