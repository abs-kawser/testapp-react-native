import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import Header from './components/Header';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>This is from app</Text>
        <ScrollView>
          <Header />
          <FlatCards />
          <ElevatedCards />
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default App