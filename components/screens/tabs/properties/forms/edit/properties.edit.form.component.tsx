import { showErrorNotification } from "@/components/actions/notification/notification.helper";
import { Label } from "@/components/font";
import { Dropdown } from "@/components/forms/dropdown/dropdown.form.component";
import { Form, useForm } from "@/components/forms/form";
import { getFirstPropertyValue } from "@/components/forms/form/form.helpers";
import { Input } from "@/components/forms/input";
import { Radio } from "@/components/forms/radio/radio.component";
import { ValidationResult } from "@/components/forms/validations/common.validations";
import { TurndownSection } from "@/components/layouts/section";
import { statesAndTerritories } from "@/constants/base.consts";
import { useTheme } from "@/context/theme/theme.context";
import { Property, TurndownObject } from "@/helpers";
import {
  getPropertyById,
  updatePropertById,
} from "@/helpers/firebase/api/rooms/rooms.api.helpers";
import { removeUndefined } from "@/helpers/objects";
import { withOpacity } from "@/helpers/theme";
import { AppTheme } from "@/helpers/theme/general.styles";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";

interface PropertiesFormProps {
  propertyId: string;
}

const formValidationSchema = {
  nickname: (v: string): ValidationResult =>
    (v ?? "").trim() === "" && "Property must have a nickname",
};

export const PropertiesEditForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  PropertiesFormProps
>(({ propertyId }, ref) => {
  const { app } = useTheme();
  const s = useMemo(() => themedStyles(app), [app]);

  const [submittingData, setSubmittingData] = useState(false);
  const [property, setProperty] = useState<Property | null>(null);

  const { submitForm, setValue } = useForm({
    formName: "frmEditProperties",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  useEffect(() => {
    getPropertyById(propertyId).then((response) => {
      setProperty(response);
      setValue("state", response.state || "");
    });
  }, []);

  const saveData = async (data: TurndownObject) => {
    try {
      const cleaned = removeUndefined(data);

      await updatePropertById(cleaned, propertyId);
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
    <Form name="frmEditProperties" editValues={property || {}}>
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
          defaultValue={property?.state}
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
            defaultValue={property?.readiness_status}
            options={[
              { value: "ready", label: "Ready" },
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

const themedStyles = (t: AppTheme) => {
  return StyleSheet.create({
    segmentWrap: {
      borderRadius: t.radii.lg,
      padding: 10,
      backgroundColor: withOpacity(t.colors.primary, t.isDark ? 0.1 : 0.06),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: withOpacity(t.colors.primary, 0.25),
    },
  });
};
