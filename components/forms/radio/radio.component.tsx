import React, { Children, isValidElement, useMemo, useState } from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { RadioItemProps, RadioProps } from "./radio.types";

export const Radio = ({ children }: RadioProps) => {
  const radios = useMemo(
    () =>
      Children.toArray(children)
        .filter(isValidElement)
        .filter(
          (el) => el.type === Radio.Item
        ) as React.ReactElement<RadioItemProps>[],
    [children]
  );

  const defaultTab =
    radios.find((radio) => radio.props.default)?.props.label ??
    radios[0]?.props.label;
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    defaultTab
  );

  const activeTab = radios.find((radio) => radio.props.label === selectedLabel);

  return (
    <View style={[styles.container] as StyleProp<ViewStyle>}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.radiosContainer}
      >
        {radios.map((radio, idx) => {
          const { label, disabled } = radio.props;
          const isActive = label === selectedLabel;
          return (
            <TouchableOpacity
              key={`radio_${idx}_${label}`}
              onPress={() => !disabled && setSelectedLabel(label)}
              disabled={disabled}
              style={[
                styles.radioItem,
                isActive && styles.activeTabItem,
                disabled && styles.disabledTabItem,
              ]}
            >
              <Text
                style={[
                  styles.radioText,
                  isActive && styles.activeTabText,
                  disabled && styles.disabledTabText,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.contentContainer}>{activeTab?.props.children}</View>
    </View>
  );
};

const RadioItem = ({ children }: RadioItemProps) => <>{children}</>;
RadioItem.displayName = "RadioItem";
Radio.Item = RadioItem;

const styles = StyleSheet.create({
  container: { flex: 1 },
  radiosContainer: { flexDirection: "row" },
  radioItem: { paddingVertical: 8, paddingHorizontal: 16 },
  activeTabItem: { borderBottomWidth: 2, borderBottomColor: "#007AFF" },
  disabledTabItem: { opacity: 0.5 },
  radioText: { fontSize: 16, color: "#333" },
  activeTabText: { color: "#007AFF", fontWeight: "bold" },
  disabledTabText: { color: "#999" },
  contentContainer: { flex: 1, padding: 16 },
});
