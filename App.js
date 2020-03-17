import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';
import Home from './pages/Home.js';


export default function App() {



  return (
    <View style={styles.container}>
       
      {Home()}
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    justifyContent: 'center',
  },
});
