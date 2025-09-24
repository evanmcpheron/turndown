import { useTheme } from "@/src/contexts/theme";
import { ArrowDownIcon } from "@/src/shared/icons/arrow-down.component";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownObject } from "@/src/types";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { Modal } from "../../surface/modal/modal.layout.component";
import { useForm, useFormErrors, useFormName } from "../form";

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
  onSelect?: (option: SelectOption) => void;
  defaultValue?: string;
  ignoreForm?: boolean;
}

export const Dropdown = ({
  name,
  options = [],
  heading,
  onSelect,
  hasFooter,
  defaultValue,
  ignoreForm,
  disabled = false,
  placeholder = "Select an option",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultValue || null
  );
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const formName = useFormName();

  const { app } = useTheme();

  const formErrors = useFormErrors();
  console.log(
    `🚀 ~ dropdown.form.component.tsx:53 ~ Dropdown ~ formErrors: \n`,
    formErrors
  );

  const domRef: TurndownObject = useRef(null);

  const {
    setValue,
    registerField,
    deregisterField,
    subscribe,
    unsubscribe,
    getValue,
  } = useForm({ formName });

  const handleSelect = (option: SelectOption) => {
    setValue(name, option.value);
    onSelect?.(option);

    setSelectedOption(option.value);
    setSelectedLabel(option.label);

    if (!hasFooter) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const formValue = ignoreForm ? undefined : getValue(name);
    if (formValue !== undefined && formValue !== selectedOption) {
      const option = options.find((opt) => opt.value === formValue);
      if (option) {
        setSelectedOption(option.value);
        setSelectedLabel(option.label);
      }
    } else if (selectedOption === null) {
      const initialOption = options.find(
        (option: SelectOption) => option.value === defaultValue
      );

      if (initialOption) {
        setSelectedOption(initialOption.value);
        setSelectedLabel(initialOption.label);
      }
    }
  }, [defaultValue, options, selectedOption, getValue, name]);

  useEffect(() => {
    if (!ignoreForm) {
      registerField(name, selectedOption || defaultValue);

      const handleValueChange = (newValue: string) => {
        const option = options.find((opt) => opt.value === newValue);
        if (option) {
          setSelectedOption(option.value);
          setSelectedLabel(option.label);
        } else {
          setSelectedOption(null);
          setSelectedLabel(null);
        }
      };

      if (formName) {
        subscribe(name, handleValueChange);
      }

      return () => {
        if (!ignoreForm) {
          if (formName) {
            unsubscribe(name, handleValueChange);
          }
          deregisterField(name);
        }
      };
    }
  }, [formName, name, ignoreForm, selectedOption, defaultValue]);

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
    }
  }, [disabled]);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen, rotateAnim]);

  const arrowRotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSave = () => {
    onSelect?.({ label: selectedLabel || "", value: selectedOption || "" });
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
            !selectedOption && { color: app.colors.textMuted },
            disabled && {
              color: app.colors.textMuted,
              borderColor: app.colors.outlineStrong,
              backgroundColor: app.colors.backgroundDisabled,
            },
          ]}
        >
          {selectedLabel ? selectedLabel : placeholder}
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
        scrollable
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

                selectedOption === option.value && {
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
                  selectedOption === option.value && {
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
