import { useAuth } from "@/src/contexts/auth";
import { useTheme } from "@/src/contexts/theme";
import { propertiesApi } from "@/src/services/api/properties";
import { statesAndTerritories } from "@/src/shared/config/base.consts";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { Label } from "@/src/shared/ui/data-display/font";
import { Dropdown } from "@/src/shared/ui/forms/dropdown/dropdown.form.component";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { Radio } from "@/src/shared/ui/forms/radio/radio.component";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { TurndownObject } from "@/src/types";
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { View } from "react-native";
import { formValidationSchema } from "./properties.create.form.logic";
import { propertiesCreateFormStyles } from "./properties.create.form.styles";
import { PropertiesCreateFormProps } from "./properties.create.form.types";

export const PropertiesCreateForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  PropertiesCreateFormProps
>((_props, ref) => {
  const { user } = useAuth();
  const { app } = useTheme();
  const s = useMemo(() => propertiesCreateFormStyles(app), [app]);

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm, setValue } = useForm({
    formName: "frmCreateProperties",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: TurndownObject) => {
    try {
      const cleaned = removeUndefined(data);
      await propertiesApi.post(cleaned, user?.id);
      return true;
    } catch {
      showErrorNotification("Something went wrong creating this property");
      return false;
    }
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean) => void) {
      if (submittingData) return;
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        if (errors) {
          showErrorNotification(getFirstPropertyValue(errors));
          setSubmittingData(false);
          return;
        }
        const ok = await saveData(data);
        if (ok) callback(ok);
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form name="frmCreateProperties">
      <TurndownSection
        title="Identity"
        hint="How should we refer to this property?"
      >
        <Input name="nickname" placeholder="Nickname" label="Nickname" />
      </TurndownSection>

      <TurndownSection
        title="Location"
        hint="Address details used for navigation & service areas"
      >
        <Input
          name="address_line1"
          placeholder="Address Line 1"
          label="Address Line 1"
        />
        <Input
          name="address_line2"
          placeholder="Address Line 2"
          label="Address Line 2"
        />

        <Input name="city" placeholder="City" label="City" />
        <Dropdown
          name="state"
          heading={{ primary: "Select State or Territory" }}
          hasFooter
          options={statesAndTerritories}
          onSelect={(option: string) => setValue("state", option)}
        />
        <Input
          name="postal_code"
          placeholder="Postal Code"
          label="Postal Code"
          type="number"
        />
        <Input name="country" placeholder="Country" label="Country" />
      </TurndownSection>

      <TurndownSection
        title="Readiness"
        hint="Operational status affects dashboards and alerts"
      >
        <Label
          variant="subtitle2"
          style={{ color: app.colors.textMuted, marginBottom: app.spacing[2] }}
        >
          Current status
        </Label>
        <View style={s.segmentWrap}>
          <Radio
            name="readiness_status"
            options={[
              { value: "ready", label: "Ready", default: true },
              { value: "attention", label: "Needs Attention" },
              { value: "blocked", label: "Blocked" },
              { value: "unknown", label: "Unknown" },
            ]}
          />
        </View>
      </TurndownSection>
    </Form>
  );
});
