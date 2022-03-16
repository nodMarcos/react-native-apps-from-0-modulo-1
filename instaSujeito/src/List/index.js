import { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: this.props.data
    }

    this.showLikes = this.showLikes.bind(this)
    this.like = this.like.bind(this)
    this.loadIcon = this.loadIcon.bind(this)
  }

  loadIcon(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png')
  }

  like() {
    let feed = this.state.feed;

    if(feed.likeada === true) {
      this.setState({ 
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      })
    }
    else {
      this.setState({ 
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
      })
    }
  }

  showLikes(likers) {
    let feed = this.state.feed;

    if(feed.likers <= 0){
      return
    }

    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  render() {
    return(
      <View style={styles.areaFeed}>
        <View style={styles.viewProfile}>
          <Image 
            source={{uri: this.state.feed.imgperfil}}
            style={styles.profileImage}
          />
          <Text style={styles.userName}> {this.state.feed.nome} </Text>
        </View>

        <Image
          resizeMode="cover" 
          style={styles.publication}
          source={{uri: this.state.feed.imgPublicacao}}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.like}>
            <Image 
              source={this.loadIcon(this.state.feed.likeada)}
              style={styles.like}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSend}>
            <Image 
              source={require('../img/send.png')}
              style={styles.like}
            />
          </TouchableOpacity>
        </View>

        {this.showLikes(this.state.feed.likers)}

        <View style={styles.viewFooter}>
          <Text style={styles.nameFooter}>
            {this.state.feed.nome}
          </Text>

          <Text style={styles.descFooter}>
            {this.state.feed.descricao}
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  areaFeed: {

  },
  userName: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25 
  },
  publication: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  viewProfile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5
  },
  like: {
    width: 33,
    height: 33,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  },
  btnSend: {
    paddingLeft: 5
  },
  viewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descFooter: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  nameFooter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  }

})