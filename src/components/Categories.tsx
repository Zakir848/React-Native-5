import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type CategoryItem = {
  id: number;
  name: string;
};

type CategoryProps = {
  data: CategoryItem[];
  setSelected: (value: string) => void;
};

export default function Categories({ data, setSelected }: CategoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleSelectCategory = (name: string) => {
    setSelected(name);

    setActiveCategory(name);
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        paddingVertical: 10,
        paddingHorizontal: 10,
        gap: 5,
      }}
      renderItem={({ item }) => {
        const isActive = activeCategory === item.name;

        return (
          <TouchableOpacity
            onPress={() => handleSelectCategory(item.name)}
            style={[
              styles.button,
              { backgroundColor: isActive ? "#994F37" : "#F5F5F5" },
            ]}
          >
            <Text style={{ color: isActive ? "#ffffff" : "#888888" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});
