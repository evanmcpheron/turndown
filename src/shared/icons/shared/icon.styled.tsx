import { IconProps } from "@/src/types/common/style.types";
import { View } from "react-native";
import { getIconSize } from "../helpers/icon.helpers";

export const StyledIcon = (
  props: IconProps & { children: React.ReactNode }
) => {
  const { children } = props;

  const styles = getIconSize(props);

  return <View style={styles}>{children}</View>;
};
