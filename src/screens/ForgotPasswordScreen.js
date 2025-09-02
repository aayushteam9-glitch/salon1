import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [timer, setTimer] = useState(30);
  const [showPasswordInputs, setShowPasswordInputs] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    let interval;
    if (codeSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [codeSent, timer]);

  const handleSendCode = () => {
    if (!email && !mobile) {
      alert("Please enter your email or mobile number.");
      return;
    }

    if (mobile && mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }

    setCodeSent(true);
    setTimer(30);
    console.log("Verification code sent to:", email || mobile);
  };

  const handleVerifyCode = () => {
    if (verificationCode.length !== 6) {
      alert("Please enter a valid 6-digit code.");
      return;
    }

    // You can add actual backend validation here
    setShowPasswordInputs(true);
  };

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password reset successful!");
    navigation.replace("Login"); // go back to login
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Reset Your Glam Look 💅</Text>
        <Text style={styles.subtitle}>
          Enter your registered email or mobile to receive a verification code.
        </Text>

        {!showPasswordInputs && (
          <>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#a17ca0"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Text style={styles.orText}>— OR —</Text>

            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="#a17ca0"
              style={styles.input}
              value={mobile}
              onChangeText={(text) => setMobile(text.replace(/[^0-9]/g, ""))}
              keyboardType="phone-pad"
              maxLength={10}
            />

            {codeSent && (
              <TextInput
                placeholder="Enter 6-digit code"
                placeholderTextColor="#a17ca0"
                style={styles.input}
                keyboardType="number-pad"
                maxLength={6}
                value={verificationCode}
                onChangeText={setVerificationCode}
              />
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={codeSent ? handleVerifyCode : handleSendCode}
            >
              <Text style={styles.buttonText}>
                {codeSent ? "Verify Code" : "Send Verification Code"}
              </Text>
            </TouchableOpacity>

            {codeSent && (
              <Text style={styles.resendText}>Resend code in {timer}s</Text>
            )}
          </>
        )}

        {showPasswordInputs && (
          <>
            <TextInput
              placeholder="New Password"
              placeholderTextColor="#a17ca0"
              secureTextEntry
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
            />

            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#a17ca0"
              secureTextEntry
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backLink}
        >
          <Text style={styles.backText}>← Back to Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f6",
    justifyContent: "center",
  },
  innerContainer: {
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#b3006e",
    marginBottom: 10,
    fontFamily: "System",
  },
  subtitle: {
    fontSize: 14,
    color: "#6e477a",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#d7a9c4",
    backgroundColor: "#fff8fb",
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
    color: "#000",
  },
  orText: {
    marginVertical: 4,
    fontSize: 13,
    color: "#a17ca0",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#e91e63",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#e91e63",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resendText: {
    marginTop: 12,
    fontSize: 14,
    color: "#8e4e72",
  },
  backLink: {
    marginTop: 24,
  },
  backText: {
    color: "#b3006e",
    fontSize: 14,
  },
});
