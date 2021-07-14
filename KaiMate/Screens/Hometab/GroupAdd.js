import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ToastAndroid,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
//import {ModalPicker} from '../components/ModalPicker';
import Icon from 'react-native-vector-icons/Ionicons';

export default function GroupAdd({route, navigation}) {
  const {storeName, storeAdd, storeRating} = route.params;

  const [chooseData, setchooseData] = useState('종류');
  const [textColor, settextColor] = useState('black');
  const [leastPerson, setLeastPerson] = useState(0);
  const [deliveryPlace, setDeliveryPlace] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [foodType, setFoodType] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputTabBar}>
        <Text style={styles.inputTabTitle}>그룹 추가</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputMenu}>가게 이름 : {storeName}</Text>
        <Text style={styles.inputMenu}>가게 주소 : {storeAdd}</Text>
        <View style={styles.typeContainer}>
          <Text style={styles.inputMenu}>음식 종류 선택 :</Text>

          <TouchableOpacity
            style={styles.select}
            onPress={() => setFoodType('한식')}>
            <Text style={styles.text}>한식</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.select}
            onPress={() => setFoodType('중식')}>
            <Text style={styles.text}>중식</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.select}
            onPress={() => setFoodType('일식')}>
            <Text style={styles.text}>일식</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.select}
            onPress={() => setFoodType('양식')}>
            <Text style={styles.text}>양식</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.select}
            onPress={() => setFoodType('야식/분식')}>
            <Text style={styles.textk}>야식/분식</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputMenuContainer}>
          <Text style={styles.inputMenuText}>배달 건물 : </Text>
          <TextInput
            placeholder="건물을 입력하세요. ex) 사랑관 "
            placeholderTextColor="gray"
            style={styles.inputMenuEdit}
            onChangeText={text => setDeliveryPlace(text)}></TextInput>
        </View>
        <View style={styles.inputMenuContainer}>
          <Text style={styles.inputMenuText}>모집 인원 : </Text>
          <TextInput
            placeholder="인원을 입력해주세요. ex) 4 "
            placeholderTextColor="gray"
            style={styles.inputMenuEdit}
            onChangeText={text => setLeastPerson(parseInt(text))}></TextInput>
        </View>
        <View style={styles.inputMenuContainer}>
          <Text style={styles.inputMenuText}>주문 예정 시간 : </Text>
          <TextInput
            placeholder="주문 예정 시간을 입력해주세요. ex) hh/mm "
            placeholderTextColor="gray"
            style={styles.inputMenuEdit}
            onChangeText={text => setDeliveryTime(text)}></TextInput>
        </View>

        <Text style={styles.inputMenu}>가게 평점 : {storeRating}</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchTch}
          onPress={() => {
            if (
              leastPerson === 0 ||
              deliveryTime === '' ||
              foodType === '' ||
              deliveryPlace === ''
            ) {
              ToastAndroid.showWithGravity(
                '입력되지 않은 정보가 존재합니다.',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
            } else {
              fetch('http://192.249.18.122:80/addGroup', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  storeName: storeName,
                  storeAdd: storeAdd,
                  leastPerson: leastPerson,
                  deliveryPlace: deliveryPlace,
                  deliveryTime: deliveryTime,
                  foodType: foodType,
                  storeRating: storeRating,
                }),
              })
                .then(res => console.log('add Group ING ....'))
                .catch(error => console.log('error', error));
              navigation.goBack();
            }
          }}>
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
    fontSize: 40,
    fontFamily: 'BMJUA_ttf',
  },
  inputContainer: {
    flex: 10,
    paddingTop: '10%',
  },
  typeContainer: {
    flexDirection: 'row',
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
  inputMenuEdit_edit: {
    flexDirection: 'row',
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
  droppicker: {
    flexDirection: 'row',
    //marginLeft: '10',
  },
  select: {
    //flexDirection: 'row',
    marginLeft: 5,
    width: 48,
    height: 45,
    borderWidth: 1,
    borderRadius: 100,
  },
  text: {
    marginLeft: 11,
    marginTop: 14,
    fontFamily: 'BMJUA_ttf',
    color: 'black',
  },
  textk: {
    marginLeft: 10,
    marginTop: 8,
    fontFamily: 'BMJUA_ttf',
    color: 'black',
  },
  arrow: {
    marginLeft: 90,
    marginTop: 3,
  },
  button: {
    width: 15,
    height: 10,
  },
});
