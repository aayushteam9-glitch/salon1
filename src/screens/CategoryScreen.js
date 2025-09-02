// src/screens/CategoryScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

// Local service categories
const serviceCategories = [
  { id: "1", name: "Hair Care", image: require("../assets/1.jpg") },
  { id: "2", name: "Facial", image: require("../assets/facialglow.jpg") },
  { id: "3", name: "Cleanup", image: require("../assets/4.jpg") },
  { id: "4", name: "Makeup", image: require("../assets/mehndi.jpg") },
  { id: "5", name: "Waxing", image: require("../assets/rice.jpg") },
  { id: "6", name: "Threading", image: require("../assets/eyebrow.jpg") },
  { id: "7", name: "Nails", image: require("../assets/manicure.jpg") },
  { id: "8", name: "Massage", image: require("../assets/hairspa.jpg") },
];

// Brand Filters
const productBrands = [
  { id: "all", name: "All" },
  { id: "loreal", name: "L'OREAL" },
  { id: "o3", name: "O3+" },
  { id: "lotus", name: "LOTUS" },
];

// Local product categories
const productCategories = [
  {
    id: "1",
    brand: "loreal",
    name: "Rica White Chocolate Liposoluble Wax",
    description: "For Dry Skin With Glyceryl ... (800ml)",
    price: 1439,
    oldPrice: 1799,
    discount: "20% OFF",
    image: require("../assets/rice.jpg"),
  },
  {
    id: "2",
    brand: "loreal",
    name: "LOreal Paris Serum Wash",
    description: "Protection & Shine, For Dry & Frizzy (100ml)",
    price: 421,
    oldPrice: 599,
    discount: "30% OFF",
    image: require("../assets/serum.jpg"),
  },
  {
    id: "3",
    brand: "lotus",
    name: "Lotus Herbals Face Wash",
    description: "Neem & Clove Purifying (150ml)",
    price: 199,
    oldPrice: 249,
    discount: "20% OFF",
    image: require("../assets/glow.jpg"),
  },
  {
    id: "4",
    brand: "o3",
    name: "O3+ Brightening Cream",
    description: "For Radiant Skin (50g)",
    price: 549,
    oldPrice: 699,
    discount: "21% OFF",
    image: require("../assets/pedicure.jpg"),
  },
];

export default function CategoryScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Services");
  const [activeBrand, setActiveBrand] = useState("all");

  const categories =
    activeTab === "Services"
      ? serviceCategories
      : productCategories.filter(
          (item) => activeBrand === "all" || item.brand === activeBrand
        );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Category</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by service & product"
          placeholderTextColor="#888"
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Services" && styles.activeTab]}
          onPress={() => setActiveTab("Services")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Services" && styles.activeTabText,
            ]}
          >
            Services
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Products" && styles.activeTab]}
          onPress={() => setActiveTab("Products")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Products" && styles.activeTabText,
            ]}
          >
            Products
          </Text>
        </TouchableOpacity>
      </View>

      {/* Brand Filter for Products */}
      {activeTab === "Products" && (
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.brandTitle}>Brand Product</Text>
          <FlatList
            data={productBrands}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 8 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.brandFilter,
                  activeBrand === item.id && styles.activeBrandFilter,
                ]}
                onPress={() => setActiveBrand(item.id)}
              >
                <Text
                  style={[
                    styles.brandText,
                    activeBrand === item.id && styles.activeBrandText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Services Grid */}
      {activeTab === "Services" ? (
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: 60 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <ImageBackground
                source={item.image}
                style={styles.cardImage}
                imageStyle={{ borderRadius: 12 }}
              >
                <View style={styles.overlay}>
                  <Text style={styles.cardText}>{item.name}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      ) : (
        /* Products Grid */
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: 60 }}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName} numberOfLines={2}>
                {item.name}
              </Text>
              <Text style={styles.productDesc} numberOfLines={1}>
                {item.description}
              </Text>

              <View style={styles.priceRow}>
                <Text style={styles.newPrice}>₹{item.price}</Text>
                <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
                <Text style={styles.discount}>{item.discount}</Text>
              </View>

              <TouchableOpacity
                style={styles.addCartBtn}
                onPress={() =>
                  navigation.navigate("ProductDetail", { product: item })
                }
              >
                <Text style={styles.addCartText}>Add Cart</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: "600", textAlign: "center" },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  searchInput: { flex: 1, padding: 8, fontSize: 14 },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E91E63",
    alignItems: "center",
    marginHorizontal: 5,
  },
  activeTab: { backgroundColor: "#E91E63" },
  tabText: { fontSize: 14, fontWeight: "500", color: "#E91E63" },
  activeTabText: { color: "#fff" },
  row: { justifyContent: "space-between" },

  // Brand filter
  brandTitle: { fontSize: 16, fontWeight: "600", marginBottom: 6 },
  brandFilter: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f8f8f8",
    marginRight: 10,
  },
  activeBrandFilter: {
    borderColor: "#E91E63",
    backgroundColor: "#fff0f6",
  },
  brandText: { fontSize: 14, color: "#333" },
  activeBrandText: { color: "#E91E63", fontWeight: "600" },

  // Service Card
  card: {
    flex: 1,
    margin: 6,
    height: 140,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#eee",
    elevation: 3,
  },
  cardImage: { flex: 1, justifyContent: "flex-end" },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 8,
    alignItems: "center",
  },
  cardText: { color: "#fff", fontSize: 14, fontWeight: "bold" },

  // Product Card
  productCard: {
    flex: 1,
    margin: 6,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 8,
  },
  productName: { fontSize: 14, fontWeight: "600", color: "#333" },
  productDesc: { fontSize: 12, color: "#666", marginBottom: 6 },
  priceRow: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  newPrice: { fontSize: 14, fontWeight: "bold", color: "#000" },
  oldPrice: {
    fontSize: 12,
    color: "#888",
    textDecorationLine: "line-through",
    marginLeft: 6,
  },
  discount: {
    fontSize: 12,
    color: "#E91E63",
    fontWeight: "bold",
    marginLeft: 6,
  },
  addCartBtn: {
    backgroundColor: "#E91E63",
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: "center",
  },
  addCartText: { color: "#fff", fontWeight: "600" },
});
