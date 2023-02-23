import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useState } from "react";
import React from "react";

const MapScreen = () => {
  

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
         {/* <Polyline
          coordinates={[
            { latitude: 32.29939, longitude: -9.23718 },
            { latitude: 32.309126, longitude: -9.238573 },
          ]}
          strokeColor="#000"
          strokeColors={[]}
          strokeWidth={2}
        /> */}
        <Marker
          coordinate={{
            latitude: 32.29939,
            longitude: -9.23718,
          }}
          title="E-Scooter 1"
          description="E-Scooter 1"
          image={require("../assets/escooter.png")}
        />
       

        <Marker
          coordinate={{
            latitude: 32.304329,
            longitude: -9.194209,
          }}
          title="E-Scooter 2"
          description="E-Scooter 2"
          image={require("../assets/escooter.png")}
        />

        <Marker
          coordinate={{
            latitude: 32.289819,
            longitude: -9.22013,
          }}
          title="E-Scooter 2"
          description="E-Scooter"
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
