/* eslint-disable @typescript-eslint/no-unused-vars */
import { showErrorNotification } from "@/components/actions/notification/notification.helper";
import {
  Dropdown,
  SelectOption,
} from "@/components/forms/dropdown/dropdown.form.component";
import { Form, useForm } from "@/components/forms/form";
import { getFirstPropertyValue } from "@/components/forms/form/form.helpers";
import { Input } from "@/components/forms/input";
import { statesAndTerritories } from "@/constants/base.consts";
import { useAuth } from "@/context";
import { TurndownObject } from "@/helpers";
import { forwardRef, useImperativeHandle, useState } from "react";

interface PropertiesFormProps {}

const formValidationSchema = {};

export const PropertiesCreateForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  PropertiesFormProps
>((_props, ref) => {
  const { user } = useAuth();

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm, setValue } = useForm({
    formName: "frmProperties",
    validationModel: formValidationSchema,
    onFormErrors: (_errors) => {
      // console.error('Form Errors:', errors)
    },
  });

  const saveData = async (data: TurndownObject) => {
    try {
      return true;
    } catch (_e: TurndownObject) {
      showErrorNotification("Something went wrong creating this property");
      return false;
    } finally {
    }
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean) => void) {
      if (submittingData) {
        return;
      }
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        console.log(
          `🚀 ~ properties.create.form.component.tsx:53 ~ submitData ~ data: \n`,
          data
        );

        if (errors) {
          showErrorNotification(getFirstPropertyValue(errors));
          setSubmittingData(false);
          return;
        }

        const saveResult = await saveData(data);

        if (saveResult) {
          callback(saveResult);
        }
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form name="frmProperties">
      <Input name="name" placeholder="Nickname" label="Nickname" />
      <Input
        name="addressLine1"
        placeholder="Address Line 1"
        label="Address Line 1"
      />
      <Input
        name="addressLine2"
        placeholder="Address Line 2"
        label="Address Line 2"
      />
      <Input name="city" placeholder="City" label="City" />
      {/* STATE */}
      <Dropdown
        heading={{ primary: "Select State" }}
        hasFooter
        options={statesAndTerritories}
        onSelect={(option: SelectOption) => setValue("state", option.value)}
      />
      <Input
        name="postalCode"
        placeholder="Postal Code"
        label="Postal Code"
        type="number"
      />
      {/* TIMEZONE */}
    </Form>
  );
});
