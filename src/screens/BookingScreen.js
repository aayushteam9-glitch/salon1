// BookingScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function BookingScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const bookings = [
    {
      id: 1,
      title: "Gold facial glow",
      price: "₹799",
      duration: "45 mins",
      status: "Confirmed",
      visitType: "At home visit",
      date: "26 sat | 10:30am",
    },
    {
      id: 2,
      title: "Hair Package",
      price: "₹1299",
      duration: "120 mins",
      status: "Confirmed",
      visitType: "At home visit",
      date: "26 sat | 10:30am",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My booking</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Upcoming" && styles.activeTab]}
          onPress={() => setActiveTab("Upcoming")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Upcoming" && styles.activeTabText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Past" && styles.activeTab]}
          onPress={() => setActiveTab("Past")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Past" && styles.activeTabText,
            ]}
          >
            Past
          </Text>
        </TouchableOpacity>
      </View>

      {/* Booking List */}
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {bookings.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.serviceName}>{item.title}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            <Text style={styles.price}>
              {item.price} <Text style={styles.duration}>| {item.duration}</Text>
            </Text>

            <View style={styles.infoRow}>
              <Icon name="place" size={16} color="#E91E63" />
              <Text style={styles.infoText}>{item.visitType}</Text>
            </View>

            <View style={styles.infoRow}>
              <Icon name="event" size={16} color="#E91E63" />
              <Text style={styles.infoText}>{item.date}</Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.rescheduleBtn}>
                <Text style={styles.rescheduleText}>Reschedule</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelBtn}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold" },

  tabContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },
  tabButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E91E63",
    paddingVertical: 8,
    borderRadius: 6,
    marginHorizontal: 5,
    alignItems: "center",
  },
  activeTab: { backgroundColor: "#E91E63" },
  tabText: { color: "#E91E63", fontSize: 14, fontWeight: "500" },
  activeTabText: { color: "#fff" },

  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  serviceName: { fontSize: 15, fontWeight: "600", color: "#000" },
  statusBadge: {
    backgroundColor: "green",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  statusText: { color: "#fff", fontSize: 12 },

  price: { color: "#E91E63", fontSize: 14, marginTop: 4 },
  duration: { color: "#E91E63" },

  infoRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  infoText: { fontSize: 13, color: "#333", marginLeft: 6 },

  buttonRow: { flexDirection: "row", marginTop: 10 },
  rescheduleBtn: {
    backgroundColor: "#E91E63",
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
    marginRight: 6,
  },
  cancelBtn: {
    borderWidth: 1,
    borderColor: "#E91E63",
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
    marginLeft: 6,
  },
  rescheduleText: { color: "#fff", fontWeight: "500" },
  cancelText: { color: "#E91E63", fontWeight: "500" },
});
