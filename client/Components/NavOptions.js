import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://cdn-icons-png.flaticon.com/128/4357/4357487.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
	const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
			onPress={() => navigation.navigate(item.screen)}
		  style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                }}
                source={{ uri: item.image }}
              />
              <Text style={tw`mt-2 text-lg font-medium`}>{item.title}</Text>
			  <Icon
			  type="antdesign"
			  name="arrowright"	
			  color="white"
			  style={tw`p-2 bg-black rounded-full w-10 mt-4`}
			  />	
			  </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
