import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  PermissionsAndroid,
  AppRegistry,
} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {PROVIDER_GOOGLE} from 'react-native-maps-directions';
import {request, PERMISSIONS} from 'react-native-permissions';
import {useEffect,useState} from 'react';

navigator.geolocation = require('@react-native-community/geolocation');

export function SettingsScreen() {
  let GOOGLE_MAPS_APIKEY = 'AIzaSyDYNU9mpalnAUDdGMlml3E7ZUwNCxQPrjM';
  
  let origin = {latitude:6.987444, longitude: 80.058133}; 
  let destination = {latitude: 6.970989, longitude: 80.056788};




  // const requestLocationPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  //     console.log('android: ' + response);
  //     if (response === 'granted') {
  //       locateCurrentPosition();
  //     }
  //   } else {
  //   }
  // };

  // let [currentLongitude, setCurrentLongitude] = useState(0.0);
  // let [currentLatitude, setCurrentLatitude] = useState(0.0);

// get it to service 

  // getting my current location
  // const locateCurrentPosition = () => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(JSON.stringify(position));

  //       //need to get lat , long of my current location for the initialregion (line 93) below
  //       let currentLongitude =position.coords.longitude;
  //       let currentLatitude = position.coords.latitude;
  //     //Setting Longitude state
  //     setCurrentLongitude(currentLongitude);
        
  //     //Setting Longitude state
  //     setCurrentLatitude(currentLatitude);
  
  //     },
  //     (error) => alert(error.message),
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 20000,
  //       maximumAge: 1000,
  //     },
  //   );
  // };


  return (
    <MapView
      style={{
        // width:400,
        // height:600,
        flex: 1,
      }}
   
      showsUserLocation={true}
      loadingEnabled={true}
      initialRegion={{
        //should enter the current location latitude and current location longitude
        latitude: 6.987444,
        longitude: 80.058133,
        latitudeDelta: 0.07,
        longitudeDelta: 0.07,
      }}
      provider={PROVIDER_GOOGLE}>
    

      <Marker coordinate={destination} />
      <MapViewDirections
        // origin={setCurrentLatitude,setCurrentLongitude}
        // destination={destination}
        origin={origin} // refer origin comment 
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="#0558B4"
      />
    </MapView>
  );
}
