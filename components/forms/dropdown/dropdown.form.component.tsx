import { globalStyles } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modal } from "../../layouts/modal/modal.layout.component";

export interface SelectOption {
  label: string;
  value: string;
  default?: boolean;
}

interface DropdownProps {
  options: SelectOption[];
  heading?: {
    primary?: string;
    secondary?: string;
  };
  disabled?: boolean;
  placeholder?: string;
  hasFooter?: boolean;
  onSelect: (option: SelectOption) => void;
  defaultValue?: SelectOption;
}

export const Dropdown = ({
  options,
  heading,
  onSelect,
  hasFooter,
  defaultValue,
  disabled = false,
  placeholder = "Select an option",
}: DropdownProps) => {
  const emptyOption: SelectOption = { label: "", value: "" };

  const resolvedDefault = useMemo(() => {
    if (defaultValue) return defaultValue;
    const defaultOpt = options.find((o) => o.default);
    return defaultOpt ?? emptyOption;
  }, [defaultValue, options]);

  const [selected, setSelected] = useState<SelectOption>(resolvedDefault);
  const [confirmed, setConfirmed] = useState<SelectOption>(resolvedDefault);
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
    setSelected(option);
    if (!hasFooter) {
      setConfirmed(option);
      onSelect(option);
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
    <View style={styles.dropdownWrapper}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.input, disabled && styles.disabledWrapper]}
        onPress={handleOpen}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.inputText,
            !selected && styles.placeholderText,
            disabled && styles.disabledWrapper,
          ]}
        >
          {selected?.value ? selected.label : placeholder}
        </Text>
        <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={20}
            style={disabled && styles.disabledWrapper}
          />
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
                selected?.value === option.value && styles.optionSelected,
              ]}
              onPress={() => handleSelect(option)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.optionText,
                  selected?.value === option.value && styles.optionTextSelected,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    backgroundColor: globalStyles.color.grayscale.shade0,
    borderRadius: 12,
    padding: 20,
    shadowColor: globalStyles.color.grayscale.shade12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  disabledWrapper: {
    color: globalStyles.color.grayscale.shade7,
    borderColor: globalStyles.color.grayscale.shade4,
    backgroundColor: globalStyles.color.grayscale.shade4,
  },

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
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  inputText: {
    fontSize: 16,
    color: "#333",
  },
  placeholderText: {
    color: "#aaa",
  },

  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: globalStyles.color.grayscale.shade9,
    backgroundColor: globalStyles.color.grayscale.shade9,
  },
  optionText: {
    fontSize: 16,
    color: globalStyles.color.font.onPrimary,
  },
  optionSelected: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: globalStyles.color.primary,
    backgroundColor: globalStyles.color.primary,
  },
  optionTextSelected: {
    color: globalStyles.color.font.onPrimary,
    fontWeight: "800",
  },
});
