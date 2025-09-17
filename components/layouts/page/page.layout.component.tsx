import { Label } from "@/components/font";
import { Switch } from "@/components/misc/switch";
import { useTheme } from "@/context/theme/theme.context";
import { DomProperties } from "@/helpers/types/base/style.types";
import React from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface PageProps extends DomProperties {
  header?: string;
  headerButton?: React.ReactNode | string;
  padding?: number;
  scrollable?: boolean;
  gap?: number;
  headerContainerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const Page: React.FC<PageProps> = ({
  header,
  children,
  padding = 10,
  gap = 10,
  scrollable = false,
  headerButton,
  headerContainerStyle,
  contentContainerStyle,
}) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      {header && (
        <View
          style={[
            { padding },
            { borderBottomWidth: 1, borderBottomColor: colors.primary },
            headerContainerStyle,
          ]}
        >
          <Label variant="h1" style={{ textAlign: "center" }}>
            {header}
          </Label>
          {headerButton && (
            <View style={{ position: "absolute", top: 34, right: 20 }}>
              {headerButton}
            </View>
          )}
        </View>
      )}
      <Switch>
        <Switch.Case condition={scrollable}>
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
              { padding, flexGrow: 1, gap },
              contentContainerStyle,
            ]}
          >
            {children}
          </ScrollView>
        </Switch.Case>
        <Switch.Case condition={!scrollable}>
          <View
            style={[
              { flex: 1, padding, flexGrow: 1, justifyContent: "center", gap },
              contentContainerStyle,
            ]}
          >
            {children}
          </View>
        </Switch.Case>
        <Switch.Default>
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
              { padding, flexGrow: 1 },
              contentContainerStyle,
            ]}
          >
            {children}
          </ScrollView>
        </Switch.Default>
      </Switch>
    </SafeAreaView>
  );
};
