import { useTheme } from "@/src/contexts/theme";
import { AppTheme } from "@/src/shared/styles/general.styles";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Label } from "../../data-display/font";
import { Hr } from "../../data-display/hr";

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const Card = ({ title, children }: CardProps) => {
  const { app } = useTheme();
  const styles = useMemo(() => cardComponentStyles(app), [app]);
  return (
    <View style={styles.container}>
      {title && (
        <View>
          <Label align="center" variant="h3" style={styles.title}>
            {title}
          </Label>
          <Hr marginVertical={10} />
        </View>
      )}
      {children}
    </View>
  );
};

export const cardComponentStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      // backgroundColor: theme.colors.surface,
      // padding: theme.spacing[4],
      // borderRadius: theme.radii.lg,

      gap: theme.spacing[3],
      padding: theme.spacing[4],
      borderRadius: theme.radii.xl,
      backgroundColor: theme.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.outline,
      elevation: theme.elevation[1].android,
    },
    title: {
      color: theme.colors.text,
    },
  });
};
