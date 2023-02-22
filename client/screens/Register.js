// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";


// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// export default function App() {
//     const [fullname, setFullname] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigation = useNavigation();


//       //  fetch api register

//       const register = () => {
//         axios({
//           method: "post",
//           url: " http://192.168.9.33:2000/api/users/register",
//           data: {
//             fullname: fullname,
//             email: email,
//             password: password,
//           },
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })
//           .then((res) => {
//             console.log(res.data);
//             navigation.navigate("weather");
//           }
//           )
//           .catch((err) => {
//             console.log(err);
//           }
//           );
//       };





//   return (
//     <View style={styles.container}>
//       {/* <Image style={styles.image} source={require("../assets/userr.png")} /> */}
//       <StatusBar style="auto" />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="fullName"
//           placeholderTextColor="#003f5c"
//           onChangeText={(fullName) => setFullname(fullName)}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email"
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         />
//       </View>
//       <TouchableOpacity style={styles.loginBtn}
//        onPress={register}
//       >
//         <Text style={styles.loginText}>Register</Text>

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
//     borderRadius: 30,
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
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#645CBB",
//   },
// });




import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import {green} from '../Components/Constants';
import Field from '../Components/Field';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 54,
            fontWeight: 'medium',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account 
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="Full Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            
          </View>
          <Btn
            textColor="white"
            bgColor={green}
            btnLabel="Signup"
            Press={() => {
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: green, fontWeight: 'bold', fontSize: 16}}>
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
