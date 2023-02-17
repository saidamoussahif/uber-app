// // import React from 'react';
// // import Login from './screens/Login';
// // // import MapScreen from './screens/MapScreen';
// // import { StyleSheet, View } from 'react-native';
// // // import { NavigationContainer } from '@react-navigation/native';
// // // import { createStackNavigator } from '@react-navigation/stack';


// // // const Stack = createStackNavigator();

// // export default function App() {
// //   return (
// //     <View style={styles.container}> 
// //       <Login/>
// //     // </View>
// //   //   <SafeAreaView style={styles.container}>
// //   //   <NavigationContainer>
// //   //     <Stack.Navigator>   
// //   //        <Stack.Screen
// //   //       name="Login"
// //   //       component={Login}
// //   //       options={{
// //   //         headerShown: false
// //   //       }}  
// //   //     />
// //   //       <Stack.Screen
// //   //         name="MapScreen"
// //   //         component={MapScreen}
// //   //         options={{
// //   //           headerShown: false
// //   //         }}
// //   //       />
// //   //     </Stack.Navigator>
// //   //   </NavigationContainer>
// //   // </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   map: {
// //     width: '100%',
// //     height: '100%',
// //   },
// // });


// import { StyleSheet } from "react-native";
// import Login from "./screens/Login";
// import MapScreen from "./screens/MapScreen";
// import Register from "./screens/Register";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();



// export default function App() {
//   return (
//     <NavigationContainer style={styles.container}>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="MapScreen" component={MapScreen} />
//         <Stack.Screen name="Register" component={Register} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Register from './screens/Register';
import Login from './screens/Login';
import MapScreen from './screens/MapScreen'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;