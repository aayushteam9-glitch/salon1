import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const PaymentScreen = ({ route, navigation }) => {
  const { totalAmount } = route.params || { totalAmount: 899 };
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentOptions = [
    { id: "upi", label: "UPI", icon: "logo-google" },
    { id: "card", label: "Debit card / Credit card", icon: "card-outline" },
    { id: "netbanking", label: "Net Banking", icon: "business-outline" },
    { id: "cash", label: "Cash Service", icon: "wallet-outline" },
  ];

  const handlePayment = () => {
    Alert.alert(
      "Booking Confirmed 🎉",
      `Your booking has been confirmed!\n\nPayment Method: ${selectedMethod.toUpperCase()}`,
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Dashboard"), // ✅ Go to Dashboard
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* Payment Options */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.chooseText}>Choose Payment Option</Text>

        {paymentOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionCard,
              selectedMethod === option.id && styles.optionCardSelected,
            ]}
            onPress={() => setSelectedMethod(option.id)}
          >
            <View style={styles.optionLeft}>
              <Ionicons
                name={option.icon}
                size={22}
                color={selectedMethod === option.id ? "#e91e63" : "#555"}
                style={styles.optionIcon}
              />
              <Text style={styles.optionLabel}>{option.label}</Text>
            </View>

            <View
              style={[
                styles.radioOuter,
                selectedMethod === option.id && styles.radioOuterActive,
              ]}
            >
              {selectedMethod === option.id && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.totalText}>Total Amount</Text>
          <Text style={styles.footerPrice}>₹{totalAmount}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.payNowBtn,
            !selectedMethod && styles.payNowBtnDisabled,
          ]}
          disabled={!selectedMethod}
          onPress={handlePayment}
        >
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#1a1a1a" },

  // ScrollView
  scrollView: { flex: 1 },
  scrollContent: { paddingVertical: 16, paddingBottom: 120 },

  // Options
  chooseText: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 8,
    marginHorizontal: 20,
    marginBottom: 16,
    color: "#444",
  },
  optionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 12,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  optionCardSelected: {
    borderColor: "#e91e63",
    backgroundColor: "#fef6f9",
    shadowColor: "#e91e63",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  optionLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
  optionIcon: { marginRight: 14 },
  optionLabel: { fontSize: 16, color: "#1a1a1a", fontWeight: "500" },

  // Radio Button
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  radioOuterActive: { borderColor: "#e91e63" },
  radioInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: "#e91e63" },

  // Footer
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  priceContainer: { alignItems: "flex-start" },
  totalText: { fontSize: 14, color: "#666", marginBottom: 2 },
  footerPrice: { fontSize: 20, fontWeight: "800", color: "#1a1a1a" },
  payNowBtn: {
    backgroundColor: "#e91e63",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    shadowColor: "#e91e63",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  payNowBtnDisabled: {
    backgroundColor: "#cccccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  payNowText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
