import { NavigationContainer } from "@react-navigation/native";

import { NativeBaseProvider } from 'native-base';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

import Calculator from './src/screens/calculator';
import Home from './src/screens/Home';
import Todo from './src/screens/Todo'

function BottomTab() {
  return(
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) =>({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#7AC1E4"},
        tabBarIcon: ({focused, color, size}) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline"
          } else if (route.name == "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline"
          } else if (route.name == "Todo") {
            iconName = focused ? "list-circle" : "list-circle-outline"
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#005885",
        tabBarInactiveTintColor: "gray"
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
      <Tab.Screen name="Todo" component={Todo} options={{ headerShown: false }} />

    </Tab.Navigator>
  )
}


export default function App() {
  return (
  <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Main'
          component={BottomTab}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Calculator'
          component={Calculator}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Todo'
          component={Todo}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
  );
}

