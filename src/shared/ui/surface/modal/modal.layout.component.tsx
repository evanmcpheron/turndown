import { Label } from "@/src/shared/ui/data-display/font";
import { ModalProps } from "./modal.layout.component.types";

import { useTheme } from "@/src/contexts/theme";
import { NoticeHost } from "@/src/shared/feedback/notification/notification.host.component";
import { withOpacity } from "@/src/shared/styles";
import { TurndownLoader } from "@/src/shared/ui/data-display/loader";
import React, {
  Children,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Easing,
  KeyboardAvoidingView,
  Modal as NativeModal,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TurndownButton } from "../../actions";

export const Modal = ({
  header,
  isOpen,
  onCancel,
  onSave,
  fullHeight,
  isLoading = false,
  scrollable = false,
  disabled = false,
  isTransparent = true,
  animationType = "fade",
  saveText = "Okay",
  children,
}: ModalProps) => {
  const [hasFooter, setHasFooter] = useState(true);
  const { app } = useTheme();
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: isOpen ? 1 : 0.8,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [isOpen, scaleAnim]);

  const actions = useMemo(
    () =>
      Children.toArray(children)
        .filter(isValidElement)
        .filter(
          (el) => el.type === Modal.Actions
        ) as React.ReactElement<ModalActionProps>[],
    [children]
  );

  const contentChildren = useMemo(
    () =>
      Children.toArray(children)
        .filter(isValidElement)
        .filter((el) => el.type !== Modal.Actions) as React.ReactElement[],
    [children]
  );

  useEffect(() => {
    setHasFooter(!!(onCancel || onSave || actions.length > 0));
  }, [children]);

  return (
    <NativeModal
      animationType={animationType}
      transparent={isTransparent}
      visible={isOpen}
      presentationStyle={isTransparent ? "overFullScreen" : "formSheet"}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <NoticeHost />
        <SafeAreaProvider
          style={[
            {
              flex: 0,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: withOpacity(
                app.colors.background,
                app.opacity.medium
              ),
            },
          ]}
        >
          <Animated.View
            style={[
              styles.container,
              {
                transform: [{ scale: scaleAnim }],
                zIndex: app.zIndex.modal,
                backgroundColor: app.colors.background,
                borderRadius: app.radii.lg,
                overflow: "hidden",
              },
            ]}
          >
            <SafeAreaView
              style={{ flex: 1, backgroundColor: app.colors.navCard }}
            >
              {header && (header.primary || header.secondary) && (
                <View
                  style={[
                    styles.header,
                    {
                      padding: app.spacing[4],
                      borderBottomColor: app.colors.primary,
                      backgroundColor: app.colors.navCard,
                    },
                  ]}
                >
                  {header.primary && (
                    <Label variant="h3">{header.primary}</Label>
                  )}
                  {header.secondary && (
                    <Label variant="subtitle1" style={{ marginTop: 5 }}>
                      {header.secondary}
                    </Label>
                  )}
                </View>
              )}
              {isLoading ? (
                <TurndownLoader />
              ) : (
                <ScrollView
                  nestedScrollEnabled
                  keyboardShouldPersistTaps="handled"
                  scrollEnabled={scrollable}
                  bounces={scrollable}
                  showsVerticalScrollIndicator={scrollable}
                  contentContainerStyle={{
                    ...(!hasFooter && { paddingBottom: app.spacing[4] }),
                    ...(!header && { paddingTop: app.spacing[4] }),
                    paddingTop: app.spacing[4],
                    paddingHorizontal: app.spacing[4],
                    paddingBottom: app.spacing[4],
                    ...(fullHeight && { flex: 1 }),
                  }}
                  style={{ backgroundColor: app.colors.background }}
                >
                  {contentChildren}
                </ScrollView>
              )}
              {hasFooter && (
                <View
                  style={[
                    styles.actions,
                    {
                      padding: app.spacing[4],
                      gap: 10,
                      borderTopColor: app.colors.primary,
                      backgroundColor: app.colors.navCard,
                    },
                  ]}
                >
                  {onCancel && (
                    <TurndownButton
                      style={{ flex: 1 }}
                      onPress={onCancel}
                      variant="outline"
                    >
                      Cancel
                    </TurndownButton>
                  )}
                  {onSave && (
                    <TurndownButton
                      style={{ flex: 1 }}
                      disabled={disabled || isLoading}
                      onPress={onSave}
                    >
                      {saveText}
                    </TurndownButton>
                  )}
                  {actions.map((action, index) => {
                    return <View key={index}>{action.props.children}</View>;
                  })}
                </View>
              )}
            </SafeAreaView>
          </Animated.View>
        </SafeAreaProvider>
      </KeyboardAvoidingView>
    </NativeModal>
  );
};

interface ModalActionProps {
  children: React.ReactElement;
}

Modal.Actions = ({ children }: ModalActionProps) => <>{children}</>;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
  },

  header: {
    borderBottomWidth: 1,
  },
  actions: {
    flexDirection: "row",
    borderTopWidth: 1,
    justifyContent: "space-between",
  },
});
