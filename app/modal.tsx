import { Label } from "@/components/font";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Label style={styles.title}>Modal</Label>
      <View style={styles.separator} />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
