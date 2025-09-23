import { useTheme } from "@/src/contexts/theme";
import { removeUndefined } from "@/src/shared/lib/object";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownObject } from "@/src/types";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useForm, useFormName } from "../form";
import { CheckboxProps } from "./checkbox.types";

export const TurndownCheckbox = ({
  onBlur,
  onFocus,
  onChange,
  checked,
  defaultValue = false,
  errorMessage,
  dirtyMessage,
  name,
  id,
  style,
  className,
  label,
  active,
  labelPosition = "right",
  disabled,
  labelNoWrap,
  ...more
}: CheckboxProps) => {
  const formName = useFormName();
  const domRef: TurndownObject = useRef(null);
  const [internalChecked, setInternalChecked] = useState(
    checked ?? defaultValue
  );
  const { app } = useTheme();
  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  const handleToggle = () => {
    setInternalChecked((prevState) => {
      const newCheckedState = !prevState;
      setValue(name, newCheckedState);
      setTimeout(() => {
        onChange?.(newCheckedState);
      }, 0);
      return newCheckedState;
    });
  };

  useEffect(() => {
    registerField(name, defaultValue);

    const handleValueChange = (newValue: boolean) => {
      setInternalChecked(newValue);
    };

    if (formName) {
      subscribe(name, handleValueChange);
    }

    return () => {
      deregisterField(name);
      if (formName) {
        unsubscribe(name, handleValueChange);
      }
    };
  }, [formName, name]);

  useEffect(() => {
    if (!formName) {
      setInternalChecked(checked ?? false);
    }
  }, [checked, formName]);

  const internalProperties = removeUndefined({
    style: {
      ...(style || {}),
      ...(labelNoWrap ? { whiteSpace: "nowrap" } : {}),
    },
    labelPosition,
    active,
    disabled,
  });

  return (
    <View
      {...internalProperties}
      style={[styles.container] as StyleProp<ViewStyle>}
      ref={domRef}
    >
      {label && labelPosition === "left" && <Label>{label}</Label>}
      <View style={styles.checkboxsContainer}>
        <TouchableOpacity
          onPress={handleToggle}
          disabled={disabled}
          style={[
            styles.checkboxItem,
            {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            },

            disabled && styles.disabledTabItem,
          ]}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: app.colors.background,
              borderColor: app.colors.primary,
              borderWidth: 3,
              borderRadius: 3,
              width: 30,
              height: 30,
            }}
          >
            <View
              style={{
                backgroundColor: internalChecked
                  ? app.colors.primary
                  : app.colors.background,
                borderRadius: 3,
                width: 15,
                height: 15,
              }}
            ></View>
          </View>
        </TouchableOpacity>
      </View>
      {label && labelPosition === "right" && <Label>{label}</Label>}

      <View style={styles.contentContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", alignItems: "center" },
  checkboxsContainer: { flexDirection: "row" },
  checkboxItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  disabledTabItem: { opacity: 0.5 },
  contentContainer: { flex: 1 },
});
