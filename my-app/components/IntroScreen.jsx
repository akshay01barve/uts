import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const IntroScreen = () => {
  return (
    <View >
    
      <Image 
        source={require('../assets/images/s1.png')} 
       style={{width:390,height:660}}
      />
    </View>
  );
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    
  },
});
