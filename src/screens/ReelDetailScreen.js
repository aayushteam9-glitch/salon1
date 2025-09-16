import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Video from "react-native-video";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function ReelDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { reel } = route.params;
  const playerRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* Video */}
      <Video
        source={reel.video}
        ref={playerRef}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={false} // autoplay
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explore</Text>
      </View>

      {/* Overlay Info - Moved to bottom */}
      <View style={styles.overlay}>
        <Text style={styles.username}>@salon_makeover</Text>
        <Text style={styles.caption}>
          From dull to dazzling in just one session! ✂️ Experience the magic of our expert stylists and premium products.{"\n\n"}
          <Text style={styles.hashtags}>#hairTransformation #salonLife #beforeAndAfter #hairGoals #stylist #makeover #haircut #beauty #transformation #glowUp</Text>
        </Text>
      </View>

      {/* Right Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="heart-outline" size={28} color="#fff" />
          <Text style={styles.iconText}>{reel.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="chatbubble-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="share-social-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="bookmark-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="ellipsis-vertical" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  video: { width, height },
  header: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    left: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#fff",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  overlay: { 
    position: "absolute", 
    bottom: 5, // Changed from 100 to 5 to position at bottom
    left: 15, 
    right: 80,
    maxHeight: height * 0.4, // Limit height to prevent overflow
  },
  username: { 
    fontSize: 14, 
    fontWeight: "600", 
    color: "#fff", 
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3
  },
  caption: { 
    fontSize: 14, 
    color: "#fff", 
    lineHeight: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3
  },
  hashtags: {
    color: "#87CEEB", // Light blue color like Instagram
    fontSize: 14,
    fontWeight: "400",
  },
  actions: { 
    position: "absolute", 
    right: 15, 
    bottom: 5, 
    alignItems: "center" 
  },
  iconBtn: { 
    alignItems: "center", 
    marginBottom: 20,
    paddingVertical: 5 // Added padding for better touch area
  },
  iconText: { 
    color: "#fff", 
    fontSize: 11, 
    marginTop: 2,
    fontWeight: "500",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3
  },
});
