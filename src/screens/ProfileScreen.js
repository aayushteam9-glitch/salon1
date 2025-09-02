// src/screens/ProfileScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const handleLogout = () => {
    setLogoutVisible(false);
    navigation.replace("Login");
  };

  const handleDelete = () => {
    setDeleteVisible(false);
    navigation.replace("Login"); // later replace with actual delete account API
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/women.jpg")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="edit" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Rohini Patel</Text>
        <Text style={styles.email}>Rohinipatel12@gmail.com</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <MenuItem icon="person-outline" title="Personal information" />
        <MenuItem icon="card-giftcard" title="My Rewards" />
        <MenuItem icon="favorite-outline" title="Favourites" />
        <MenuItem icon="help-outline" title="Help and support" />
      </View>

      {/* Log out & Delete */}
      <View style={styles.menuContainer}>
        <MenuItem
          icon="logout"
          title="Log out"
          iconColor="#E91E63"
          onPress={() => setLogoutVisible(true)}
        />
        <MenuItem
          icon="delete"
          title="Delete"
          iconColor="#E91E63"
          onPress={() => setDeleteVisible(true)}
        />
      </View>

      {/* Logout Confirmation Modal */}
      <CustomModal
        visible={logoutVisible}
        text="Are you sure you want to log out?"
        confirmText="Log out"
        cancelText="Cancel"
        onConfirm={handleLogout}
        onCancel={() => setLogoutVisible(false)}
      />

      {/* Delete Confirmation Modal */}
      <CustomModal
        visible={deleteVisible}
        text="Are you sure you want to delete your account?"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => setDeleteVisible(false)}
      />
    </ScrollView>
  );
}

function MenuItem({ icon, title, iconColor = "#000", onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <Icon name={icon} size={22} color={iconColor} />
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <Icon name="chevron-right" size={22} color="#888" />
    </TouchableOpacity>
  );
}

function CustomModal({ visible, text, confirmText, cancelText, onConfirm, onCancel }) {
  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onCancel}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{text}</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.outlinedButton} onPress={onConfirm}>
              <Text style={styles.outlinedButtonText}>{confirmText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filledButton} onPress={onCancel}>
              <Text style={styles.filledButtonText}>{cancelText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
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
  profileSection: { alignItems: "center", marginVertical: 20 },
  imageWrapper: { position: "relative" },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#E91E63",
    borderRadius: 12,
    padding: 4,
  },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 8 },
  email: { fontSize: 14, color: "gray" },
  menuContainer: { marginTop: 10, paddingHorizontal: 10 },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  menuLeft: { flexDirection: "row", alignItems: "center" },
  menuText: { fontSize: 15, marginLeft: 10 },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  modalText: { fontSize: 16, fontWeight: "500", textAlign: "center" },
  modalButtons: { flexDirection: "row", marginTop: 20 },
  outlinedButton: {
    borderWidth: 1,
    borderColor: "#E91E63",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  outlinedButtonText: { color: "#E91E63", fontWeight: "500" },
  filledButton: {
    backgroundColor: "#E91E63",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  filledButtonText: { color: "#fff", fontWeight: "500" },
});
