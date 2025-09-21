import { ArrowDownIcon } from "@/assets/icons/arrow-down.component";
import { Label } from "@/components/font";
import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { Modal } from "../../layouts/modal/modal.layout.component";
import { useForm, useFormErrors, useFormName } from "../form";
import { hasOwnProp, validateInternalComponent } from "../form/form.helpers";

export interface SelectOption {
  label: string;
  value: string;
  default?: boolean;
}

interface DropdownProps {
  name: string;
  options: SelectOption[];
  heading?: {
    primary?: string;
    secondary?: string;
  };
  disabled?: boolean;
  placeholder?: string;
  hasFooter?: boolean;
  onSelect: (option: string) => void;
  defaultValue?: string;
}

export const Dropdown = ({
  name,
  options,
  heading,
  onSelect,
  hasFooter,
  defaultValue,
  disabled = false,
  placeholder = "Select an option",
}: DropdownProps) => {
  const emptyOption: SelectOption = { label: "", value: "" };
  const { app } = useTheme();

  const [showError, setShowError] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(defaultValue || "");

  const formName = useFormName();

  const formErrors = useFormErrors();
  const domRef: TurndownObject = useRef(null);

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
      setInputValue(defaultValue ?? "");
    }
  }, [defaultValue, formName]);

  useEffect(() => {
    setInputValue("");
  }, []);

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
      inputValue
    );
    setShowError(!!validateMessage);
  }, [inputValue]);

  const resolvedDefault = useMemo((): string => {
    if (defaultValue) return defaultValue;
    const defaultOpt = options.find((o) => o.default)?.value;
    return defaultOpt ?? "";
  }, [defaultValue, options]);

  const [selected, setSelected] = useState<string>(resolvedDefault);
  const [confirmed, setConfirmed] = useState<string>(resolvedDefault);
  const [isOpen, setIsOpen] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen, rotateAnim]);

  useEffect(() => {
    setConfirmed(resolvedDefault);
    setSelected(resolvedDefault);
  }, [resolvedDefault]);

  const arrowRotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const handleOpen = () => {
    setSelected(confirmed);
    setIsOpen(true);
  };

  const handleSelect = (option: SelectOption) => {
    setSelected(option.value);
    if (!hasFooter) {
      setValue(name, option.value);
      setConfirmed(option.value);
      onSelect(option.value);
      setIsOpen(false);
    }
  };

  const handleCancel = () => {
    setSelected(confirmed);
    setIsOpen(false);
  };

  const handleSave = () => {
    setConfirmed(selected);
    onSelect(selected);
    setIsOpen(false);
  };

  return (
    <View style={styles.dropdownWrapper} ref={domRef}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 12,
            paddingHorizontal: 12,
            margin: 0,
            minHeight: 48,
            borderWidth: 1.5,
            borderColor: app.colors.outline,
            borderRadius: 8,
            backgroundColor: app.colors.onPrimary,
          },
          disabled && {
            // color: app.colors.textMuted,
            borderColor: app.colors.outlineStrong,
            backgroundColor: app.colors.backgroundDisabled,
          },
        ]}
        onPress={handleOpen}
        activeOpacity={0.7}
      >
        <Label
          style={[
            !selected && { color: app.colors.textMuted },
            disabled && {
              color: app.colors.textMuted,
              borderColor: app.colors.outlineStrong,
              backgroundColor: app.colors.backgroundDisabled,
            },
          ]}
        >
          {selected ? selected : placeholder}
        </Label>
        <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
          <ArrowDownIcon type="regular" />
        </Animated.View>
      </TouchableOpacity>

      <Modal
        header={{
          primary: heading?.primary,
          secondary: heading?.secondary,
        }}
        {...(hasFooter && { onCancel: handleCancel })}
        {...(hasFooter && { onSave: handleSave })}
        disabled={disabled}
        isOpen={isOpen}
      >
        <View>
          {options.map((option, index) => (
            <TouchableOpacity
              key={`dropdown-selection-${option.value}-${index}`}
              style={[
                styles.option,
                {
                  borderColor: app.colors.outline,
                  backgroundColor: app.colors.onPrimary,
                },

                selected === option.value && {
                  borderColor: app.colors.primary,
                  backgroundColor: app.colors.primary,
                },
              ]}
              onPress={() => handleSelect(option)}
              activeOpacity={0.7}
            >
              <Label
                style={[
                  styles.optionText,
                  selected === option.value && {
                    color: app.colors.onPrimary,
                  },
                ]}
              >
                {option.label}
              </Label>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  dropdownWrapper: {
    width: "100%",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8,
  },
  inputText: {
    fontSize: 16,
  },
  placeholderText: {},

  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  optionSelected: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
  },
  optionTextSelected: {
    fontWeight: "800",
  },
});
