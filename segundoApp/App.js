import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      button: 'VAI',
      last: null
    }

    this.timer = null;

    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this)
  }

  go(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null

      this.setState({button: 'VAI'})

    }
    else {
      this.timer = setInterval(() => {
        this.setState({number: this.state.number + 0.1})
      }, 100)

      this.setState({button: 'PARAR'})
    }
   
  }

  clear() {
    if(this.timer != null) {
      clearTimeout(this.timer)
      this.timer = null
    }
    this.setState({
      last: this.state.number,
      number: 0,
      button: 'VAI'
    })
  }

  render(){

    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity onPress={this.go} style={styles.btn}>
            <Text style={styles.btnText}>{this.state.button}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.clear} style={styles.btn}>
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaLast}>
          <Text style={styles.lastRunText}>Last run: {this.state.last > 0 ? this.state.last.toFixed(1) : '0'}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaLast: {
    marginTop: 40,
  },
  lastRunText: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }
  
})



export default App;