// hr.component.tsx

import { useTheme } from "@/context/theme/theme.context";
import { View } from "react-native";
import { hrComponentStyles } from "./hr.styled";
import { HrProps } from "./hr.types";

export const Hr = ({ marginHorizontal, marginVertical }: HrProps) => {
  const { colors } = useTheme();
  const styles = hrComponentStyles(colors.primary);
  return (
    <View
      style={[
        styles.container,
        { marginHorizontal: !!marginHorizontal ? marginHorizontal : 0 },
        { marginVertical: !!marginVertical ? marginVertical : 0 },
      ]}
    ></View>
  );
};
