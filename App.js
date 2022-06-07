import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubProgramListScreen from "./screens/SubProgramListScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import SubProgramScreen from "./screens/SubProgramScreen.jsx";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: "Accueil",
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Sous Programmes"
          options={{
            headerTitle: "Sous Programmes",
          }}
          component={SubProgramListScreen}
        />
        <Stack.Screen
          name="Sous Programme"
          options={{
            headerTitle: "Workout",
          }}
          component={SubProgramScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
