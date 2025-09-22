import { useTheme } from "@/src/contexts/theme";
import { ChevronLeftIcon } from "@/src/shared/icons/chevron-left.component";
import { Button } from "@/src/shared/ui/actions/button";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownLoader } from "@/src/shared/ui/data-display/loader";
import { Switch } from "@/src/shared/ui/misc/switch";
import { Stepper } from "@/src/shared/ui/navigation/stepper/stepper.layout.component";
import { TurndownSafeView } from "@/src/shared/ui/surface/safe-view";
import { DomProperties } from "@/src/types/common/style.types";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";

export interface PageProps extends DomProperties {
  header?: string;
  headerButton?: React.ReactNode | string;
  footer?: React.ReactNode;
  padding?: number;
  ignoreTop?: boolean;
  ignoreBottom?: boolean;
  ignoreLeft?: boolean;
  ignoreRight?: boolean;
  scrollable?: boolean;
  gap?: number;
  isLoading?: boolean;
  canGoBack?: boolean;
  headerContainerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;

  /** Auto-rendered when <Page.Step/> children are present */
  stepperPlacement?: "header" | "footer";
  stepperContainerStyle?: StyleProp<ViewStyle>;

  /** Optional: start from a non-zero step */
  initialStep?: number;

  /** Optional: allow steps but hide the dots UI */
  hideStepper?: boolean;
}

type PageStepProps = {
  children?: React.ReactNode;
  scrollable?: boolean; // overrides Page.scrollable
  contentContainerStyle?: StyleProp<ViewStyle>;
};

// ---------- Steps context (for children to read/change the step) ----------
export type StepsCtx = {
  current: number;
  total: number;
  next: () => void;
  prev: () => void;
  setCurrent: (i: number) => void;
  hasSteps: boolean;
};
export const StepsContext = React.createContext<StepsCtx | null>(null);

export const usePageSteps = () => {
  const ctx = React.useContext(StepsContext);
  if (!ctx) {
    // Safe fallback if used outside <Page>
    return {
      current: 0,
      total: 0,
      next: () => {},
      prev: () => {},
      setCurrent: () => {},
      hasSteps: false,
    } as StepsCtx;
  }
  return ctx;
};

// Marker component used only for structure
const PageStep: React.FC<PageStepProps> & { __IS_PAGE_STEP?: true } = (
  props
) => {
  // Never rendered directly — picked up by <Page/>
  return <>{props.children}</>;
};
PageStep.__IS_PAGE_STEP = true;
PageStep.displayName = "Page.Step";

export const Page: React.FC<PageProps> & { Step: typeof PageStep } = ({
  header,
  children,
  padding = 10,
  gap = 10,
  scrollable = false,
  headerButton,
  isLoading = false,
  footer,
  headerContainerStyle,
  contentContainerStyle,
  ignoreBottom,
  canGoBack = false,
  ignoreLeft,
  ignoreRight,
  ignoreTop,
  stepperPlacement = "footer",
  stepperContainerStyle,
  initialStep = 0,
  hideStepper = false,
}) => {
  const { colors } = useTheme();

  const withBottomPadding = (
    extra?: StyleProp<ViewStyle>
  ): StyleProp<ViewStyle> => [
    extra,
    {
      paddingBottom: padding + 40,
      gap,
    },
  ];

  // Split children into steps vs. "always-on" children
  const allChildren = React.Children.toArray(children);
  const stepChildren = allChildren.filter(
    (c) => React.isValidElement(c) && (c.type as any)?.__IS_PAGE_STEP === true
  ) as React.ReactElement<PageStepProps>[];

  const alwaysChildren = allChildren.filter(
    (c) =>
      !(React.isValidElement(c) && (c.type as any)?.__IS_PAGE_STEP === true)
  );

  const totalSteps = stepChildren.length;
  const hasSteps = totalSteps > 0;

  // Internal step state
  const [current, setCurrent] = React.useState(
    Math.min(Math.max(initialStep, 0), Math.max(totalSteps - 1, 0))
  );
  React.useEffect(() => {
    // Clamp when steps change dynamically
    if (hasSteps) {
      setCurrent((i) => Math.min(Math.max(i, 0), totalSteps - 1));
    }
  }, [totalSteps, hasSteps]);

  const next = React.useCallback(() => {
    setCurrent((i) => Math.min(i + 1, Math.max(totalSteps - 1, 0)));
  }, [totalSteps]);

  const prev = React.useCallback(() => {
    setCurrent((i) => Math.max(i - 1, 0));
  }, []);

  const renderActive = () => {
    if (!hasSteps) {
      return (
        <Switch>
          <Switch.Case condition={scrollable}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={withBottomPadding([
                { padding, flexGrow: 1, gap },
              ])}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
            >
              {children}
            </ScrollView>
          </Switch.Case>
          <Switch.Case condition={!scrollable}>
            <View
              style={[
                withBottomPadding({
                  flex: 1,
                  padding,
                  gap,
                }),
                contentContainerStyle,
              ]}
            >
              {children}
            </View>
          </Switch.Case>
        </Switch>
      );
    }

    // There ARE steps: show only the active one
    const active = stepChildren[Math.min(Math.max(current, 0), totalSteps - 1)];
    const stepScrollable = active.props.scrollable ?? scrollable;

    const body = (
      <>
        {/* Always-on children render on every step */}
        {alwaysChildren}

        {/* Active step’s content */}
        {active.props.children}
      </>
    );

    if (stepScrollable) {
      return (
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            withBottomPadding({ padding, flexGrow: 1, gap }),
            active.props.contentContainerStyle ?? contentContainerStyle,
          ]}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          {body}
        </ScrollView>
      );
    }

    return (
      <View
        style={[
          withBottomPadding({
            flex: 1,
            padding,
            justifyContent: "center",
            gap,
          }),
          active.props.contentContainerStyle ?? contentContainerStyle,
        ]}
      >
        {body}
      </View>
    );
  };

  const stepperUI =
    hasSteps && !hideStepper ? (
      <View style={[{ padding, alignItems: "center" }, stepperContainerStyle]}>
        <Stepper
          total={totalSteps}
          current={current}
          onChange={setCurrent}
          animated
        />
      </View>
    ) : null;

  const ctxValue: StepsCtx = {
    current,
    total: totalSteps,
    next,
    prev,
    setCurrent,
    hasSteps,
  };

  return (
    <TurndownSafeView
      ignoreBottom={ignoreBottom}
      ignoreTop={ignoreTop}
      ignoreLeft={ignoreLeft}
      ignoreRight={ignoreRight}
    >
      <StepsContext.Provider value={ctxValue}>
        {(header || canGoBack) && (
          <View
            style={[
              { padding },
              {
                borderBottomWidth: 1,
                borderBottomColor: colors.primary,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
              { marginBottom: 0 },
              headerContainerStyle,
            ]}
          >
            {canGoBack ? (
              <Button
                variant="outline"
                width={50}
                circle
                onPress={() => {
                  router.back();
                }}
              >
                <ChevronLeftIcon
                  color="primary"
                  type="regular"
                  size={"small"}
                />
              </Button>
            ) : (
              <View style={{ height: 50, width: 50 }} />
            )}
            <Label variant="h1" style={{ textAlign: "center" }}>
              {header}
            </Label>
            {headerButton ? (
              <View>{headerButton}</View>
            ) : (
              <View style={{ height: 50, width: 50 }} />
            )}
          </View>
        )}

        {stepperPlacement === "header" && <View>{stepperUI}</View>}

        {isLoading ? <TurndownLoader /> : renderActive()}

        {stepperPlacement === "footer" && stepperUI}

        {footer && <View style={[{ padding }]}>{footer}</View>}
      </StepsContext.Provider>
    </TurndownSafeView>
  );
};

Page.Step = PageStep;
