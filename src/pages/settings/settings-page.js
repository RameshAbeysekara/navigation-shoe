import * as React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps-directions';

export function SettingsScreen() {
  let GOOGLE_MAPS_APIKEY = 'AIzaSyDYNU9mpalnAUDdGMlml3E7ZUwNCxQPrjM';
  let origin = {latitude: 6.9769, longitude: 80.052843};
  let destination = {latitude: 6.970989, longitude: 80.056788};
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider={PROVIDER_GOOGLE}
      >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView>
  );
}
