import React, {Component} from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
   
  }

  render(){

    return (
      <View style={styles.container}>
        <StatusBar hidden/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})



export default App;