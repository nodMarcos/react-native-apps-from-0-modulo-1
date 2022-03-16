import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 50
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(v) => this.setState({value: v})}
          value={this.state.value}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor='#00ff00'
        >
        </Slider>

        <Text style={{textAlign: 'center', fontSize: 30}}>
          Você tem {this.state.value.toFixed(0)} kg
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
});
