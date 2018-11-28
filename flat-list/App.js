import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ name: 'Fulano' }]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
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
    backgroundColor: '#F5FCFF',
  },
})
