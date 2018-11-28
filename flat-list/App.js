import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export default class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api?results=10')
      const data = await response.json()
      this.setState({ data: data.results })
    } catch (error) {
      console.log('Error on fetch data ---> ', error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item.name.first}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#F5FCFF',
  },
})
