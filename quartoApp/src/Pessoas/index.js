import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

class Pessoas extends Component {
  render() {
    return (
      <View style={styles.textArea}>
        <Text style={styles.text}>Nome: {this.props.data.name}</Text>
        <Text style={styles.text}>Idade: {this.props.data.age}</Text>
        <Text style={styles.text}>E-mail: {this.props.data.email}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textArea: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  text: {
    color: '#fff',
    fontSize:20
  }
})

export default Pessoas