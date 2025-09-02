import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // ✅ Back arrow icon

const BookSummaryScreen = ({ route, navigation }) => {
  const { product } = route.params || {};

  const price = Number(product?.price) || 1000;
  const visitCharge = 150;
  const discount = 50;
  const totalAmount = price + visitCharge - discount;

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }} // ✅ Extra space at bottom
        showsVerticalScrollIndicator={false}
      >
        {/* 🔙 Back Button Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.header}>Book summary</Text>
          <View style={{ width: 30 }} />
        </View>

        {/* Service Card */}
        <View style={styles.serviceCard}>
          <Image source={product?.image} style={styles.productImage} />
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>{product?.name}</Text>
            <Text style={styles.servicePrice}>
              ₹{price} | {product?.duration}
            </Text>
          </View>
        </View>

        {/* Appointment Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appointment details</Text>

          <View style={styles.row}>
            <Text style={styles.icon}>📍</Text>
            <View>
              <Text style={styles.subTitle}>At home visit</Text>
              <Text style={styles.details}>
                401, Shanti Residency, Satellite, Ahmedabad
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.icon}>📅</Text>
            <View>
              <Text style={styles.subTitle}>Date & Time</Text>
              <Text style={styles.details}>26 Sat | 10:30 AM</Text>
            </View>
          </View>
        </View>

        {/* Billing Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Billing Summary</Text>

          <View style={styles.billRow}>
            <Text>Service cost</Text>
            <Text>₹{price}</Text>
          </View>

          <View style={styles.billRow}>
            <Text>Visit charge</Text>
            <Text>₹{visitCharge}</Text>
          </View>

          <View style={styles.billRow}>
            <Text>Discount</Text>
            <Text>-₹{discount}</Text>
          </View>

          <View style={[styles.billRow, styles.totalRow]}>
            <Text style={styles.totalText}>Total Amount</Text>
            <Text style={styles.totalAmount}>₹{totalAmount}</Text>
          </View>
        </View>

        {/* Apply coins */}
        <View style={styles.coinsRow}>
          <Text>✅ Apply 169 my coins</Text>
        </View>

        {/* Stylist/Professional Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Beautician</Text>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={styles.subTitle}>Anita Sharma</Text>
              <Text style={styles.details}>
                Certified Skin Care Specialist (5 yrs exp.)
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Details</Text>
          <View style={styles.billRow}>
            <Text>Payment mode</Text>
            <Text>Cash / UPI on completion</Text>
          </View>
          <View style={styles.billRow}>
            <Text>Status</Text>
            <Text>Pending</Text>
          </View>
        </View>

        {/* Policies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cancellation Policy</Text>
          <Text style={styles.details}>
            Free cancellation up to 2 hours before the appointment.{"\n"}
            50% charge applies for last-minute cancellations.
          </Text>
        </View>
      </ScrollView>

      {/* ✅ Fixed Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerPrice}>₹{totalAmount}/-</Text>
        <TouchableOpacity
          style={styles.bookNowBtn}
         onPress={() => navigation.navigate("PaymentScreen", { totalAmount })}
        >
          <Text style={styles.bookNowText}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookSummaryScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  header: { fontSize: 20, fontWeight: "bold", textAlign: "center", flex: 1 },

  serviceCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  productImage: { width: 70, height: 70, borderRadius: 10, marginRight: 15 },
  serviceInfo: { flex: 1 },
  serviceName: { fontSize: 16, fontWeight: "bold" },
  servicePrice: { fontSize: 14, color: "#e91e63", marginTop: 5 },

  section: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  row: { flexDirection: "row", alignItems: "flex-start", marginBottom: 10 },
  icon: { fontSize: 18, marginRight: 8 },
  subTitle: { fontSize: 14, fontWeight: "600", color: "#e91e63" },
  details: { fontSize: 13, color: "#444" },

  billRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    marginTop: 10,
    paddingTop: 8,
  },
  totalText: { fontWeight: "bold", fontSize: 15 },
  totalAmount: { fontWeight: "bold", fontSize: 15, color: "#e91e63" },

  coinsRow: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    marginHorizontal: 15,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  footerPrice: { fontSize: 18, fontWeight: "bold" },
  bookNowBtn: {
    backgroundColor: "#e91e63",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  bookNowText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
