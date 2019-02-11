import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import api from '../services/api'

export default class NewScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    newTweet: '',
  }

  goBack = () => {
    this.props.navigation.pop()
  }

  handleInputChange = newTweet => {
    this.setState({ newTweet })
  }

  handleTweet = async () => {
    const content = this.state.newTweet
    const author = await AsyncStorage.getItem('@OmniStack:username')

    await api.post('tweet', { author, content })
    this.goBack()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Icon name="close" size={24} color="#4BB0EE" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.handleTweet}>
            <Text style={styles.buttonText}>Tweet</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          multiline
          placeholder="What's happening?"
          placeholderTextColor="#999"
          value={this.state.newTweet}
          onChangeText={this.handleInputChange}
          returnKeyType="send"
          onSubmitEditing={this.handleTweet}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: '#4BB0EE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    margin: 20,
    fontSize: 16,
    color: '#333',
  },
})
