import { TurndownObject } from "@/helpers";
import { hasProperties } from "./form.helpers";
import { createFormProxy, type FormProxy } from "./form.proxy";

interface UseFormProps {
  formName?: string;
  defaultValues?: TurndownObject;
  validationModel?: Record<string, (value: TurndownObject) => string | null>;
  onFormErrors?: (errors: TurndownObject) => void;
  onHandleSubmit?: (formData: TurndownObject) => void;
  onHandleUpdate?: (formData: TurndownObject) => TurndownObject;
}

const noopProxy: FormProxy = {
  setValue: () => { },
  getValue: () => undefined,
  getFormState: () => ({}),
  registerField: () => { },
  deregisterField: () => { },
  submitForm: () => { },
  subscribe: () => { },
  unsubscribe: () => { },
  onFormErrorsListeners: [],
  onHandleSubmitListeners: [],
  onHandleUpdateListeners: [],
  reset: () => { },
};

export const useForm = ({
  formName,
  defaultValues = {},
  validationModel,
  onFormErrors,
  onHandleSubmit,
  onHandleUpdate,
}: UseFormProps): FormProxy => {
  if (!formName) {
    return noopProxy;
  }

  return createFormProxy({
    formName,
    formState: defaultValues,
    setErrors: (errors: TurndownObject | undefined) => {
      if (hasProperties(errors)) {
        onFormErrors?.(errors);
      } else {
        onFormErrors?.(undefined);
      }
    },
    validationModel,
    onFormErrors,
    onHandleSubmit,
    onHandleUpdate,
  });
};
