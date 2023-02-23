import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Background from "../Components/Background";
import Btn from "../Components/Btn";
import { green } from "../Components/Constants";
import Field from "../Components/Field";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const Signup = (props) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSubmit = async () => {
    fetch("http://192.168.9.33:2000/api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson._id
          ? navigation.navigate("HomeScreen")
          : Alert.alert("Register Failed");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}
       options={{
        headerShown: false,
      }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 54,
            fontWeight: "medium",
            marginTop: 20,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <Field 
          placeholder="Full Name"
          value={fullname}
          onChange={setFullname}
           />
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
            secureTextEntry={true}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "78%",
              paddingRight: 16,
            }}
          ></View>
          <Btn
            textColor="white"
            bgColor={green}
            btnLabel="Signup"
            Press={() => {
              props.navigation.navigate("Login");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: green, fontWeight: "bold", fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
