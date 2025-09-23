import { useTheme } from "@/src/contexts/theme";
import { AppTheme } from "@/src/shared/styles/general.styles";
import { useEffect, useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Label } from "../../data-display/font";
import { Hr } from "../../data-display/hr";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>;
  rounded?: boolean;
  disablePadding?: boolean;
  secondary?: boolean;
}

export const Card = ({
  title,
  style,
  secondary,
  rounded = true,
  disablePadding = false,
  children,
}: CardProps) => {
  const { app } = useTheme();
  const styles = useMemo(() => cardComponentStyles(app), [app]);

  const radius = useSharedValue(rounded ? app.radii.lg : 0);

  useEffect(() => {
    radius.value = withTiming(rounded ? app.radii.lg : 0, { duration: 100 });
  }, [rounded]);

  const animatedStyle = useAnimatedStyle(() => ({
    borderRadius: radius.value,
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        {
          ...(secondary && {
            backgroundColor: app.colors.surface2,
            borderColor: app.colors.surface3,
            borderWidth: 1,
          }),
        },
        { ...(disablePadding && { padding: 0 }) },
        animatedStyle,
        style,
      ]}
    >
      {title && (
        <View>
          <Label align="center" variant="h3" style={styles.title}>
            {title}
          </Label>

          <Hr marginVertical={10} />
        </View>
      )}
      {children}
    </Animated.View>
  );
};

export const cardComponentStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      gap: theme.spacing[3],
      padding: theme.spacing[4],
      borderRadius: theme.radii.lg,
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
