import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function FoodDetail({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topTab}>
        <TouchableOpacity style={styles.topTabBtn}>
          <Text style={styles.topTabText}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topTabBtn}>
          <Text style={styles.topTabText}>Group</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  topTab: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    backgroundColor: 'gray',
  },
  topTabBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 1,
    marginBottom: 1,
  },
  topTabText: {
    fontFamily: 'BMJUA_ttf',
  },
});
