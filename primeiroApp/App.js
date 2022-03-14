import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      phrase:'"'+'Lorem ipsum dolor sit amet consectetur adipisicing elit.'+'"',
      img: require('./src/biscoito.png')
    }

    this.phrases = [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Asperiores, rerum eveniet magnam corrupti quos veritatis repellat in repellendus nobis porro.",
      "Harum eos voluptatum! Eos minima, deleniti suscipit unde ad vero.",
      "Omnis dolorem , sit amet consectetur adipisicing elit. ",
      "Ullam quis cumque saepe autem, maiores eligendi atque perferendis asperiores sequi,",
      "Voluptates assumenda. Cum placeat soluta odio, nisi cupiditate tempora?"
    ]

    this.breakBiscuit = this.breakBiscuit.bind(this)
  }

  breakBiscuit() {
    let randomNumber = Math.floor(Math.random() * this.phrases.length)

    this.setState({
      phrase: '"'+ this.phrases[randomNumber] +'"',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){

    return (
      <View style={styles.container}>
        <Image 
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.phrase}>{this.state.phrase}</Text>

        <TouchableOpacity onPress={this.breakBiscuit} style={styles.button}>
          <View style={styles.buttonArea}>
            <Text style={styles.buttonText}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  img: {
    width: 250, 
    height: 250
  },
  phrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  buttonArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }

  
})



export default App;