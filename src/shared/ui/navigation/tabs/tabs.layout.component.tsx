import { useTheme } from "@/src/contexts/theme";
import { AppTheme } from "@/src/shared/styles";
import React, { Children, isValidElement, useMemo, useState } from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Label } from "../../data-display/font";
import { TabsItemProps, TabsProps } from "./tabs.layout.types";

export const Tabs = ({ style, children, centered = false }: TabsProps) => {
  const { app } = useTheme();
  const styles = useMemo(() => tabsStyles(app), [app]);
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
          const { label, disabled, active, onPress } = tab.props;
          // const isActive = label === selectedLabel || active;
          return (
            <TouchableOpacity
              key={`tab_${idx}_${label}`}
              onPress={() => {
                if (disabled) return;
                onPress?.(label);
                setSelectedLabel(label);
              }}
              disabled={disabled}
              style={[
                styles.tabItem,
                active && styles.activeTabItem,
                disabled && styles.disabledTabItem,
              ]}
            >
              <Label
                {...(active && { color: "primary" })}
                style={[disabled && styles.disabledTabText]}
              >
                {label}
              </Label>
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

const tabsStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: { flex: 1 },
    tabsContainer: {
      flexDirection: "row",
      maxHeight: 50,
    },
    centeredContainer: {
      justifyContent: "center",
    },
    tabItem: { paddingVertical: 8, paddingHorizontal: 16 },
    activeTabItem: {
      borderBottomWidth: 3,
      borderBottomColor: theme.colors.primary,
    },
    disabledTabItem: { opacity: 0.5 },
    disabledTabText: { color: theme.colors.textMuted },
    separator: { height: 1, backgroundColor: theme.colors.textMuted },
    contentContainer: { flex: 1, paddingTop: 16 },
  });
