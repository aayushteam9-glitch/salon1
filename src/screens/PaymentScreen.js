import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const PaymentScreen = ({ route, navigation }) => {
  const { totalAmount } = route.params || { totalAmount: 899 };
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  const paymentOptions = [
    { id: "upi", label: "UPI", icon: "logo-google" },
    { id: "card", label: "Debit card / Credit card", icon: "card-outline" },
    { id: "netbanking", label: "Net Banking", icon: "business-outline" },
    { id: "cash", label: "Cash Service", icon: "wallet-outline" },
  ];

  const handlePayment = () => {
    if (selectedMethod) {
      setConfirmation({
        title: "Booking Confirmed 🎉",
        message: `Your booking has been confirmed!\n\nPayment Method: ${selectedMethod.toUpperCase()}`,
      });

      // Auto navigate after 3s if not closed
      setTimeout(() => {
        setConfirmation(null);
        navigation.navigate("Dashboard");
      }, 3000);
    }
  };

  const closeConfirmation = () => {
    setConfirmation(null);
    navigation.navigate("Dashboard");
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
              {selectedMethod === option.id && (
                <View style={styles.radioInner} />
              )}
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

      {/* ✅ Confirmation Box in Center with Close button */}
      {confirmation && (
        <View style={styles.overlay}>
          <View style={styles.confirmationBox}>
            {/* Close button */}
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={closeConfirmation}
            >
              <Ionicons name="close" size={22} color="#333" />
            </TouchableOpacity>

            <Ionicons
              name="checkmark-circle"
              size={48}
              color="#28a745"
              style={{ marginBottom: 10 }}
            />
            <Text style={styles.confirmationTitle}>{confirmation.title}</Text>
            <Text style={styles.confirmationMessage}>
              {confirmation.message}
            </Text>
          </View>
        </View>
      )}
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
  },
  optionCardSelected: {
    borderColor: "#e91e63",
    backgroundColor: "#fef6f9",
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
  },
  payNowBtnDisabled: { backgroundColor: "#cccccc" },
  payNowText: { color: "#fff", fontSize: 16, fontWeight: "700" },

  // ✅ Center Overlay
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  confirmationBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  confirmationTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#28a745",
    marginBottom: 8,
    textAlign: "center",
  },
  confirmationMessage: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    textAlign: "center",
  },
  // Close button
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 6,
  },
});
