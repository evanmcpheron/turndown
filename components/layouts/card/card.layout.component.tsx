import { useTheme } from "@/context/theme/theme.context";
import { AppTheme } from "@/helpers/theme/general.styles";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const Card = ({ title, children }: CardProps) => {
  const { app } = useTheme();
  const styles = useMemo(() => turndownExpandableComponentStyles(app), [app]);
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
};

export const turndownExpandableComponentStyles = (theme: AppTheme) => {
  const iosShadow = {
    shadowColor: theme.colors.onBackground,
    shadowOpacity: theme.elevation[2].ios.opacity,
    shadowRadius: theme.elevation[2].ios.radius,
    shadowOffset: theme.elevation[2].ios.offset,
  };

  return StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing[4],
      borderRadius: theme.radii.lg,
      ...iosShadow,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 12,
      color: "#333",
    },
  });
};
