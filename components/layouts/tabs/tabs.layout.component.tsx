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
import { TabsItemProps, TabsProps } from "./tabs.layout.types";

export const Tabs = ({ style, children, centered = false }: TabsProps) => {
  const tabs = useMemo(
    () =>
      Children.toArray(children)
        .filter(isValidElement)
        .filter(
          (el) => el.type === Tabs.Item
        ) as React.ReactElement<TabsItemProps>[],
    [children]
  );

  const defaultTab =
    tabs.find((tab) => tab.props.default)?.props.label ?? tabs[0]?.props.label;
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    defaultTab
  );

  const activeTab = tabs.find((tab) => tab.props.label === selectedLabel);

  return (
    <View style={[styles.container, style] as StyleProp<ViewStyle>}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.tabsContainer,
          centered && styles.centeredContainer,
        ]}
      >
        {tabs.map((tab, idx) => {
          const { label, disabled } = tab.props;
          const isActive = label === selectedLabel;
          return (
            <TouchableOpacity
              key={`tab_${idx}_${label}`}
              onPress={() => !disabled && setSelectedLabel(label)}
              disabled={disabled}
              style={[
                styles.tabItem,
                isActive && styles.activeTabItem,
                disabled && styles.disabledTabItem,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
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

      <View style={styles.separator} />
      <View style={styles.contentContainer}>{activeTab?.props.children}</View>
    </View>
  );
};

const TabsItem: React.FC<TabsItemProps> = ({ children }) => <>{children}</>;
TabsItem.displayName = "TabsItem";
Tabs.Item = TabsItem;

const styles = StyleSheet.create({
  container: { flex: 1 },
  tabsContainer: {
    flexDirection: "row",
  },
  centeredContainer: {
    justifyContent: "center",
    flexGrow: 1,
  },
  tabItem: { paddingVertical: 8, paddingHorizontal: 16 },
  activeTabItem: { borderBottomWidth: 2, borderBottomColor: "#007AFF" },
  disabledTabItem: { opacity: 0.5 },
  tabText: { fontSize: 16, color: "#333" },
  activeTabText: { color: "#007AFF", fontWeight: "bold" },
  disabledTabText: { color: "#999" },
  separator: { height: 1, backgroundColor: "#ddd" },
  contentContainer: { flex: 1, padding: 16 },
});
