// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";

// import {
//   StyleSheet,
//   Text,
//   View,
//   //   Image,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigation = useNavigation();

//   const handleSubmit = () => {
//     const data = { email: email, password: password };

//     axios
//       .post("http://192.168.9.33:2000/api/users/login", data)
//       .then((res) => {
//         if (res.data.error) {
//           console.log(res.data.error);
//         } else {
//           console.log(res.data);
//           navigation.navigate("MapScreen");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     axios.post("http://192.168.9.33:2000/api/users/login", data).then((res) => {
//       if (res.data.error) {
//         console.log(res.data.error);
//       } else {
//         console.log(res.data);
//         navigation.navigate("MapScreen");
//       }
//     });
//   };
//   return (
//     <View style={styles.container}>
//       {/* <Image style={styles.image} source={require("../assets/userr.png")} /> */}
//       <StatusBar style="auto" />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email"
//           placeholderTextColor="#003f5c"
//           name="email"
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//           // secureTextEntry={true}
//           name="password"
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </View>
//       <TouchableOpacity
//         style={styles.loginBtn}
//         onPress={() => {
//           handleSubmit();
//         }}
//       >
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     marginBottom: 40,
//     height: 50,
//     width: 50,
//   },
//   inputView: {
//     backgroundColor: "#E9E8E8",
//     borderRadius: 10,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     // marginLeft: 20,
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   loginBtn: {
//     width: "60%",
//     borderRadius: 10,
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#B9F3E4",
//   },
// });

import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import Background from "../Components/Background";
// import Btn from "../Components/Btn";
import { green } from "../Components/Constants";
import Field from "../Components/Field";
// import axios from "axios";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // const handleSubmit = () => {
  // const data = { email: email, password: password };

  async function handleSubmit() {
    const response = await fetch("http://192.168.9.33:2000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const content = await response.json();

    // console.log(content);
    if (content.
      token) {
      AsyncStorage.setItem("token", content.token);
      navigation.navigate("MapScreen");
    }
  }

  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}>
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
            height: 700,
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
              color: "grey",
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
          {/* <Btn
            textColor="white"
            bgColor={green}
            btnLabel="Login"
            // onPress={handleSubmit()}
            onPress={() => handleSubmit(email, password)}
            />             */}

          <Button title="Login" onPress={() => handleSubmit(
            email,
            password
          )} />


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
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Register")}
            >
              <Text style={{ color: green, fontWeight: "bold", fontSize: 16 }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
