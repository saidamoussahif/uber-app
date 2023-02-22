import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import Background from "../Components/Background";
import Btn from "../Components/Btn";
import { green } from "../Components/Constants";

const Home = (props) => {
  return (
    // <Background>
	  <View
		style={styles.container}
	  >
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "#4E6C50", fontSize: 54 }}>
          Welcome to E-scooter Tracker
        </Text>
      </View>
      <Btn
        bgColor={green}
        textColor="white"
        btnLabel="Login"
        Press={() => props.navigation.navigate("Login")}
      />
      <Btn
        bgColor="white"
        textColor={green}
        btnLabel="Register"
        Press={() => props.navigation.navigate("Register")}
      />
	</View>
    // </Background>
  );
};

const styles = StyleSheet.create({
	  container: {	
		flex: 1,
		backgroundColor: "#E5FDD1",
		alignItems: "center",
		justifyContent: "center",
	  },
});

export default Home;
