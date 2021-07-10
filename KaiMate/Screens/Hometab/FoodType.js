import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function FoodType({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('Detail')}>
          <Image
            style={styles.iconImage}
            source={require('../../image/krFoodIcon.jpg')}
          />
          <Text style={styles.iconText}>한식</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('Detail')}>
          <Image
            style={styles.iconImage}
            source={require('../../image/cnFoodIcon.jpg')}
          />
          <Text style={styles.iconText}>중식</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('Detail')}>
          <Image
            style={styles.iconImage}
            source={require('../../image/jpFoodIcon.jpg')}
          />
          <Text style={styles.iconText}>일식</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('Detail')}>
          <Image
            style={styles.iconImage}
            source={require('../../image/gbFoodIcon.jpg')}
          />
          <Text style={styles.iconText}>양식</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('Detail')}>
          <Image
            style={styles.iconImage}
            source={require('../../image/ngFoodIcon.jpg')}
          />
          <Text style={styles.iconText}>야식/분식</Text>
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
  iconContainer: {
    width: '70%',
    height: '15%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconBtn: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginRight: 10,
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
  iconText: {
    alignSelf: 'center',
    fontFamily: 'BMJUA_ttf',
  },
});
