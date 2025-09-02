import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onLogin = () => {
    if (!email.trim() || !password) {
      Alert.alert("Error", "Please enter email and password.");
      return;
    }
    navigation.reset({
    index: 0,
    routes: [{ name: "Dashboard" }],
  });
};

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <KeyboardAvoidingView
      style={styles.outer}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Logo and Header */}
          <View style={styles.header}>
            {/* <Image
              source={require('./assets/logo.png')} // Replace with your logo
              style={styles.logo}
              resizeMode="contain"
            /> */}
            <Text style={styles.title}>Welcome to SalonEase</Text>
            <Text style={styles.subtitle}>Your beauty booking partner</Text>
          </View>

          {/* Form Container */}
          <View style={styles.formContainer}>
            {/* Email Field */}
            <View style={styles.field}>
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputContainer}>
                {/* <Image
                  source={require('./assets/email-icon.png')} // Add email icon
                  style={styles.inputIcon}
                /> */}
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor={PLACEHOLDER}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Password Field */}
            <View style={styles.field}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                {/* <Image
                  source={require('./assets/password-icon.png')} // Add password icon
                  style={styles.inputIcon}
                /> */}
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={PLACEHOLDER}
                  secureTextEntry={secureTextEntry}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeIcon}>
                  {/* <Image
                    source={require('./assets/eye-icon.png')} // Add eye icon
                    style={styles.eyeIconImage}
                  /> */}
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
              style={styles.forgotContainer}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or sign in with</Text>
              <View style={styles.line} />
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialRow}>
              <TouchableOpacity style={[styles.socialBox, styles.googleBox]}>
                <Image
                  source={{
                    uri: "https://img.icons8.com/color/48/google-logo.png",
                  }}
                  style={styles.socialIcon}
                />
                <Text style={styles.socialLabel}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.socialBox, styles.facebookBox]}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
                  }}
                  style={styles.socialIcon}
                />

                <Text style={styles.socialLabel}>Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up */}
          <View style={styles.signupRow}>
            <Text style={styles.signupText}>New here? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signupLink}>Create an Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Color palette
const PRIMARY = "#FF2D78"; // Vibrant pink
const SECONDARY = "#FF8E9E"; // Lighter pink
const BACKGROUND = "#FFF5F7"; // Soft pink background
const TEXT = "#333333";
const TEXT_LIGHT = "#777777";
const PLACEHOLDER = "#C9A0DC";
const WHITE = "#FFFFFF";

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: TEXT,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: TEXT_LIGHT,
    textAlign: "center",
  },
  formContainer: {
    marginBottom: 20,
  },
  field: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: TEXT,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderColor: '#F0D1E0',
    shadowColor: "#F0D1E0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: PRIMARY,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: TEXT,
  },
  eyeIcon: {
    padding: 8,
  },
  eyeIconImage: {
    width: 20,
    height: 20,
    tintColor: TEXT_LIGHT,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 24,
  },
  forgotText: {
    fontSize: 14,
    color: PRIMARY,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: PRIMARY,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 28,
    shadowColor: PRIMARY,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  loginButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: TEXT_LIGHT,
    fontWeight: '500',
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 32,
  },
  socialBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    flex: 1,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  googleBox: {
    backgroundColor: WHITE,
  },
  facebookBox: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  socialLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  signupText: {
    fontSize: 14,
    color: TEXT_LIGHT,
  },
  signupLink: {
    fontSize: 14,
    color: PRIMARY,
    fontWeight: "600",
  },
});