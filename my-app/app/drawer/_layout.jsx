import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Text, View } from 'react-native';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer  drawerStyle={{ backgroundColor: '#2196f3' }} >
      <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: () => (
              <View style={{ backgroundColor: '#add8e6', padding: 10 }}>
                <Text style={{ color: '#000080', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }}>
                  Images
                </Text>
              </View>
            ),
            title: 'Images',
            headerStyle: {
              backgroundColor: '#ff1744', // Background color of the header
            },
            headerTitleStyle: {
              color: '#FFF', // Text color of the header title
              fontSize: 25, // Font size of the header title
              
            },
          }}
        />
      
      </Drawer>
    </GestureHandlerRootView>
  );
}
