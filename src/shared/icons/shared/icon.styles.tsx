import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import { StyleProp, View } from "react-native";
import { getIconSize } from "../helpers/icon.helpers";

export const StyledIcon = (
  props: IconProps & {
    children: React.ReactNode;
    style?: StyleProp<TurndownObject>;
  }
) => {
  const { children, style } = props;

  const styles = getIconSize(props);

  return <View style={[styles, style]}>{children}</View>;
};
