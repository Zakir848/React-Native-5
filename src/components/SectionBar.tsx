import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

type SectionBarProps = {
  setSearch: (value: string) => void;
};

export default function SectionBar({ setSearch }: SectionBarProps) {
  return (
    <View>
      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        <Text style={styles.headerText}>Find unique furtinure</Text>
        <Text style={styles.headerText}>for you home</Text>
      </View>
      <View style={styles.inputBaseContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={22} />
          <TextInput
            placeholder="Search furniture"
            onChangeText={setSearch}
            style={{ flex: 2 }}
          />
        </View>
        <TouchableOpacity
          style={{ backgroundColor: "#713823", padding: 10, borderRadius: 5 }}
        >
          <FontAwesome6 name="sliders" color="#ffffff" size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBaseContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    gap: 5,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 5,
    gap: 5,
    borderRadius: 5,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
