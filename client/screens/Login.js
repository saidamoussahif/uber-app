import React from "react";
import { View, Text, TouchableOpacity, Button, Alert } from "react-native";
// import Background from "../Components/Background";
// import Btn from "../Components/Btn";
import { green } from "../Components/Constants";
import Field from "../Components/Field";
// import axios from "axios";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // const handleSubmit = () => {
  // const data = { email: email, password: password };

  const handleSubmit = async () => {
    const data = { email: email, password: password };
    const url = "http://192.168.9.33:2000/api/users/login";
    await fetch(url, data)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.status === "success") {
          Alert.alert("Login Success");
          navigation.navigate("MapScreen");
        } else {
          Alert.alert("Login Failed");
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <Background>
    <View
      style={{ alignItems: "center", width: 460, backgroundColor: "#4E6C50" }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 54,
          fontWeight: "medium",
          marginVertical: 20,
        }}
      >
        Login
      </Text>
      <View
        style={{
          backgroundColor: "white",
          height: 500,
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 100,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 40, color: green, fontWeight: "bold" }}>
          Welcome Back
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Login to your account
        </Text>
        <Field
          placeholder="Email / Username"
          value={email}
          onChange={setEmail}
        />
        <Field
          placeholder="Password"
          value={password}
          type={password}
          onChange={setPassword}
        />
        <View
          style={{
            alignItems: "flex-end",
            width: "60%",
            paddingRight: 16,
            marginBottom: 200,
          }}
        >
          <Text style={{ color: green, fontWeight: "bold", fontSize: 16 }}>
            Forgot Password ?
          </Text>
        </View>
        <Button
          title="Login"
          textColor="white"
          bgColor={green}
          // btnLabel="Login"
          onPress={() => handleSubmit(email, password)}
        />

        {/* <Button title="Login" onPress={() => handleSubmit(
            email,
            password
          )} /> */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Don't have an account ?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: green, fontWeight: "bold", fontSize: 16 }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </Background>
  );
};

export default Login;
