import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Modal, Button, StyleSheet, Text, View } from 'react-native';
import Login from './src/Login'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    this.setState({visible: true});
  }

  logout(visible) {
    this.setState({visible: visible});
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button title="Entrar" onPress={this.login}/>

        <Modal transparent={true} animationType='fade' visible={this.state.visible}>
          <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Login logout={() => this.logout(false)}/>
          </View>
        </Modal>
      </View>
    );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
