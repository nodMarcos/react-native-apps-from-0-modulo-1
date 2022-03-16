import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, StatusBar} from 'react-native';
import Pessoas from './src/Pessoas';
 
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1,name: 'Marquin', age: 22, email: 'marquin@gmail.com'},
        {id: 2,name: 'Joao', age: 25, email: 'joao@gmail.com'},
        {id: 3,name: 'Henrique', age: 42, email: 'henrique@gmail.com'},
        {id: 4,name: 'Jorge', age: 32, email: 'jorge@gmail.com'},
        {id: 5,name: 'Alberto', age: 32, email: 'alberto@gmail.com'}
      ]
    }
  }

  render(){

    return (
      <View style={styles.container}>
      <StatusBar hidden/>

       <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
          <Pessoas data={item} />
        }
       />
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