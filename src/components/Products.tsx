import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type ProductItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

type ProductProps = {
  item: ProductItem;
};

export default function Products({ item }: ProductProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <View style={styes.container}>
      <Image source={{ uri: item.image }} style={styes.image} />
      <View
        style={{
          backgroundColor: "#222222",
          paddingHorizontal: 5,
          paddingVertical: 5,
          borderRadius: 10,
          height: 100,
          position: "relative",
        }}
      >
        <Text
          style={[
            styes.text,
            { paddingVertical: 5, flexWrap: "wrap", fontSize: 12 },
          ]}
        >
          {item.category}
        </Text>
        <TouchableOpacity
          style={styes.favorite}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <MaterialIcons
            name={isFavorite ? "favorite" : "favorite-border"}
            size={20}
            color={"red"}
          />
        </TouchableOpacity>
        <Text style={[styes.text, { width: "80%" }]}>{item.name}</Text>
        <Text style={styes.text}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styes = StyleSheet.create({
  container: {
    width: 170,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "relative",
  },

  text: {
    fontWeight: "bold",
    color: "#ffffff",
    paddingHorizontal: 5,
  },

  image: {
    width: 170,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  favorite: {
    position: "absolute",
    top: "10%",
    left: "85%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 4,
  },
});
