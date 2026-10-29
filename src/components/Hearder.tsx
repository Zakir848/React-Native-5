import React from "react";
import { Image, Text, View } from "react-native";

export default function Hearder() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f7f7f7",
          padding: 5,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: 40,
          gap: 2,
        }}
      >
        <View style={{ gap: 2 }}>
          <View
            style={{ backgroundColor: "#4B2118", padding: 6, borderRadius: 50 }}
          />
          <View
            style={{ backgroundColor: "#4B2118", padding: 6, borderRadius: 2 }}
          />
        </View>
        <View style={{ gap: 2 }}>
          <View
            style={{ backgroundColor: "#A38B79", padding: 6, borderRadius: 2 }}
          />
          <View
            style={{ backgroundColor: "#A38B79", padding: 6, borderRadius: 50 }}
          />
        </View>
      </View>
      <Image
        source={{
          uri: "https://yenikoymotors.com/img//araclar/28451/1.jpg",
        }}
        style={{ width: 40, height: 40, borderRadius: 5 }}
      />
    </View>
  );
}
