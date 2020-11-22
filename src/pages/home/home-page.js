import * as React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';


export function HomeScreen( {Map}) {

  const navigation = useNavigation();
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
          placeholder="Start"
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
    </View>
  );

  const styles = StyleSheet.cre;
}

// function HomeScreen  ()  {
//   return <Text>Hello, I am your cat!</Text>;
// };

// export default HomeScreen;
