import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { UserProvider } from '../context/UserContext.js';
export default function Layout() {
  return (
     <UserProvider>

    <View style={{ flex: 1, backgroundColor: "#141414ff"  }}>
      <StatusBar style='light'/>
      <Slot />
    </View>
      </UserProvider>
  );
}