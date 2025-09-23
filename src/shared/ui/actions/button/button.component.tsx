import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { useTheme } from "@/src/contexts/theme";
import { withOpacity } from "@/src/shared/styles";
import { SemanticColors } from "@/src/shared/styles/general.styles";
import { Label } from "@/src/shared/ui/data-display/font";
import { Switch } from "@/src/shared/ui/misc/switch";
import { TurndownObject } from "@/src/types";
import { DomProperties } from "@/src/types/common/style.types";
import { router } from "expo-router";
import { normalCase } from "../../../lib/string";

type TurndownButtonTypes =
  | "outline"
  | "filled"
  | "link"
  | "link-button"
  | "filled-secondary";

interface TurndownButtonProps extends DomProperties {
  onPress?: (value: TurndownObject) => void;
  height?: number;
  width?: number;
  fullWidth?: boolean;
  disabled?: boolean;
  to?: TurndownObject | string;
  color?: keyof SemanticColors;
  variant?: TurndownButtonTypes;
  circle?: boolean;
  children: React.ReactNode | string;
}

export const TurndownButton = ({
  onPress,
  disabled = false,
  height = 50,
  width,
  fullWidth = false,
  variant = "filled",
  to = "/",
  color = "primary",
  style,
  circle = false,
  children,
}: TurndownButtonProps) => {
  const { app, colors } = useTheme();

  if (variant === "link" || variant === "link-button") {
    if (variant === "link-button") {
      const bg = withOpacity(colors.primary, app.isDark ? 0.14 : 0.08);
      const border = withOpacity(colors.primary, 0.25);
      return (
        <TouchableOpacity
          disabled={disabled}
          onPress={(e) =>
            !disabled && onPress ? onPress(e) : router.replace(to)
          }
          style={[
            {
              paddingVertical: 0,
              paddingHorizontal: app.spacing[2],
              borderRadius: app.radii.md,
              backgroundColor: bg,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: border,
              opacity: 0.9,
              ...(width && { width }),
              height: variant === "link-button" ? 25 : 50,
              alignItems: "center",
              justifyContent: "center",
            },
            style,
            disabled && {
              backgroundColor: colors.surface3,
              borderColor: colors.outline,
              opacity: app.opacity.disabled,
            },
          ]}
        >
          <Label
            variant={"subtitle2"}
            style={{ color: colors.primary, textAlign: "center" }}
          >
            {children}
          </Label>
        </TouchableOpacity>
      );
    }

    return (
      <Label
        weight="bold"
        onPress={() => !disabled && router.replace(to)}
        color={color}
        style={[style, { width }, disabled && { color: colors.textMuted }]}
      >
        {children}
      </Label>
    );
  }

  return (
    <View style={[style, { height, width: fullWidth ? "100%" : "auto" }]}>
      <Switch>
        <Switch.Case condition={variant === "outline"}>
          <TouchableOpacity
            disabled={disabled}
            onPress={(value) => !disabled && onPress?.(value)}
            style={[
              outlineStyle.container,
              {
                borderColor: colors[color],
                ...(width && { width }),
              },
              ...(circle ? [{ borderRadius: height / 2 }] : []),
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
              ...(circle ? [{ borderRadius: height / 2 }] : []),
              {
                borderColor: colors[color],
                backgroundColor: colors[color],
                ...(width && { width }),
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
        <Switch.Case condition={variant === "filled-secondary"}>
          <TouchableOpacity
            disabled={disabled}
            onPress={(value) => !disabled && onPress?.(value)}
            style={[
              filledStyle.container,
              ...(circle ? [{ borderRadius: height / 2 }] : []),
              {
                borderColor: withOpacity(colors.primary, 0.25),
                backgroundColor: withOpacity(
                  colors.primary,
                  app.isDark ? 0.14 : 0.08
                ),
                opacity: 0.9,
                ...(width && { width }),
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
                  color: colors.primary,
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
              ...(circle ? [{ borderRadius: height / 2 }] : []),
              {
                borderColor: colors[color],
                backgroundColor: colors[color],
                ...(width && { width }),
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
    flex: 1,
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
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
