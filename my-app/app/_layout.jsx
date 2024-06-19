import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import * as Updates from 'expo-updates'


const _layout = () => {

  async function onFetchUpdateAsync(){
    try{
      const update =await Updates.checkForUpdateAsync();
      if(update.isAvailable){
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    catch(error){
      alert(`Error fetching latest Expo update:${error}`);
    }
  }

  useEffect(()=>{
    onFetchUpdateAsync()
  })
  return (
    <Tabs>
      <Tabs.Screen
      name='index'
      options={{
        title:"Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={25} />
          
        ),
      }}
      />
        <Tabs.Screen
      name='video'
      options={{
        title:"Video",
        tabBarIcon: ({ color, size }) => (
          <Octicons name="video" size={24} color={color} />
          
        ),
      }}
      />
        <Tabs.Screen
      name='aptitude'
      options={{
        title:"Aptitude",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="pencil-square" size={24} color={color}/>
          
        ),
      }}
      />
        <Tabs.Screen
      name='javascript'
      options={{
        title:"Javascript",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="language-javascript" size={24} color={color} />
          
        ),
      }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})