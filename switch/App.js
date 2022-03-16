import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      status: false
    }
  }

  render(){  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Switch 
          value={this.state.status}
          onValueChange={(value) => this.setState({status: value})}
          thumbColor="#ff0000"
        />

        <Text style={{textAlign: 'center', fontSize: 30}}>
          {(this.state.status) ? "Ativo" : "Inativo"}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    
  },
});
