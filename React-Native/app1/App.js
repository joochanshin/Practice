import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';

export default class App extends React.Component {
  getUserLocationHandler = () => {
    console.log('Pressed the button');
    navigator.geoLocation.getCurrentLocation(position =>{
      console.log(position);
    }, err =. console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
