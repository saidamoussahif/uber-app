import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Nav from "./Components/Nav";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nav" component={Nav}  
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>

    </NavigationContainer>



  );
}

export default App;
