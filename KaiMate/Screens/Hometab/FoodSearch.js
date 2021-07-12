import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Toast from 'react-native-toast-message';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

navigator.geolocation = require('react-native-geolocation-service');

export default function FoodSearch({navigation}) {
  const [lat, setLat] = useState(36.36311);
  const [lng, setLng] = useState(127.35489);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [rating, setRating] = useState('');
  const [storeType, setStoreType] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details.rating);
            // 'details' is provided when fetchDetails = true
            setLat(details.geometry.location.lat);
            setLng(details.geometry.location.lng);
            setName(data.structured_formatting.main_text);
            setAddress(data.structured_formatting.secondary_text);
            if (details.rating === undefined) {
              setRating('평점 정보 없음.');
            } else {
              setRating(details.rating);
            }
            if (data.types[0] === 'restaurant') {
              setStoreType(data.types[0]);
            }
          }}
          query={{
            key: 'AIzaSyDiC5nL8Gz_JqHoKgRbyBsGt7InekQRcmE',
            language: 'ko',
            components: 'country:kr',
          }}
          nearbyPlacesAPI="GoogleMapsPlacesSearch"
          currentLocation={true}
          currentLocationLabel="주변 가게 정보"
          style={styles.autoComplete}
        />
      </View>
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0322,
        }}>
        <Marker
          coordinate={{latitude: lat, longitude: lng}}
          title={name}
          description={address}
          onCalloutPress={e => {
            if (name !== '') {
              navigation.replace('Groupadd', {
                storeName: name,
                storeAdd: address,
                storeRating: rating,
              });
            } else if (storeType === '') {
              Toast.show({
                text1: '음식점이 아니므로 그룹에 추가할 수 없습니다.',
              });
            }
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
  },
  viewContainer: {
    backgroundColor: 'white',
    position: 'relative',
    height: '40%',
    zIndex: 3,
    borderWidth: 1,
    margin: 5,
    borderRadius: 20,
  },
  autoComplete: {
    backgroundColor: 'white',
    position: 'relative',
    height: '40%',
    zIndex: 3,
    borderWidth: 1,
    margin: 2,
    borderRadius: 20,
  },
  mapView: {
    position: 'relative',
    height: '55%',
    zIndex: 2,
  },
});
