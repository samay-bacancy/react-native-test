import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function LoginScreen() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const value = await AsyncStorage.getItem("isLoggedIn");
      if (value === "true") {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
    }
  };

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Login Screen
      </ThemedText>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
