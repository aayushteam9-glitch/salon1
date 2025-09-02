import React, { useEffect, useRef } from "react";
import { View, Image, Text, StyleSheet, Animated, Easing } from "react-native";

export default function SplashScreen({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;
    const progressAnim = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        // Animation sequence
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 1200,
                easing: Easing.elastic(1),
                useNativeDriver: true,
            }),
            Animated.timing(progressAnim, {
                toValue: 1,
                duration: 2500,
                easing: Easing.linear,
                useNativeDriver: false, // This needs to be false for width animation
            })
        ]).start();

        const timer = setTimeout(() => {
            navigation.replace("Login"); // Navigate to Login after 2.5 seconds
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const progressWidth = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%']
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.logoContainer,
                {
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }]
                }
            ]}>
                <Image
                    source={require('../assets/splash.png')} // go up one folder to src, then into assets
                    style={styles.logo}
                    resizeMode="contain"
                />
            </Animated.View>
            <Text style={styles.title}>High Looks Ladies Salon</Text>
            <View style={styles.loadingContainer}>
                <View style={styles.loadingBar}>
                    <Animated.View 
                        style={[
                            styles.progressBar, 
                            {
                                width: progressWidth // Use the interpolated value
                            }
                        ]} 
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    logo: {
        height: 240,
        width: 240,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#a00364", // Dark magenta
        marginBottom: 40,
        letterSpacing: 1,
    },
    loadingContainer: {
        width: '60%',
        alignItems: 'center',
    },
    loadingBar: {
        height: 5,
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#a00364',
        borderRadius: 5,
    },
});