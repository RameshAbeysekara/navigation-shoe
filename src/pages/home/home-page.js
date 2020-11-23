import * as React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';
import {useState, useContext} from 'react';
import { getGeoLocation, getManeuvers, listenToLocationChange } from '../../../locationService';
import GlobalContext from '../../context/global-context';

export function HomeScreen( {Map}) {
  const navigation = useNavigation();
  const globalContext = useContext(GlobalContext)

  const TestLocations = () => {
    if (globalContext) {
      return (
        <>
        <Text>Origin: {globalContext.getOrigin() ? globalContext.getOrigin().name : 'loading'}</Text>
        <Text>Destination: {globalContext.getDestination() ? globalContext.getDestination().name: 'loading'}</Text>
        </>
      )
    }
  }
  
  //=====need to enter user entered destination value ==================================================================================================
  let geoPoint = getGeoLocation('sri Lnka');

   //====={ orgin (my current location )}========{destination }=======================
  let manuevers = getManeuvers({ lat: 37.7699298, lng: -122.4469157 }, { lat: 37.7683909618184, lng: -122.51089453697205 });
  
// updating d=current locations
  listenToLocationChange((data) => {
    // setLocation(data)
  })

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
          placeholder="My current Location"
          onChangeText={(Val) => globalContext.setOrigin(Val)}
        />
      </View>

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
          onChangeText={(Val) => globalContext.setDestination(Val) }
        />
      </View>

      <View style={{width: 200}}>
        {/* <Button
          onPress={() => navigation.navigate("Map")}
          
          title="Go"
          color="#0558B4"
        /> */}
      <Button
        title="Go "
        color="#0558B4"
        onPress={() => navigation.navigate('Map')}
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
