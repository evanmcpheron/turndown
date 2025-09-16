import { globalStyles } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.color.background,
    // margin: globalStyles.size.spacing.medium,
    borderRadius: globalStyles.size.borderRadius.x_large,
    padding: globalStyles.size.spacing.medium,
    alignItems: "center",
    shadowColor: globalStyles.color.black,
    shadowOffset: globalStyles.color.shadowOffset.medium,
    shadowOpacity: globalStyles.color.opacity.high,
    shadowRadius: globalStyles.size.borderRadius.x_large,
    elevation: globalStyles.size.elevation.high,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
});
