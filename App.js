import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      input: ''
    }
    
    this.logIn = this.logIn.bind(this)
  }

  logIn() {
    if(this.state.input === ''){
      alert('Digite seu nome!');
      return;
    }
    this.setState({name: 'Bem vindo: ' + this.state.input})
  }

  render(){

    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({input: text})}
        />

        <Button title='Entrar' onPress={this.logIn}/>

        <Text style={styles.text}>
          {this.state.name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth:1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 25
  }

})



export default App;