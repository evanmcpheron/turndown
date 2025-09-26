import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/data-display/font";
import {
  useForm,
  useFormErrors,
  useFormName,
} from "@/src/shared/ui/forms/form";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { TurndownObject } from "@/src/types";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { ArrowDownIcon } from "@/src/shared/icons/arrow-down.component";
import { ArrowLeftIcon } from "@/src/shared/icons/arrow-left.component";
import { ArrowRightIcon } from "@/src/shared/icons/arrow-right.component";
dayjs.extend(customParseFormat);

export const getFormattedTime = (
  t: Dayjs | string,
  timeFormat: string
): string => {
  const parsed = typeof t === "string" ? dayjs(t, timeFormat, true) : t;
  return parsed.isValid() ? parsed.format(timeFormat) : "";
};

export interface TimePickerProps {
  name: string;
  defaultValue?: string;
  timeFormat?: string;
  minuteStep?: number;
  use24Hour?: boolean;
  heading?: {
    primary?: string;
    secondary?: string;
  };
  placeholder?: string;
  disabled?: boolean;
  onChange?: (time: string) => void;
  ignoreForm?: boolean;
}

export const TimePicker = ({
  name,
  defaultValue,
  timeFormat = "hh:mm A",
  minuteStep = 5,
  use24Hour = false,
  heading,
  placeholder = "Select time",
  disabled = false,
  onChange,
  ignoreForm = false,
}: TimePickerProps) => {
  const formName = useFormName();
  const formErrors = useFormErrors();
  const { app } = useTheme();

  const domRef: TurndownObject = useRef(null);

  const {
    setValue,
    registerField,
    deregisterField,
    subscribe,
    unsubscribe,
    getValue,
  } = useForm({ formName });

  const init = (() => {
    if (defaultValue) {
      const parsed = dayjs(defaultValue, timeFormat, true);
      if (parsed.isValid()) return parsed;
    }
    return dayjs();
  })();

  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<Dayjs>(init);

  const [selHour, setSelHour] = useState<number>(
    use24Hour ? init.hour() : Number(init.format("h"))
  );
  const [selMinute, setSelMinute] = useState<number>(
    init.minute() - (init.minute() % minuteStep)
  );
  const [selAm, setSelAm] = useState<boolean>(init.format("A") === "AM");

  useEffect(() => {
    const h24 = use24Hour ? selHour : ((selHour % 12) + (selAm ? 0 : 12)) % 24;

    const next = time.hour(h24).minute(selMinute).second(0).millisecond(0);

    setTime(next);
  }, [selHour, selMinute, selAm, use24Hour]);

  useEffect(() => {
    if (ignoreForm) return;

    registerField(name, getFormattedTime(time, timeFormat) || defaultValue);

    const handleValueChange = (newValue: string) => {
      console.log(
        `🚀 ~ time.picker.component.tsx:113 ~ handleValueChange ~ newValue: \n`,
        newValue
      );

      const parsed = dayjs(newValue, timeFormat);
      console.log(
        `🚀 ~ time.picker.component.tsx:119 ~ handleValueChange ~ parsed: \n`,
        parsed
      );

      if (parsed.isValid()) {
        setTime(parsed);
        setSelMinute(parsed.minute() - (parsed.minute() % minuteStep));

        if (use24Hour) {
          setSelHour(parsed.hour());
        } else {
          setSelHour(Number(parsed.format("h")));
          setSelAm(parsed.format("A") === "AM");
        }
      }
    };

    if (formName) {
      subscribe(name, handleValueChange);
    }

    return () => {
      if (!ignoreForm) {
        if (formName) unsubscribe(name, handleValueChange);
        deregisterField(name);
      }
    };
  }, [formName, name, ignoreForm, timeFormat, minuteStep, use24Hour]);

  useEffect(() => {
    if (ignoreForm) return;
    const val = getValue(name);
    const source = val ?? defaultValue;
    if (source) {
      const parsed = dayjs(source, timeFormat, true);
      if (parsed.isValid()) {
        setTime(parsed);
        setSelMinute(parsed.minute() - (parsed.minute() % minuteStep));

        if (use24Hour) {
          setSelHour(parsed.hour());
        } else {
          setSelHour(Number(parsed.format("h")));
          setSelAm(parsed.format("A") === "AM");
        }
      }
    }
  }, [
    getValue,
    name,
    defaultValue,
    ignoreForm,
    timeFormat,
    minuteStep,
    use24Hour,
  ]);

  useEffect(() => {
    if (disabled) setIsOpen(false);
  }, [disabled]);

  const rotateAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);
  const arrowRotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const hours = useMemo<number[]>(() => {
    if (use24Hour) return Array.from({ length: 24 }, (_, i) => i);
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }, [use24Hour]);

  const minutes = useMemo<number[]>(
    () =>
      Array.from(
        { length: Math.ceil(60 / minuteStep) },
        (_, i) => (i * minuteStep) % 60
      ),
    [minuteStep]
  );

  const chunk = <T,>(arr: T[], size: number): T[][] =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const HOUR_COLS = use24Hour ? 6 : 6;
  const MIN_COLS = 6;

  const hourRows = useMemo(() => chunk(hours, HOUR_COLS), [hours]);
  const minuteRows = useMemo(() => chunk(minutes, MIN_COLS), [minutes]);

  const handleOpen = () => setIsOpen(true);
  const handleCancel = () => setIsOpen(false);

  const handleNow = () => {
    const now = dayjs();
    let h = use24Hour ? now.hour() : Number(now.format("h"));
    let am = now.format("A") === "AM";
    let m = now.minute() - (now.minute() % minuteStep);

    setSelHour(h);
    setSelAm(am);
    setSelMinute(m);

    const next = now
      .hour(use24Hour ? h : ((h % 12) + (am ? 0 : 12)) % 24)
      .minute(m)
      .second(0);
    const formatted = next.format(timeFormat);
    if (!ignoreForm) setValue(name, formatted);
    onChange?.(formatted);
    setIsOpen(false);
  };

  const bumpHour = (delta: number) => {
    if (use24Hour) {
      setSelHour((h) => (h + delta + 24) % 24);
    } else {
      setSelHour((h) => {
        const next = ((h - 1 + delta + 12) % 12) + 1;
        return next;
      });
    }
  };

  const bumpMinute = (deltaSteps: number) => {
    setSelMinute((m) => {
      const next = (m + deltaSteps * minuteStep + 60) % 60;
      return next;
    });
  };

  const saveAndClose = () => {
    const formatted = time.format(timeFormat);
    if (!ignoreForm) setValue(name, formatted);
    onChange?.(formatted);
    setIsOpen(false);
  };

  const selectedLabel = time.format(timeFormat);

  return (
    <View style={styles.wrapper} ref={domRef}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.input,
          {
            borderColor: app.colors.outline,
            backgroundColor: app.colors.onPrimary,
          },
          disabled && {
            borderColor: app.colors.outlineStrong,
            backgroundColor: app.colors.backgroundDisabled,
          },
        ]}
        onPress={handleOpen}
        activeOpacity={0.7}
      >
        <Label
          style={[
            !selectedLabel && { color: app.colors.textMuted },
            disabled && { color: app.colors.textMuted },
          ]}
        >
          {selectedLabel || placeholder}
        </Label>

        <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
          <ArrowDownIcon type="regular" />
        </Animated.View>
      </TouchableOpacity>

      {/* {!!hasError && (
        <Text style={[styles.errorText, { color: app.colors.error }]}>
          {String(formErrors[name])}
        </Text>
      )} */}

      <Modal
        header={{
          primary: heading?.primary ?? "Select time",
          secondary: heading?.secondary ?? selectedLabel,
        }}
        saveText="Save Time"
        scrollable
        onCancel={handleCancel}
        onSave={saveAndClose}
        isOpen={isOpen}
        selectedId={"modal"}
        disabled={disabled}
      >
        {/* Header Controls */}
        <View style={[styles.headerRow, { borderColor: app.colors.outline }]}>
          <TouchableOpacity
            style={[
              styles.headerBtn,
              {
                borderColor: app.colors.outline,
                backgroundColor: app.colors.onPrimary,
              },
            ]}
            onPress={handleNow}
            activeOpacity={0.7}
          >
            <Label>Now</Label>
          </TouchableOpacity>

          <View style={styles.headerSpacer} />

          {/* Hour bump */}
          <TouchableOpacity
            style={[
              styles.iconBtn,
              {
                borderColor: app.colors.outline,
                backgroundColor: app.colors.onPrimary,
              },
            ]}
            onPress={() => bumpHour(-1)}
            activeOpacity={0.7}
          >
            <ArrowLeftIcon type="regular" />
          </TouchableOpacity>

          {/* Quick hour/minute display & manual entry */}
          <TextInput
            keyboardType="number-pad"
            value={
              use24Hour ? String(selHour).padStart(2, "0") : String(selHour)
            }
            onChangeText={(t) => {
              const n = Number(t);
              if (Number.isNaN(n)) return;
              if (use24Hour) {
                if (n >= 0 && n <= 23) setSelHour(n);
              } else {
                if (n >= 1 && n <= 12) setSelHour(n);
              }
            }}
            style={[
              styles.hmsInput,
              {
                borderColor: app.colors.outline,
                backgroundColor: app.colors.onPrimary,
                color: app.colors.text,
              },
            ]}
            placeholder={use24Hour ? "HH" : "h"}
            placeholderTextColor={app.colors.textMuted}
            maxLength={use24Hour ? 2 : 2}
          />
          <Label style={{ marginHorizontal: 6, color: app.colors.textMuted }}>
            :
          </Label>
          <TextInput
            keyboardType="number-pad"
            value={String(selMinute).padStart(2, "0")}
            onChangeText={(t) => {
              const n = Number(t);
              if (!Number.isNaN(n) && n >= 0 && n <= 59) {
                setSelMinute(n - (n % minuteStep));
              }
            }}
            style={[
              styles.hmsInput,
              {
                borderColor: app.colors.outline,
                backgroundColor: app.colors.onPrimary,
                color: app.colors.text,
              },
            ]}
            placeholder="mm"
            placeholderTextColor={app.colors.textMuted}
            maxLength={2}
          />

          <TouchableOpacity
            style={[
              styles.iconBtn,
              {
                borderColor: app.colors.outline,
                backgroundColor: app.colors.onPrimary,
              },
            ]}
            onPress={() => bumpHour(1)}
            activeOpacity={0.7}
          >
            <ArrowRightIcon type="regular" />
          </TouchableOpacity>
        </View>

        {/* AM/PM toggle for 12-hour mode */}
        {!use24Hour && (
          <View style={styles.amPmRow}>
            {["AM", "PM"].map((p) => {
              const active = (p === "AM" && selAm) || (p === "PM" && !selAm);
              return (
                <TouchableOpacity
                  key={`ampm-${p}`}
                  style={[
                    styles.amPmBtn,
                    {
                      borderColor: active
                        ? app.colors.primary
                        : app.colors.outline,
                      backgroundColor: active
                        ? app.colors.primary
                        : app.colors.onPrimary,
                    },
                  ]}
                  onPress={() => setSelAm(p === "AM")}
                  activeOpacity={0.7}
                >
                  <Label
                    style={{
                      color: active ? app.colors.onPrimary : app.colors.text,
                    }}
                  >
                    {p}
                  </Label>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* Hour Grid */}
        <Label style={[styles.sectionLabel, { color: app.colors.textMuted }]}>
          Hour
        </Label>
        <View style={styles.grid}>
          {hourRows.map((row, rIdx) => (
            <View key={`hr-row-${rIdx}`} style={styles.gridRow}>
              {row.map((h, cIdx) => {
                const isSelected = use24Hour ? selHour === h : selHour === h;
                const display = use24Hour
                  ? String(h).padStart(2, "0")
                  : String(h);
                return (
                  <TouchableOpacity
                    key={`hr-${h}-${cIdx}`}
                    style={[
                      styles.cell,
                      {
                        borderColor: app.colors.outline,
                        backgroundColor: app.colors.onPrimary,
                      },
                      isSelected && {
                        backgroundColor: app.colors.primary,
                        borderColor: app.colors.primary,
                      },
                    ]}
                    onPress={() => setSelHour(h)}
                    activeOpacity={0.8}
                  >
                    <Label
                      style={{
                        color: isSelected
                          ? app.colors.onPrimary
                          : app.colors.text,
                      }}
                    >
                      {display}
                    </Label>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        {/* Minute Grid */}
        <Label style={[styles.sectionLabel, { color: app.colors.textMuted }]}>
          Minute
        </Label>
        <View style={styles.grid}>
          {minuteRows.map((row, rIdx) => (
            <View key={`min-row-${rIdx}`} style={styles.gridRow}>
              {row.map((m, cIdx) => {
                const isSelected = selMinute === m;
                return (
                  <TouchableOpacity
                    key={`min-${m}-${cIdx}`}
                    style={[
                      styles.cell,
                      {
                        borderColor: app.colors.outline,
                        backgroundColor: app.colors.onPrimary,
                      },
                      isSelected && {
                        backgroundColor: app.colors.primary,
                        borderColor: app.colors.primary,
                      },
                    ]}
                    onPress={() => {
                      setSelMinute(m);

                      // saveAndClose();
                    }}
                    activeOpacity={0.8}
                  >
                    <Label
                      style={{
                        color: isSelected
                          ? app.colors.onPrimary
                          : app.colors.text,
                      }}
                    >
                      {String(m).padStart(2, "0")}
                    </Label>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const CELL_GAP = 6;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    minHeight: 48,
    borderWidth: 1.5,
    borderRadius: 8,
  },
  errorText: {
    marginTop: 6,
    fontSize: 12,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 12,
    marginBottom: 12,
  },
  headerBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  hmsInput: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    minWidth: 56,
    borderRadius: 8,
    borderWidth: 1,
    textAlign: "center",
    fontWeight: "600",
  },
  headerSpacer: { flex: 1 },

  amPmRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8,
    marginBottom: 12,
  },
  amPmBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
  },

  sectionLabel: {
    marginTop: 6,
    marginBottom: 6,
    fontSize: 12,
    fontWeight: "600",
  },

  grid: {
    gap: CELL_GAP,
    marginBottom: 8,
  },
  gridRow: {
    flexDirection: "row",
    gap: CELL_GAP,
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
