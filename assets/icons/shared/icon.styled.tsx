import { IconProps } from "@/helpers/types/base/style.types";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";
import { getIconSize } from "../helpers/icon.helpers";

export const StyledIcon = (
  props: IconProps & { children: React.ReactNode }
) => {
  const { children, haptic, onPress } = props;

  const styles = getIconSize(props);

  return (
    <PlatformPressable
      onPressIn={(e) => {
        if (process.env.EXPO_OS === "ios" && haptic) {
          Haptics.impactAsync(
            haptic === "strong"
              ? Haptics.ImpactFeedbackStyle.Heavy
              : Haptics.ImpactFeedbackStyle.Light
          );
        }
        onPress?.(e);
        console.log("hit");
      }}
      style={styles}
    >
      {children}
    </PlatformPressable>
  );
};
