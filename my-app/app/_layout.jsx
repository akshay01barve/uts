import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import * as Updates from 'expo-updates';


const _layout = () => {

  const runTypeMessage = Updates.isEmbeddedLaunch
  ? 'This app is running from built-in code'
  : 'This app is running an update';
  return (
    <Tabs   screenOptions={{
      tabBarActiveTintColor: '#00b0ff',
      tabBarInactiveTintColor: '#fff',
      tabBarStyle: { backgroundColor: '#FF0063' },
      headerStyle: { backgroundColor: '#FF0063' }, // Set header background color
      headerTintColor: '#fff', // Set header text and icon color
    }}>


<Tabs.Screen
        name="drawer"
      
        
        options={{
          title:"Menu",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" size={34} color={color} />
            
          ),
          headerShown: false, 
        }}
        
      />
       
      <Tabs.Screen
      name='index'
      options={{
        title:"Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={35} />
          
        ),
      }}
      />
        <Tabs.Screen
      name='video'
      options={{
        title:"Video",
        tabBarIcon: ({ color, size }) => (
          <Octicons name="video" size={35} color={color} />
          
        ),
      }}
      />
        <Tabs.Screen
      name='aptitude'
      options={{
        title:"Aptitude",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="pencil-square" size={35} color={color}/>
          
        ),
      }}
      />
        <Tabs.Screen
      name='javascript'
      options={{
        title:"Javascript",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="language-javascript" size={35} color={color} />
          
        ),
      }}
      />
           <Tabs.Screen
      name='reel'
      options={{
        title:"Reels",
      
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="screenpal" size={35} color={color} />
          
        ),
      }}
      />
   
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})