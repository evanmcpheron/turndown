import { Button } from "@/components/ui/actions/button/button.component";
import { Typography } from "@/components/ui/typography/typography.component";
import { globalStyles, withOpacity } from "@/constants/Colors";
import { ModalProps } from "./modal.layout.component.types";

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
  Modal as NativeModal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const Modal = ({
  header,
  isOpen,
  onCancel,
  onSave,
  disabled = false,
  isTransparent = true,
  animationType = "fade",
  children,
}: ModalProps) => {
  const [hasFooter, setHasFooter] = useState(true);
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
    >
      <SafeAreaView style={[styles.overlay]}>
        <Animated.View
          style={[
            styles.container,
            ,
            { margin: "20%" },
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <View style={{ maxHeight: "100%" }}>
            {header && (header.primary || header.secondary) && (
              <View style={styles.header}>
                {header.primary && (
                  <Typography variant="h3">{header.primary}</Typography>
                )}
                {header.secondary && (
                  <Typography variant="subtitle1" style={{ marginTop: 5 }}>
                    {header.secondary}
                  </Typography>
                )}
              </View>
            )}
            <ScrollView
              nestedScrollEnabled
              style={[
                styles.content,
                {
                  ...(!hasFooter && {
                    borderRadius: 12,
                    paddingBottom: globalStyles.size.spacing.large,
                  }),
                },
                {
                  ...(!header && {
                    paddingTop: globalStyles.size.spacing.large,
                  }),
                },
                { maxHeight: "100%" },
              ]}
            >
              {contentChildren}
            </ScrollView>
            {hasFooter && (
              <View style={styles.actions}>
                {onCancel && (
                  <Button onPress={onCancel} variant="outline">
                    <Text>Cancel</Text>
                  </Button>
                )}
                {onSave && (
                  <Button disabled={disabled} onPress={onSave}>
                    <Text>Okay</Text>
                  </Button>
                )}
                {actions.map((action, index) => {
                  return <View key={index}>{action.props.children}</View>;
                })}
              </View>
            )}
          </View>
        </Animated.View>
      </SafeAreaView>
    </NativeModal>
  );
};

interface ModalActionProps {
  children: React.ReactElement;
}

Modal.Actions = ({ children }: ModalActionProps) => <>{children}</>;

const styles = StyleSheet.create({
  dismiss: {
    position: "absolute",
    zIndex: 5,
    flex: 1,
    backgroundColor: withOpacity(
      globalStyles.color.grayscale.shade12,
      globalStyles.color.opacity.medium
    ),
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: withOpacity(
      globalStyles.color.grayscale.shade12,
      globalStyles.color.opacity.medium
    ),
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    zIndex: globalStyles.zIndex.modal,
    backgroundColor: globalStyles.color.grayscale.shade0,
    borderRadius: globalStyles.size.borderRadius.x_large,
    ...globalStyles.shadow,
  },
  content: {
    padding: globalStyles.size.spacing.large,
  },
  header: {
    padding: globalStyles.size.spacing.large,
    borderTopRightRadius: globalStyles.size.borderRadius.x_large,
    borderTopLeftRadius: globalStyles.size.borderRadius.x_large,
    borderBottomColor: globalStyles.color.border,
    backgroundColor: globalStyles.color.grayscale.shade1,
    borderBottomWidth: 1,
  },
  actions: {
    padding: globalStyles.size.spacing.large,
    flexDirection: "row",
    borderTopWidth: 1,
    backgroundColor: globalStyles.color.grayscale.shade1,
    borderBottomRightRadius: globalStyles.size.borderRadius.x_large,
    borderBottomLeftRadius: globalStyles.size.borderRadius.x_large,
    borderTopColor: globalStyles.color.border,
    justifyContent: "space-between",
  },
});
