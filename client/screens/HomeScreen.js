import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import { green } from '../Components/Constants';

const Home = (props) => {
return (
    <Background>
		<View style={{ marginHorizontal: 40, marginVertical: 100 }}>
    <Text style={{ color: 'white', fontSize: 54 }}>Welcome to E-scooter Tracker</Text>
		</View> 
		<Btn  bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />  
		<Btn bgColor='white' textColor={green} btnLabel="MapScreen" Press={() => props.navigation.navigate("MapScreen")} />
    </Background>
);
}

const styles = StyleSheet.create({})

export default Home;