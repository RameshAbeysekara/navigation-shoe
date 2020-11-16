import * as React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native';

export function HomeScreen() {
  return (
    
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <View style={{
        borderRadius:10,
        borderColor:'#0558B4',
        borderWidth:1,
        width:200,
        alignItems:'center',
        marginBottom:8}}>
      <TextInput style={{
        height: 40}} 
        placeholder="From " />
      </View>

      <View  style={{
        borderRadius:10,
        borderColor:'#0558B4',
        borderWidth:1,
        width:200,
        alignItems:'center',
        marginBottom:30}}>
      <TextInput style={{
            height: 40
         }}
        placeholder="To "
      />
      </View>
         
    <View style={{width:200}} >
      <Button
        title="Go"
        color="#0558B4"
        style={{
          width:200,
          height:40
        }}
      />
    </View>
    </View>
  );

  const styles= StyleSheet.cre
}

// function HomeScreen  ()  {
//   return <Text>Hello, I am your cat!</Text>;
// };

// export default HomeScreen;
