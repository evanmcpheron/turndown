import { colorList } from "@/constants/Colors";
import { CSSColor } from "@/types/style.types";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Modal as RNModal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ColorPickerProps {
  label?: string;
  onSave: (color: CSSColor) => void;
  disabled?: boolean;
  onCancel: () => void;
  showColorPicker: boolean;
  defaultColor?: CSSColor;
}

export const ColorPicker = ({
  onSave,
  onCancel,
  showColorPicker,
  disabled,
  label,
  defaultColor,
}: ColorPickerProps) => {
  const [selected, setSelected] = useState<CSSColor | null>(null);

  useEffect(() => {
    if (defaultColor) setSelected(defaultColor);
  }, [defaultColor]);

  return (
    <RNModal
      visible={showColorPicker}
      animationType="slide"
      transparent
      onRequestClose={() => {
        setSelected(null);
        onCancel();
      }}
    >
      <View
        style={[
          { backgroundColor: selected || "#000" },
          StyleSheet.absoluteFill,
        ]}
      />

      <View style={styles.sheet}>
        <View style={styles.handle} />

        {label && <Text style={styles.header}>{label}</Text>}

        <View style={styles.grid}>
          {colorList.map((color) => {
            const isSel = selected === color;
            return (
              <TouchableOpacity
                key={color}
                onPress={() => setSelected(color)}
                style={[styles.circleWrapper, isSel && styles.selectedWrapper]}
              >
                <View style={[styles.circle, { backgroundColor: color }]} />
                {isSel && (
                  <Ionicons
                    name="checkmark"
                    size={16}
                    color="#007AFF"
                    style={styles.check}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => {
              setSelected(null);
              onCancel();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onSave(selected as CSSColor);
            }}
            style={[styles.button, !selected && styles.disabledButton]}
            disabled={!selected}
          >
            <Text style={[styles.buttonText, !selected && styles.disabledText]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  sheet: {
    marginTop: "auto",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 8,
    paddingBottom: 32,
    alignItems: "center",
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: "#CCC",
    borderRadius: 2.5,
    marginBottom: 12,
  },
  header: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  circleWrapper: {
    width: 44,
    height: 44,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  selectedWrapper: {
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  check: {
    position: "absolute",
  },
  actions: {
    flexDirection: "row",
    marginTop: 24,
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 40,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 17,
    color: "#007AFF",
    fontWeight: "600",
  },
  disabledButton: {
    opacity: 0.4,
  },
  disabledText: {
    color: "#AAA",
  },
});
