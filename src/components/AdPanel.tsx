import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AdPanel() {
  return (
    <View style={styles.adContainer}>
      <View style={{ width: "55%" }}>
        <Text style={styles.text}>Up to</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#D49A76", fontWeight: "bold", fontSize: 25 }}>
            40%{" "}
          </Text>
          <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 25 }}>
            Discount!
          </Text>
        </View>
        <Text style={styles.text}>Limited-time furniture offers</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "black" }}>Shop Now</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "45%", height: "100%" }}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/033/888/620/large_2x/modern-yellow-armchair-with-ai-generated-free-png.png",
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            resizeMode: "contain",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  adContainer: {
    backgroundColor: "#222222",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  text: {
    color: "#888888",
    fontSize: 12,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#ffffff",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});
