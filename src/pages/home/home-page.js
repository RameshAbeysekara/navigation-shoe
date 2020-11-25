import * as React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';
import { useState, useContext, useEffect } from 'react';
import { getGeoLocation, getManeuvers, listenToLocationChange } from '../../../locationService';
import GlobalContext from '../../context/global-context';
import {
  requestLocationPermission,
  getCurrentPosition,
} from '../../services/gmaps.service';

export function HomeScreen({ Map }) {
  const navigation = useNavigation();
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    const isGranted = requestLocationPermission();
    //Todo: let user know that app needs location permissions and retry.
    if (isGranted) {
      getCurrentPosition(globalContext.setOriginByCoordinates);
    }
  }, []);

  //  this is for testing. replace in production
  const TestLocations = () => {
    if (globalContext) {
      return (
        <>
          <Text>Origin: {globalContext.getOrigin() ? `${globalContext.getOrigin().lng} - ${globalContext.getOrigin().lat}` : 'loading'}</Text>
          <Text>Destination: {globalContext.getDestination() ? globalContext.getDestination().name : 'loading'}</Text>
        </>
      )
    }
  }
  var destinationInput;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          borderRadius: 10,
          borderColor: '#0558B4',
          borderWidth: 1,
          width: 200,
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <TextInput
          style={{
            height: 40,
          }}
          placeholder="Destination"
          onChangeText={(val) => destinationInput = val}
        />
      </View>

      <View style={{ width: 200 }}>
        {/* <Button
          onPress={() => navigation.navigate("Map")}
          
          title="Go"
          color="#0558B4"
        /> */}
        <Button
          title="Go "
          color="#0558B4"
          onPress={() => {
            globalContext.setDestination(destinationInput);
            navigation.navigate('Map');
          }}
        />
      </View>
      <TestLocations></TestLocations>
    </View>
  );

  const styles = StyleSheet.cre;
}

// function HomeScreen  ()  {
//   return <Text>Hello, I am your cat!</Text>;
// };

// export default HomeScreen;
