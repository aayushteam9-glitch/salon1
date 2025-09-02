import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Category Details</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Product Image */}
        <Image source={product.image} style={styles.image} />

        {/* Details */}
        <View style={styles.detailBox}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.subtitle}>{product.description}</Text>

          {/* Pricing */}
          <View style={styles.priceRow}>
            <Text style={styles.price}>₹{product.price}</Text>
            <Text style={styles.oldPrice}>₹{product.oldPrice}</Text>
            <Text style={styles.discount}>{product.discount}</Text>
          </View>

          {/* Brand Names */}
          <Text style={styles.sectionTitle}>Brand Name</Text>
          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>• Loreal Professional</Text>
            <Text style={styles.bullet}>• Wella Color</Text>
            <Text style={styles.bullet}>• Moroccanoil Hydration Mask</Text>
          </View>

          {/* Process */}
          <Text style={styles.sectionTitle}>Total Process</Text>
          <Text style={styles.bullet}>• Steps : 6</Text>

          {/* Includes */}
          <Text style={styles.sectionTitle}>What it includes</Text>
          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>• Full Hair Color</Text>
            <Text style={styles.bullet}>• Toning</Text>
            <Text style={styles.bullet}>• Hair Mask</Text>
            <Text style={styles.bullet}>• Hair Trim</Text>
          </View>

          {/* Benefits */}
          <Text style={styles.sectionTitle}>Benefits of this Package</Text>
          <View style={styles.bulletBox}>
            <Text style={styles.bullet}>• Makes your hair shiny</Text>
            <Text style={styles.bullet}>• Hydration & repair</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.priceText}>₹{product.price}/-</Text>
        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => navigation.navigate("BookAppointment", { product })}
        >
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#333" },

  // Image
  image: { width: "100%", height: 260, resizeMode: "cover" },

  // Details
  detailBox: { padding: 16 },
  title: { fontSize: 20, fontWeight: "700", color: "#E91E63", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#555", marginBottom: 12 },

  priceRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  price: { fontSize: 18, fontWeight: "bold", color: "#E91E63", marginRight: 10 },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#888",
    marginRight: 10,
  },
  discount: { fontSize: 14, color: "#4CAF50", fontWeight: "600" },

  sectionTitle: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  bulletBox: { marginLeft: 10, marginBottom: 5 },
  bullet: { fontSize: 14, color: "#444", marginBottom: 4 },

  // Bottom bar
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 14,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  priceText: { fontSize: 18, fontWeight: "bold", color: "#E91E63" },
  bookBtn: {
    backgroundColor: "#E91E63",
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 10,
  },
  bookText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
