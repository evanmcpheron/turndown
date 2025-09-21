// turndown.room.create.form.styled.ts

import { withOpacity } from "@/helpers/theme";
import { AppTheme } from "@/helpers/theme/general.styles";
import { StyleSheet } from "react-native";

export const roomCreateFormComponentStyles = (theme: AppTheme) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const iosShadow = {
    shadowColor: theme.colors.onBackground,
    shadowOpacity: theme.elevation[2].ios.opacity,
    shadowRadius: theme.elevation[2].ios.radius,
    shadowOffset: theme.elevation[2].ios.offset,
  };

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    segmentWrap: {
      borderRadius: theme.radii.lg,
      padding: 10,
      backgroundColor: withOpacity(
        theme.colors.primary,
        theme.isDark ? 0.1 : 0.06
      ),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: withOpacity(theme.colors.primary, 0.25),
    },
  });
};
