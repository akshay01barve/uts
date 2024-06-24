import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import * as Updates from 'expo-updates';


const _layout = () => {

  const runTypeMessage = Updates.isEmbeddedLaunch
  ? 'This app is running from built-in code'
  : 'This app is running an update';
  return (
    <Tabs   screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: 'black' },
      headerStyle: { backgroundColor: '#1e1e1e' }, // Set header background color
      headerTintColor: '#fff', // Set header text and icon color
    }}>
       
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
           <Tabs.Screen
      name='reel'
      options={{
        title:"Reels",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="language-javascript" size={24} color={color} />
          
        ),
      }}
      />
       <Tabs.Screen
        name="drawer"
        options={{
          href: null,
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})