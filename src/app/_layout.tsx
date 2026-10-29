import AdPanel from "@/components/AdPanel";
import Categories from "@/components/Categories";
import Hearder from "@/components/Hearder";
import Products, { ProductItem } from "@/components/Products";
import SectionBar from "@/components/SectionBar";
import { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Chair" },
  { id: 3, name: "Table" },
  { id: 4, name: "Lighting" },
  { id: 5, name: "Sofa" },
  { id: 6, name: "Bed" },
];

const product = [
  {
    id: 1,
    name: "Monday Lounge Chair",
    price: 185,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8NetMu3IKdtSVR1p6z9R-Urev-D8AvqnC1omN-MLLrjkbB4OgC5-pcU&s=10",
    category: "Chair",
  },
  {
    id: 2,
    name: "Nordic Wooden Table",
    price: 320,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX22fE4qHjbxvZCsjNKZd7ZpDquPVDc5bS883pHoUGuS7eKYqumbd8YIo&s=10",
    category: "Table",
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    price: 145,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYLBx85JW_xJ2TDD9xjCkZNA4jv0UDKMmWduHDZBGga_AQNJhPueVI0EU&s=10",
    category: "Table",
  },
  {
    id: 4,
    name: "Scandinavian Floor Lamp",
    price: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEIlMgQbIyGCYpIXPfdVby4bdCCMUAjEeoDiaZ6qtDA&s=10",
    category: "Lighting",
  },
  {
    id: 5,
    name: "Luxury Velvet Sofa",
    price: 890,
    image:
      "https://qualityrugsandfurniture.com.au/cdn/shop/files/amara-modern-luxury-velvet-sofa-set-beigequality-rugs-and-furniture-7614210_600x600_crop_center.jpg?v=1777607829",
    category: "Sofa",
  },
  {
    id: 6,
    name: "Minimalist King Bed",
    price: 1150,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrf-rrhflBT1E-rJLptL0HLPQi8UxSK8Gzci4JtGZOVg&s=10",
    category: "Bed",
  },
];

export default function TabLayout() {
  const [products, setProducts] = useState<ProductItem[]>(product);
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<string>("All");

  const productFiltering = products.filter((product) => {
    const name = product.name.trim().toLocaleLowerCase();
    const query = search.trim().toLocaleLowerCase();

    const category = product.category.trim().toLocaleLowerCase();
    const select = selected.trim().toLocaleLowerCase();

    const matchesName = name.includes(query);

    const matchesCategory = selected == "All" || category == select;

    return matchesName && matchesCategory;
  });
  return (
    <View style={styles.container}>
      <View>
        <Hearder />
        <SectionBar setSearch={setSearch} />
        <AdPanel />
        <Categories data={categories} setSelected={setSelected} />
      </View>
      <FlatList
        data={productFiltering}
        keyExtractor={(product) => product.id.toString()}
        ListEmptyComponent={<Text>Products not found</Text>}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={({ item }) => <Products item={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ?? 0,
  },

  productList: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 40,
    gap: 10,
  },
});
