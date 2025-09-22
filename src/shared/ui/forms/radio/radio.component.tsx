import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownObject } from "@/src/types";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { SelectOption } from "../dropdown/dropdown.form.component";
import { useForm, useFormErrors, useFormName } from "../form";
import { hasOwnProp, validateInternalComponent } from "../form/form.helpers";
import { RadioProps } from "./radio.types";

export const Radio = ({ name, defaultValue, options }: RadioProps) => {
  const resolvedDefault = useMemo((): string => {
    if (defaultValue) return defaultValue;
    const defaultOpt = options.find((o) => o.default)?.value;
    return defaultOpt ?? "";
  }, [defaultValue, options]);

  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    resolvedDefault
  );
  const [showError, setShowError] = useState<boolean>(false);

  const formName = useFormName();
  const { app } = useTheme();

  const formErrors = useFormErrors();
  const domRef: TurndownObject = useRef(null);

  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  useEffect(() => {
    console.log(name, resolvedDefault);

    registerField(name, resolvedDefault);

    const handleValueChange = (newValue: TurndownObject) => {
      setSelectedLabel(newValue ?? "");
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
      setSelectedLabel(defaultValue ?? "");
    }
  }, [defaultValue, formName]);

  useEffect(() => {
    if (formErrors && formErrors.form === formName) {
      if (hasOwnProp(formErrors.errors, name)) {
        setShowError(true);
      } else {
        setShowError(false);
      }
    } else {
      setShowError(false);
    }
  }, [formErrors]);

  useEffect(() => {
    const validateMessage = validateInternalComponent(
      formName,
      name,
      selectedLabel
    );
    setShowError(!!validateMessage);
  }, [selectedLabel]);

  const handleSelected = (option: SelectOption) => {
    setSelectedLabel(option.value);
    setValue(name, option.value);

    const errorMsg = validateInternalComponent(formName, name, option.value);
    setShowError(!!errorMsg);
  };

  return (
    <View style={[styles.container] as StyleProp<ViewStyle>} ref={domRef}>
      <View style={styles.radiosContainer}>
        {options.map((option, idx) => {
          const { label, value } = option;
          const isActive = value === selectedLabel;
          const disabled =
            option.hasOwnProperty("disabled") && (option as any).disabled;
          return (
            <TouchableOpacity
              key={`radio_${idx}_${label}`}
              onPress={() => !disabled && handleSelected(option)}
              disabled={disabled}
              style={[
                styles.radioItem,
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
                  borderRadius: "50%",
                  width: 30,
                  height: 30,
                }}
              >
                <View
                  style={{
                    backgroundColor: isActive
                      ? app.colors.primary
                      : app.colors.background,
                    borderRadius: "50%",
                    width: 15,
                    height: 15,
                  }}
                ></View>
              </View>
              <Label
                style={[
                  isActive && { color: app.colors.primary, fontWeight: "bold" },
                  disabled && { color: app.colors.textMuted },
                ]}
              >
                {label}
              </Label>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Content rendering logic is gone, unless you want to associate children with options */}
      <View style={styles.contentContainer}>
        {/* You could render activeOption.value or other custom content */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  radiosContainer: { flexDirection: "column" },
  radioItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  disabledTabItem: { opacity: 0.5 },
  contentContainer: { flex: 1 },
});
