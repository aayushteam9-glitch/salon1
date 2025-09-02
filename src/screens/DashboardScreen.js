import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

// Local banner image
const localBanner = require("../assets/bannner.jpg");

// ===== Dummy Data =====
const topServices = [
  {
    id: "1",
    name: "Classic haircut",
    price: "₹349",
    duration: "30 min",
    rating: 4.5,
    image: require("../assets/haircut.jpg"),
  },
  {
    id: "2",
    name: "Facial Glow",
    price: "₹599",
    duration: "45 min",
    rating: 4.8,
    image: require("../assets/facialglow.jpg"),
  },
  {
    id: "3",
    name: "Gold Facial Glow",
    price: "₹399",
    duration: "40 min",
    rating: 4.6,
    image: require("../assets/glow.jpg"),
  },
  {
    id: "4",
    name: "Hair Spa",
    price: "₹699",
    duration: "60 min",
    rating: 4.7,
    image: require("../assets/hairspa.jpg"),
  },
  {
    id: "5",
    name: "Pedicure",
    price: "₹499",
    duration: "35 min",
    rating: 4.4,
    image: require("../assets/pedicure.jpg"),
  },
];

const categories = [
  { id: "1", name: "Haircut", image: require("../assets/haircut.jpg") },
  { id: "2", name: "Hair Spa", image: require("../assets/hairspa.jpg") },
  { id: "3", name: "Facial Glow", image: require("../assets/facialglow.jpg") },
  { id: "4", name: "Pedicure", image: require("../assets/pedicure.jpg") },
  { id: "5", name: "Eyebrow Threading", image: require("../assets/eyebrow.jpg") },
];

const brandProducts = [
  {
    id: "1",
    name: "Rica White Chocolate Liposoluble Wax For Dry Skin With Glyceryl",
    qty: "(800ml)",
    price: "₹1439",
    mrp: "₹1799",
    discount: "20% OFF",
    image: require("../assets/rice.jpg"),
  },
  {
    id: "2",
    name: "L'Oreal Paris Serum, Protection and Shine, For Dry, Flyaway & Frizzy",
    qty: "(100ml)",
    price: "₹421",
    mrp: "₹599",
    discount: "30% OFF",
    image: require("../assets/serum.jpg"),
  },
  {
    id: "3",
    name: "L'Oreal Paris Serum, Protection and Shine, For Dry, Flyaway & Frizzy",
    qty: "(100ml)",
    price: "₹500",
    mrp: "₹599",
    discount: "30% OFF",
    image: require("../assets/serum.jpg"),
  },
];

// ===== Main Component =====
export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* ===== Header Row ===== */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="location-on" size={20} color="#e91e63" />
          <View>
            <Text style={styles.locationLabel}>Location</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.location}>Ahmedabad</Text>
              <Icon name="arrow-drop-down" size={20} color="#333" />
            </View>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.pointsButton}>
            <Icon name="diamond" size={16} color="#fff" />
            <Text style={styles.pointsText}>69</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 12 }}>
            <Icon name="notifications-none" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for services, categories..."
          placeholderTextColor="#999"
        />
      </View>

      {/* Banner */}
      <Image source={localBanner} style={styles.banner} resizeMode="cover" />

      {/* ===== Top Services ===== */}
      <SectionHeader title="Top Service" />
      <FlatList
        horizontal
        data={topServices}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <ServiceCard item={item} onPress={() => navigation.navigate("ProductDetail", { product: item })} />
        )}
      />

      {/* ===== Categories ===== */}
      <SectionHeader title="Categories" />
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View style={{ marginRight: 12 }}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
      />

      {/* Brand Products */}
      <SectionHeader title="Brand Products" />
      <FlatList
        horizontal
        data={brandProducts}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.brandCard}>
            <Image source={item.image} style={styles.brandImage} />
            <TouchableOpacity style={styles.favoriteIcon}>
              <Icon name="favorite-border" size={20} color="#e91e63" />
            </TouchableOpacity>
            <Text style={styles.brandTitle} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={styles.brandQty}>{item.qty}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
              <Text style={styles.brandPrice}>{item.price}</Text>
              <Text style={styles.brandMRP}>{item.mrp}</Text>
              <Text style={styles.brandDiscount}>{item.discount}</Text>
            </View>
            <TouchableOpacity
              style={styles.addCartBtn}
              onPress={() => navigation.navigate("ProductDetail", { product: item })}
            >
              <Text style={styles.addCartText}>Add Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* ===== Footer Text ===== */}
      <Text style={styles.footerText}>✨ Thank you for visiting! ✨</Text>
    </ScrollView>
  );
}

// ===== Reusable Section Header =====
function SectionHeader({ title }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.viewAll}>View all</Text>
      </TouchableOpacity>
    </View>
  );
}

// ===== Service Card =====
function ServiceCard({ item, onPress }) {
  return (
    <View style={styles.serviceCard}>
      <Image source={item.image} style={styles.serviceImage} />
      <Text style={styles.serviceTitle}>{item.name}</Text>
      <View style={styles.serviceInfo}>
        <Icon name="schedule" size={14} color="#555" />
        <Text style={styles.infoText}>{item.duration}</Text>
        <Icon name="star" size={14} color="#555" style={{ marginLeft: 8 }} />
        <Text style={styles.infoText}>{item.rating}</Text>
      </View>
      <Text style={styles.servicePrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addCartBtn} onPress={onPress}>
        <Text style={styles.addCartText}>Add Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

// ===== Styles =====
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  locationLabel: { fontSize: 12, color: "#777" },
  location: { fontSize: 22, fontWeight: "600", color: "#333" },
  headerRight: { flexDirection: "row", alignItems: "center" },
  pointsButton: {
    backgroundColor: "#e91e63",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  pointsText: { color: "#fff", fontWeight: "600" },

  // Search Bar
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    marginHorizontal: 16,
    marginTop: 1,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },

  // Section Header
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
  },
  sectionTitle: { fontSize: 16, fontWeight: "600", color: "#333" },
  viewAll: { fontSize: 14, color: "#e91e63" },

  banner: {
    width: width - 32,
    height: 150,
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
  },

  // Service Card
  serviceCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginRight: 12,
    width: width * 0.45,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceImage: { width: "100%", height: 100, borderRadius: 8 },
  serviceTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e91e63",
    marginTop: 6,
  },
  serviceInfo: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  infoText: { fontSize: 12, color: "#555", marginLeft: 2 },
  servicePrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 6,
    color: "#000",
  },
  addCartBtn: {
    backgroundColor: "#e91e63",
    borderRadius: 6,
    paddingVertical: 6,
    marginTop: 6,
    alignItems: "center",
  },
  addCartText: { color: "#fff", fontSize: 12, fontWeight: "600" },

  // Category
  categoryImage: { width: 100, height: 80, borderRadius: 8 },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
    color: "#333",
  },

  // Brand
  brandCard: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  brandImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 4,
    elevation: 3,
  },
  brandTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#333",
    marginTop: 8,
  },
  brandQty: {
    fontSize: 11,
    color: "#888",
    marginTop: 2,
  },
  brandPrice: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
  },
  brandMRP: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 6,
  },
  brandDiscount: {
    fontSize: 12,
    color: "#28a745",
    marginLeft: 6,
    fontWeight: "600",
  },

  // Footer
  footerText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
    marginBottom: 20,
  },
});
