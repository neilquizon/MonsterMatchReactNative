// 1
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

// 2
const PetDetail = (props) => {
    // initialize treatCount to a default value of 0

    
    
    return (
        <View >
        <Image source={props.imageSrc} style={styles.image} 
        />    
             
        
      </View>
      
    )
    return (
    <Text style={styles.text}>{props.name}</Text> );
  }

  
  

// 3
const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 200,
      
      
    },
 
  });

// 4
export default PetDetail;