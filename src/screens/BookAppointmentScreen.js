import React, { useState } from "react";
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

export default function BookAppointmentScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;

  const [location, setLocation] = useState("salon");
  const [selectedDate, setSelectedDate] = useState("Sat 26");
  const [selectedTime, setSelectedTime] = useState("10:30 AM");

  const handleBookNow = () => {
    navigation.navigate("BookSummary", {
      product,
      location,
      selectedDate,
      selectedTime,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book appointment</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Service Order */}
        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Your Services Order</Text>
          <View style={styles.serviceRow}>
            <Image source={product.image} style={styles.serviceImg} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.serviceName}>{product.name}</Text>
              <Text style={styles.servicePrice}>
                ₹{product.price} | 120 mins
              </Text>
            </View>
            <TouchableOpacity style={styles.removeBtn}>
              <Text style={{ fontSize: 20, color: "#E91E63" }}>−</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Location */}
        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Service Location</Text>
          <TouchableOpacity
            style={[
              styles.option,
              location === "salon" && styles.optionSelected,
            ]}
            onPress={() => setLocation("salon")}
          >
            <Text
              style={[
                styles.optionText,
                location === "salon" && styles.optionTextSelected,
              ]}
            >
              In salon visit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.option,
              location === "home" && styles.optionSelected,
            ]}
            onPress={() => setLocation("home")}
          >
            <Text
              style={[
                styles.optionText,
                location === "home" && styles.optionTextSelected,
              ]}
            >
              At home service | +150 rs extra
            </Text>
          </TouchableOpacity>
        </View>

        {/* Date */}
        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Select Date</Text>
          <View style={styles.row}>
            {["Fri 25", "Sat 26", "Sun 27", "Mon 28", "Tue 29"].map((date) => (
              <TouchableOpacity
                key={date}
                style={[
                  styles.dateBox,
                  selectedDate === date && styles.dateSelected,
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <Text
                  style={[
                    styles.dateText,
                    selectedDate === date && styles.dateTextSelected,
                  ]}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Time */}
        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Select Time</Text>
          <View style={styles.row}>
            {["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"].map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeBox,
                  selectedTime === time && styles.timeSelected,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === time && styles.timeTextSelected,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.priceText}>₹{product.price}/-</Text>
        <TouchableOpacity style={styles.bookBtn} onPress={handleBookNow}>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headerTitle: { fontSize: 18, fontWeight: "700" },

  card: { padding: 16, borderBottomWidth: 1, borderColor: "#f0f0f0" },
  sectionLabel: { fontSize: 15, fontWeight: "600", marginBottom: 10 },

  serviceRow: { flexDirection: "row", alignItems: "center" },
  serviceImg: { width: 60, height: 60, borderRadius: 8 },
  serviceName: { fontSize: 15, fontWeight: "600" },
  servicePrice: { fontSize: 13, color: "#E91E63" },
  removeBtn: {
    borderWidth: 1,
    borderColor: "#E91E63",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  option: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  optionSelected: { borderColor: "#E91E63", backgroundColor: "#fde7f0" },
  optionText: { fontSize: 14, color: "#333" },
  optionTextSelected: { color: "#E91E63", fontWeight: "600" },

  row: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  dateBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  dateSelected: { borderColor: "#E91E63", backgroundColor: "#fde7f0" },
  dateText: { fontSize: 13, color: "#333" },
  dateTextSelected: { color: "#E91E63", fontWeight: "600" },

  timeBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  timeSelected: { borderColor: "#E91E63", backgroundColor: "#fde7f0" },
  timeText: { fontSize: 13, color: "#333" },
  timeTextSelected: { color: "#E91E63", fontWeight: "600" },

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
