import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a test</Text>
        <View style={styles1.box} />
        <Text style={styles.text}>This is JooChan!</Text>

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
  text: {
    backgroundColor: 'lightgrey',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
})

// import React, { Component } from 'react'
// import { AppRegistry, View, Text, StyleSheet } from 'react-native'

// class Counter extends Component {

//   state = {count: 0}

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({count: this.state.count + 1})
//     }, 1000)
//   }

//   render() {
//     const {count} = this.state
//     const {color, size} = this.props

//     return (
//       <Text style={{color, fontSize: size}}>
//         {count}
//       </Text>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Counter color={'lightblue'} size={16} />
//         <Counter color={'skyblue'} size={32} />
//         <Counter color={'steelblue'} size={80} />
//         <Counter color={'darkblue'} size={140} />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })

// AppRegistry.registerComponent('App', () => App)
