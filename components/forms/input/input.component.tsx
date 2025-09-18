import React, { useEffect, useRef, useState } from "react";

import { CalculatorIcon } from "@/assets/icons/calculator.component";
import { EyeSlashIcon } from "@/assets/icons/eye-slash.component";
import { EyeIcon } from "@/assets/icons/eye.component";
import { XmarkIcon } from "@/assets/icons/xmark.component";
import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useForm } from "../form";
import { useFormErrors, useFormName } from "../form/form.context";
import { hasOwnProp, validateInternalComponent } from "../form/form.helpers";
import type { InputProps } from "./input.types";

export const Input: React.FC<InputProps> = ({
  onBlur,
  onFocus,
  onChange,
  onIconClick,
  placeholder,
  label,
  defaultValue,
  disabled,
  name,
  type = "text",
  clear = false,
  autoComplete = "off",
  minNumber,
  maxNumber,
  ignoreError,
  value,
  readOnly,
}) => {
  console.log(
    `🚀 ~ input.component.tsx:35 ~ Input ~ autoComplete: \n`,
    label,
    autoComplete,
    minNumber,
    maxNumber
  );

  const formName = useFormName();
  const { colors, app } = useTheme();

  const formErrors = useFormErrors();
  const domRef: TurndownObject = useRef(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(
    value ?? defaultValue ?? ""
  );

  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  useEffect(() => {
    registerField(name, defaultValue);

    const handleValueChange = (newValue: TurndownObject) => {
      setInputValue(newValue ?? "");
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
      setInputValue(value ?? "");
    }
  }, [value, formName]);

  useEffect(() => {
    setInputValue(defaultValue ?? "");
  }, [defaultValue]);

  useEffect(() => {
    const validateMessage = validateInternalComponent(
      formName,
      name,
      inputValue
    );
    if (validateMessage) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [inputValue]);

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

  const handleChange = (e: TurndownObject) => {
    console.log(e);

    let newValue = e ?? "";

    setInputValue(newValue ?? "");
    setValue(name, newValue);

    if (onChange) onChange(e);

    const errorMsg = validateInternalComponent(formName, name, newValue);
    if (errorMsg) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  const handleFocus = (e: TurndownObject) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: TurndownObject) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const clearInput = () => {
    setInputValue("");
    setValue(name, "");
    if (onChange) onChange({ target: { value: " " } } as TurndownObject);
  };

  return (
    <>
      <View
        style={[
          {
            margin: 0,
            padding: 0,
            minHeight: 48,
            borderWidth: 1.5,
            borderColor: disabled
              ? colors.outlineStrong
              : isFocused
              ? colors.primary
              : colors.outline,
            borderRadius: 8,
            paddingHorizontal: 12,
            justifyContent: "center",
            backgroundColor: disabled ? colors.outline : colors.onPrimary,
          },
          !ignoreError && showError && { borderColor: colors.danger },
        ]}
      >
        <TextInput
          readOnly={readOnly}
          editable={!disabled}
          keyboardType={type === "number" ? "numeric" : "default"}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={handleChange}
          secureTextEntry={type === "password" && !showPassword}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          ref={domRef}
          value={inputValue}
          style={[
            {
              color: colors.text,
              fontSize: app.typography.size.lg,
              paddingVertical: 10,
            },
            disabled && { backgroundColor: colors.outline },
          ]}
        />
        <View style={styles.adornmentRight}>
          {type === "password" && (
            <Pressable
              onPress={togglePasswordVisibility}
              hitSlop={8}
              style={styles.iconBtn}
            >
              {showPassword ? (
                <EyeIcon size="large" type="regular" />
              ) : (
                <EyeSlashIcon size="large" type="regular" />
              )}
            </Pressable>
          )}

          {type === "calculation" && (
            <View>
              <CalculatorIcon
                size="large"
                type={"regular"}
                onPress={onIconClick}
              />
            </View>
          )}
          {clear && inputValue !== "" && (
            <View>
              <XmarkIcon size="large" type="regular" onPress={clearInput} />
            </View>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  adornmentLeft: {
    position: "absolute",
    left: 8,
    height: "100%",
    justifyContent: "center",
  },
  adornmentRight: {
    position: "absolute",
    right: 8,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconBtn: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
});
