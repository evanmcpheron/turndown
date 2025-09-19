import React, { useEffect, useState } from "react";

import { showErrorNotification } from "@/components/actions/notification/notification.helper";
import {
  StepsContext,
  StepsCtx,
} from "@/components/layouts/page/page.layout.component";
import { Stepper } from "@/components/layouts/stepper/stepper.layout.component";
import { Switch } from "@/components/misc/switch";
import { TurndownObject } from "@/helpers";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
import { FormProvider } from "./form.context";
import { getFirstPropertyValue, hasProperties } from "./form.helpers";
import type { FormProps } from "./form.types";
import { useForm } from "./useForm.hook";

type FormStepProps = {
  children?: React.ReactNode;
  scrollable?: boolean; // overrides Page.scrollable
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const FormStep: React.FC<FormStepProps> & { __IS_FORM_STEP?: true } = (
  props
) => {
  return <>{props.children}</>;
};

FormStep.__IS_FORM_STEP = true;
FormStep.displayName = "Form.Step";

type FormComponentProps<T extends TurndownObject> = FormProps<T> &
  FormStepProps;

const Form = <
  T extends TurndownObject & {
    stepperPlacement?: "header" | "footer";
    stepperContainerStyle?: StyleProp<ViewStyle>;
    initialStep?: number;
    hideStepper?: boolean;
    Step: typeof FormStep;
  }
>({
  name,
  children,
  defaultValues = {} as T,
  editValues = {} as Partial<T>,
  validationModel,
  stepperPlacement = "footer",
  stepperContainerStyle,
  initialStep = 0,
  hideStepper = false,
}: FormComponentProps<T>) => {
  const [formErrors, setFormErrors] = useState<TurndownObject | undefined>({});

  const allChildren = React.Children.toArray(children);
  const stepChildren = allChildren.filter(
    (child) =>
      React.isValidElement(child) &&
      (child.type as any)?.__IS_FORM_STEP === true
  ) as React.ReactElement<FormStepProps>[];

  const alwaysChildren = allChildren.filter(
    (child) =>
      !(
        React.isValidElement(child) &&
        (child.type as any)?.__IS_FORM_STEP === true
      )
  );

  const totalSteps = stepChildren.length;
  const hasSteps = totalSteps > 0;

  const [current, setCurrent] = React.useState(
    Math.min(Math.max(initialStep, 0), Math.max(totalSteps - 1, 0))
  );
  React.useEffect(() => {
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
      // No <Page.Step/> children: render everything as before
      return (
        <Switch>
          <Switch.Case condition={false}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[{ flexGrow: 1, gap: 10 }]}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
            >
              {children}
            </ScrollView>
          </Switch.Case>
          <Switch.Case condition={!false}>
            <View style={[{ flex: 1, justifyContent: "center", gap: 10 }]}>
              {children}
            </View>
          </Switch.Case>
        </Switch>
      );
    }

    // There ARE steps: show only the active one
    const active = stepChildren[Math.min(Math.max(current, 0), totalSteps - 1)];
    const stepScrollable = active.props.scrollable ?? false;

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
          contentContainerStyle={[{ padding: 10, flexGrow: 1, gap: 10 }]}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          {body}
        </ScrollView>
      );
    }

    return (
      <View
        style={[{ flex: 1, padding: 10, justifyContent: "center", gap: 10 }]}
      >
        {body}
      </View>
    );
  };

  const stepperUI =
    hasSteps && !hideStepper ? (
      <View
        style={[{ padding: 10, alignItems: "center" }, stepperContainerStyle]}
      >
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

  const formProxy = useForm({
    formName: name,
    defaultValues,
    validationModel,
    onFormErrors: (errors) => {
      if (errors && hasProperties(errors)) {
        setFormErrors({ form: name, errors: errors });
        showErrorNotification(getFirstPropertyValue(errors));
      } else {
        setFormErrors(undefined);
      }
    },
    onHandleSubmit: () => {},
  });

  useEffect(() => {
    if (editValues && formProxy) {
      const setNestedValues = (obj: TurndownObject, parentKey = "") => {
        Object.entries(obj).forEach(([key, value]) => {
          const fullKey = parentKey ? `${parentKey}.${key}` : key;

          if (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)
          ) {
            setNestedValues(value, fullKey);
          } else {
            formProxy.setValue(fullKey, value);
          }
        });
      };

      setNestedValues(editValues);
    }

    return () => {
      formProxy?.deregisterField(name);
    };
  }, [editValues, formProxy, name]);

  return (
    <StepsContext.Provider value={ctxValue}>
      {stepperPlacement === "header" && stepperUI}
      <FormProvider formName={name} formErrors={formErrors}>
        {renderActive()}
      </FormProvider>

      {stepperPlacement === "footer" && stepperUI}
    </StepsContext.Provider>
  );
};

export { Form };

Form.Step = FormStep;
