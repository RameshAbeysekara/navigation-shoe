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
import {useEffect,useState, useContext} from 'react';
import GlobalContext from '../../context/global-context';

navigator.geolocation = require('@react-native-community/geolocation');

export function SettingsScreen() {
  let GOOGLE_MAPS_APIKEY = 'AIzaSyDYNU9mpalnAUDdGMlml3E7ZUwNCxQPrjM';

  const gc = useContext(GlobalContext);
  const Map = () => {
    if (gc.getDestination()) {
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
            latitude: gc.getOrigin().lat,
            longitude: gc.getOrigin().lng,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}
          provider={PROVIDER_GOOGLE}>
        
    
          <Marker coordinate={{
              latitude: gc.getDestination().lat,
              longitude: gc.getDestination().lng            
          }} />
          <MapViewDirections
            origin={{
              latitude: gc.getOrigin().lat,
              longitude: gc.getOrigin().lng,
            }} 
            destination={{
              latitude: gc.getDestination().lat,
              longitude: gc.getDestination().lng
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="#0558B4"
          />
        </MapView>
      );
    }
    return (
      <Text>Loading...</Text>
    )
  }

  return (
    <Map></Map>
  );
}
