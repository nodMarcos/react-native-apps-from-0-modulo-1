import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Modal, Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  render(){
    return (
      <View style={{backgroundColor: '#292929', width:"100%", height: 350, borderRadius:15}}>
        <Text style={{paddingTop: 15, color: '#FFFFFF', fontSize:28, textAlign: 'center'}}>Welcome!</Text>
        <Button title="Sair" onPress={this.props.logout}/>
      </View>
    );
}}

