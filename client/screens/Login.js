import React from "react";
import { View, Text, TouchableOpacity, Button, Alert } from "react-native";
import { green } from "../Components/Constants";
import Field from "../Components/Field";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();


  const handleSubmit = async () => {
    // const data = { email: email, password: password };
    // const url = "http://192.168.9.33:2000/api/users/login";
    fetch("http://192.168.9.33:2000/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        (responseJson._id)? navigation.navigate("MapScreen"):Alert.alert("Login Failed");
      })
      .catch((error) => {
        console.error(error);
      });
    // await fetch(url, data)

    //   .then( console.log(response)
    //   )
    //   .then(
    //     navigation.navigate("MapScreen"))
    //     // console.log(json);
    //     // if (json.text() === "success") {
    //     //   Alert.alert("Login Success");
    //     //   navigation.navigate("MapScreen");
    //     // } else {
    //     //   Alert.alert("Login Failed");
    //     // }

    //   .catch((error) => {
    //     console.log(error);
    //   });
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
          secureTextEntry={true}

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
        {/* <Btn
            textColor="white"
            bgColor={green}
            // title="Login"
            btnLabel="Login"
              onPress={() => props.navigation.navigate("MapScreen")}
          /> */}
        <Button
          title="Login"
          textColor="white"
          backgroundColor={green}
          // btnLabel="Login"
          onPress={() => props.navigation.navigate("MapScreen")}
        />
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
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
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
