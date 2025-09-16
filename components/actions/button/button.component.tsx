import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Label } from "@/components/font";
import { normalCase } from "@/components/forms/form/form.helpers";
import { Switch } from "@/components/misc/switch";
import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { SemanticColors } from "@/helpers/theme/general.styles";
import { router } from "expo-router";

type ButtonTypes = "outline" | "filled" | "link";

interface ButtonProps {
  onPress?: (value: TurndownObject) => void;
  disabled?: boolean;
  to?: TurndownObject | string;
  color?: keyof SemanticColors;
  variant?: ButtonTypes;
  children: React.ReactElement | string;
}

export const Button = ({
  onPress,
  disabled = false,
  variant = "filled",
  to = "/",
  color = "primary",
  children,
}: ButtonProps) => {
  const { colors } = useTheme();

  if (variant === "link" && to) {
    return (
      <Label
        weight="bold"
        onPress={() => !disabled && router.replace(to)}
        color={color}
        style={{
          ...(disabled && {
            color: colors.textMuted,
            borderColor: colors.outline,
          }),
        }}
      >
        {children}
      </Label>
    );
  }
  return (
    <View>
      <Switch>
        <Switch.Case condition={variant === "outline"}>
          <TouchableOpacity
            disabled={disabled}
            onPress={(value) => !disabled && onPress?.(value)}
            style={[
              outlineStyle.container,
              {
                borderColor: colors[color],
              },
              {
                ...(disabled && {
                  color: colors.textMuted,
                  borderColor: colors.outline,
                }),
              },
            ]}
          >
            <Label
              style={[
                { color: colors[color], textAlign: "center" },
                {
                  ...(disabled && {
                    color: colors.textMuted,
                    borderColor: colors.outline,
                  }),
                },
              ]}
            >
              {children}
            </Label>
          </TouchableOpacity>
        </Switch.Case>
        <Switch.Case condition={variant === "filled"}>
          <TouchableOpacity
            disabled={disabled}
            onPress={(value) => !disabled && onPress?.(value)}
            style={[
              filledStyle.container,
              {
                borderColor: colors[color],
                backgroundColor: colors[color],
              },
              {
                ...(disabled && {
                  color: colors.textMuted,
                  backgroundColor: colors.surface3,
                  borderColor: colors.outlineStrong,
                }),
              },
            ]}
          >
            <Label
              style={[
                {
                  color:
                    colors[`on${normalCase(color)}` as keyof SemanticColors],
                  textAlign: "center",
                },
                {
                  ...(disabled && {
                    color: colors.textMuted,
                    backgroundColor: colors.surface3,
                    borderColor: colors.outlineStrong,
                  }),
                },
              ]}
            >
              {children}
            </Label>
          </TouchableOpacity>
        </Switch.Case>
        <Switch.Default>
          <TouchableOpacity
            disabled={disabled}
            onPress={(value) => !disabled && onPress?.(value)}
            style={[
              filledStyle.container,
              {
                borderColor: colors[color],
                backgroundColor: colors[color],
              },
              {
                ...(disabled && {
                  color: colors.textMuted,
                  backgroundColor: colors.surface3,
                  borderColor: colors.outlineStrong,
                }),
              },
            ]}
          >
            <Label
              style={[
                {
                  color:
                    colors[`on${normalCase(color)}` as keyof SemanticColors],
                  textAlign: "center",
                },
                {
                  ...(disabled && {
                    color: colors.textMuted,
                    backgroundColor: colors.surface3,
                    borderColor: colors.outlineStrong,
                  }),
                },
              ]}
            >
              {children}
            </Label>
          </TouchableOpacity>
        </Switch.Default>
      </Switch>
    </View>
  );
};

const outlineStyle = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

const filledStyle = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
  },
});
