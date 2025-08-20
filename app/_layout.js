import { Slot } from "expo-router";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { UserProvider } from "../context/UserContext.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./Main.jsx";
export default function Layout() {
  return (
    <SafeAreaProvider>
      <Main>
        <UserProvider>

        <StatusBar style="light" backgroundColor="#000000"/>

          <View style={{ flex: 1, backgroundColor: "#141414ff" }}>
            <Slot />
          </View>
        </UserProvider>
      </Main>
    </SafeAreaProvider>
  );
}
