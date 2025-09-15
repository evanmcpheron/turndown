import React, { useCallback, useEffect, useState } from "react";

import { TurndownObject } from "@/helpers";
import { FormProvider } from "./form.context";
import { getFirstPropertyValue, hasProperties } from "./form.helpers";
import type { FormProps } from "./form.types";
import { useForm } from "./useForm.hook";

const FormComponent = <T extends TurndownObject>({
  name,
  children,
  defaultValues = {} as T,
  editValues = {} as Partial<T>,
  validationModel,
  className,
  style,
}: FormProps<T>) => {
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [formErrors, setFormErrors] = useState<TurndownObject | undefined>({});

  console.log(
    `🚀 ~ form.component.tsx:23 ~ FormComponent ~ notificationMessage: \n`,
    notificationMessage
  );

  const formProxy = useForm({
    formName: name,
    defaultValues,
    validationModel,
    onFormErrors: (errors) => {
      if (errors && hasProperties(errors)) {
        setFormErrors({ form: name, errors: errors });
        setNotificationMessage(getFirstPropertyValue(errors));
      } else {
        setFormErrors(undefined);
      }
    },
    onHandleSubmit: () => { },
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

  const internalProperties = useCallback(
    () => ({
      className: `turndown-form ${className || ""}`,
      style: style || {},
      id: name,
    }),
    [className, name, style]
  );

  return (
    <>
      {/* {showNotification && (
				<Notification
					message={notificationMessage}
					bgColor={Color.redDark}
					color={Color.white}
					position="top"
					duration={3000}
					isPermanent={false}
					onDismiss={() => setShowNotification(false)}
				/>
			)} */}
      <FormProvider formName={name} formErrors={formErrors}>
        {children}
        {/* <FormContainer {...internalProperties()}>{children}</FormContainer> */}
      </FormProvider>
    </>
  );
};

export const Form = React.memo(FormComponent);
