import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securePass, setSecurePass] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    navigation.navigate("Dashboard");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.heading}>Create Your Account</Text>
        <Text style={styles.subheading}>
          Join Glamify Salon for the best beauty experience
        </Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="number-pad"
            maxLength={10}
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={securePass}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry={secureConfirm}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="#aaa"
          />

          <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}>
            <Text style={styles.signupText}>Create My Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/google-logo.png",
              }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
              }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const PRIMARY = "#FF2D78";
const SECONDARY = "#FF8E9E";
const BACKGROUND = "#FFF5F7";
const INPUT_BG = "#FFFFFF";
const TEXT_DARK = "#333333";
const TEXT_LIGHT = "#777777";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 40,
    backgroundColor: BACKGROUND,
    flexGrow: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: PRIMARY,
    marginBottom: 8,
    textAlign: "center",
  },
  subheading: {
    fontSize: 14,
    color: TEXT_LIGHT,
    textAlign: "center",
    marginBottom: 30,
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "600",
    marginBottom: 8,
    fontSize: 14,
    color: TEXT_DARK,
  },
  input: {
    height: 52,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: TEXT_DARK,
    backgroundColor: INPUT_BG,
    marginBottom: 16,
  },
  signupBtn: {
    backgroundColor: PRIMARY,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    shadowColor: PRIMARY,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  signupText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  orText: {
    width: 50,
    textAlign: "center",
    color: TEXT_LIGHT,
    fontSize: 12,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    gap: 16,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 10,
  },
  socialText: {
    fontSize: 14,
    fontWeight: "500",
    color: TEXT_DARK,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  loginText: {
    color: TEXT_LIGHT,
    fontSize: 14,
  },
  loginLink: {
    color: PRIMARY,
    fontWeight: "600",
    fontSize: 14,
  },
});
