import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
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
          <Text style={styles.topTabText}>Store!!</Text>
        </TouchableOpacity>
      </View>
      <MapView
        style={{width: '100%', height: '80%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.55526,
          longitude: 126.97082,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
    fontSize: 20,
  },
});
