import { StyleSheet, Text, View } from 'react-native'
import Home from '../components/Home/Home'
import { useState } from 'react'
import IntroScreen from '../components/IntroScreen';




const index = () => {
  const  [isloaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true)
  }, 4000);

 
  return (
    <View style={{padding:9,paddingBottom:535}}>
     
   {isloaded  ?<Home/>:<IntroScreen/>}
    </View>
  )
}

export default index

const styles = StyleSheet.create({})