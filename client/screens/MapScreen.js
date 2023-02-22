import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import React from "react";

const MapScreen = () => {
  // const [useEffect, setUseEffect] = useState([
//     {
//       latitude: 32.298744,
//       longitude: -9.227961,
//     },
//     {
//       latitude: 32.29728,
//       longitude: -9.226651,
//     },
//     {
//       latitude: 32.306734,
//       longitude: -9.237087,
//     },
//     {
//       latitude: 32.293759,
//       longitude: -9.231893,
//     },
//     {
//       latitude: 32.305271,
//       longitude: -9.213746,
//     },
//     {
//       latitude: 32.314425,
//       longitude: -9.212282,
//     },
//     {
//       latitude: 32.295226,
//       longitude: -9.242699,
//     },
//     {
//       latitude: 32.30513,
//       longitude: -9.232974,
//     },
//     {
//       latitude: 32.290537,
//       longitude: -9.237164,
//     },
//   ]);



const [region, setRegion] = useState({
  latitude: 32.29939,
  longitude: -9.23718,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
});

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >

        <Marker
          coordinate={{
            latitude: 32.29939,
            longitude: -9.23718,
          }}
          title="Scooter 1"
          description="Scooter 1"
          image={require("../assets/escooter.png")}
        />

        <Marker
          coordinate={{
            latitude: 32.304329,
            longitude:  -9.194209,
          }}
          title="Scooter 2"
          description="Scooter 2"
          image={require("../assets/escooter.png")}
                  
        />

        <Marker
          coordinate={{
            latitude: 32.289819,
            longitude:-9.220130,
          }}
          title="Scooter 2"
          description="Scooter 2"
          image={require("../assets/escooter.png")}
                  
        />
        </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
