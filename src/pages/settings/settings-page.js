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
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { PROVIDER_GOOGLE } from 'react-native-maps-directions';
import { request, PERMISSIONS } from 'react-native-permissions';
import { useEffect, useState, useContext, } from 'react';
import GlobalContext from '../../context/global-context';
navigator.geolocation = require('@react-native-community/geolocation');
import { getGeoLocation, getManeuvers, listenToLocationChange } from '../../../locationService';
import {
  requestLocationPermission,
  getCurrentPosition,
} from '../../services/gmaps.service';


export function SettingsScreen() {
  const [didMount, setDidMount] = useState(false);


  let GOOGLE_MAPS_APIKEY = 'AIzaSyDYNU9mpalnAUDdGMlml3E7ZUwNCxQPrjM';
  const globalContext = useContext(GlobalContext);
  useEffect(() => {
    requestLocationPermission();
    setDidMount(true);
    return () => setDidMount(false);
  }, []);


  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('android: ' + response);
      if (response === 'granted') {
        // getCurrentPosition((position) => {
        //   globalContext.setOriginByCoordinates(position)
        // })
        listenToLocationChange((position) => {
          console.log("position " + JSON.stringify(position))
          globalContext.setOriginByCoordinates(position);
        })
      }
    } else {
    }
  };


  if (globalContext) {
    var destCoods = globalContext.getDestination() ? { latitude: globalContext.getDestination().lat, longitude: globalContext.getDestination().lng } : {}
    var originCoods = globalContext.getOrigin() ? { latitude: globalContext.getOrigin().lat, longitude: globalContext.getOrigin().lng } : {}
  }



  if (!didMount) { return null }

  return (

    globalContext.getDestination() ?
      <Text>Origin: {globalContext.getOrigin() ? `${globalContext.getOrigin().lng} - ${globalContext.getOrigin().lat}` : 'loading'} ''
          dest: {globalContext.getDestination() ? `${globalContext.getDestination().lng} - ${globalContext.getDestination().lat}` : 'loading'}</Text>

      :
      <MapView
        style={{
          // width:400,
          // height:600,
          flex: 1,
        }}

        showsUserLocation={true}
        loadingEnabled={true}
        initialRegion={{
          //==============================================================================
          //should enter the current location latitude and current location longitude
          //==============================================
          latitude: globalContext.getOrigin().lat || 0.0,
          longitude: globalContext.getDestination().lng || 0.0,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
        provider={PROVIDER_GOOGLE}>


        <Marker coordinate={destCoods} />
        <MapViewDirections
          // origin={setCurrentLatitude,setCurrentLongitude}
          // destination={destination}
          origin={originCoods} // refer origin comment 
          destination={destCoods}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="#0558B4"
        />
      </MapView>
  );
}
