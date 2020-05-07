import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import Pet from './src/components/PetDetail';
import Constants from 'expo-constants';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
        <Pet imageSrc={require('./assets/monster1_head.png')} />
        <Pet imageSrc={require('./assets/monster1_body.png')} />
        <Pet imageSrc={require('./assets/monster1_feet.png')} />
        
     
    </SafeAreaView>
  );
}

const PetDetail = (props) => {
  return <Text>{props.name}</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode:"contain",    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
