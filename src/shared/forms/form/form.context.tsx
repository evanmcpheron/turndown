import { TurndownObject } from "@/src/types";
import React, { createContext, useContext, useState } from "react";
import { useSubscriber } from "../../hooks/useSubscriber.hook";
import { hasProperties } from "./form.helpers";

interface FormContextProps {
  formName: string;
  formErrors: TurndownObject;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = (): FormContextProps | undefined => {
  return useContext(FormContext);
};

export const useFormName = (): string => {
  const context = useContext(FormContext);
  return context?.formName || "";
};

export const useFormErrors = ():
  | { form?: string; errors?: TurndownObject | undefined }
  | undefined => {
  const context = useContext(FormContext);
  const [formErrors, setFormErrors] = useState<TurndownObject>(undefined);

  useSubscriber(
    `turndown:form:errors:${context?.formName}`,
    (errors: TurndownObject) => {
      try {
        if (hasProperties(errors || {})) {
          setFormErrors({
            form: context?.formName || "",
            errors: errors || {},
          });
          return { form: context?.formName || "", errors: errors || {} };
        } else {
          setFormErrors(undefined);
        }
      } catch {
        setFormErrors(undefined);
      }
    }
  );

  return formErrors;
};

interface FormProviderProps {
  formName: string;
  children: React.ReactNode;
  formErrors: TurndownObject;
}

export const FormProvider: React.FC<FormProviderProps> = ({
  formName,
  children,
  formErrors,
}) => {
  return (
    <FormContext.Provider value={{ formName, formErrors }}>
      {children}
    </FormContext.Provider>
  );
};
