import { useTheme } from "@/context/theme/theme.context";
import React from "react";
import { Text, TextStyle } from "react-native";
import { FontProps, Variant } from "./font.types";

const variantStyles: Record<Variant, TextStyle> = {
  h1: { fontSize: 32, fontWeight: "bold" },
  h2: { fontSize: 28, fontWeight: "bold" },
  h3: { fontSize: 24, fontWeight: "bold" },
  h4: { fontSize: 20, fontWeight: "600" },
  h5: { fontSize: 18, fontWeight: "600" },
  h6: { fontSize: 16, fontWeight: "500" },
  subtitle1: { fontSize: 16, fontWeight: "400" },
  subtitle2: { fontSize: 14, fontWeight: "400" },
  body1: { fontSize: 16 },
  body2: { fontSize: 14 },
  caption: { fontSize: 12 },
  overline: { fontSize: 10, textTransform: "uppercase", letterSpacing: 1 },
};

export const Label: React.FC<FontProps> = ({
  variant = "body1",
  align,
  color = "text",
  gutterBottom,
  noWrap,
  style,
  weight,
  children,
  ...rest
}) => {
  const { colors } = useTheme();

  const baseStyle = variantStyles[variant] || variantStyles.body1;

  const combinedStyle: TextStyle = {
    ...baseStyle,
    ...(weight && { fontWeight: weight }),
    textAlign: align,
    color: colors[color],
    marginBottom: gutterBottom ? 8 : 0,
  };

  return (
    <Text
      style={[combinedStyle, style]}
      numberOfLines={noWrap ? 1 : undefined}
      ellipsizeMode={noWrap ? "tail" : undefined}
      {...rest}
    >
      {children}
    </Text>
  );
};
