import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import * as ScreenOrientation from "expo-screen-orientation";
export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hello</Text>
        <Text style={styles.subtitleText}>My name is</Text>
        <View style={styles.nameView}>
          <View>
            <Text style={styles.nameText}>Matthew Huang</Text>
          </View>
            <Image
              style={styles.helloImage}
              source={require("./assets/hello.png")}
            ></Image>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 90,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  nameView: {
    width: "100%",
    height: "55%",
    backgroundColor: "white",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameText: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    width: "55%",
  },

  helloImage: {
    width: "55%",
    height:"78%"
    
  },
  safeView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
