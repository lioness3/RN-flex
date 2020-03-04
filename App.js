import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30,flexDirection: 'row', width:'100%', justifyContent: 'space-around'}}>
      <View style={{}}>
        <TextInput placeholder="Goal" style={{borderColor: 'black', borderWidth: 2, padding:10, flex: 2}}/>
          <Button title="ADD" />
      </View>
      <View style={{}}>
        <TextInput placeholder="Goal" style={{borderColor: 'black', borderWidth: 2, padding:10, flex: 1}}/>
          <Button title="ADD" />
      </View>
      <View style={{}}>
        <TextInput placeholder="Goal" style={{borderColor: 'black', borderWidth: 2, padding:10}}/>
          <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding:40,
  },
});
