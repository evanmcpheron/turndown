import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/data-display/font";
import {
  useForm,
  useFormErrors,
  useFormName,
} from "@/src/shared/ui/forms/form";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { TurndownObject } from "@/src/types";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { ArrowDownIcon } from "@/src/shared/icons/arrow-down.component";
import { ArrowLeftIcon } from "@/src/shared/icons/arrow-left.component";
import { ArrowRightIcon } from "@/src/shared/icons/arrow-right.component";

dayjs.extend(customParseFormat);

export const getFormattedDate = (
  date: Dayjs | string,
  dateFormat: string
): string => {
  const parsed =
    typeof date === "string" ? dayjs(date, dateFormat, true) : date;
  return parsed.isValid() ? parsed.format(dateFormat) : "";
};

export interface DatePickerProps {
  name: string;
  defaultValue?: string;
  dateFormat?: string;
  heading?: {
    primary?: string;
    secondary?: string;
  };
  placeholder?: string;
  disabled?: boolean;
  onChange?: (date: string) => void;
  ignoreForm?: boolean;
  showYearInput?: boolean;
}

export const DatePicker = ({
  name,
  defaultValue,
  dateFormat = "MM/DD/YYYY",
  heading,
  placeholder = "Select date",
  disabled = false,
  onChange,
  ignoreForm = false,
  showYearInput = true,
}: DatePickerProps) => {
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

  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState<Dayjs>(() => {
    const initial = defaultValue
      ? dayjs(defaultValue, dateFormat, true)
      : dayjs();
    return initial.isValid() ? initial : dayjs();
  });
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(() => {
    const initial = defaultValue
      ? dayjs(defaultValue, dateFormat, true)
      : dayjs(Date.now());

    return initial && initial.isValid() ? initial : null;
  });

  useEffect(() => {
    if (ignoreForm) return;

    registerField(
      name,
      selectedDate ? selectedDate.format(dateFormat) : defaultValue
    );

    const handleValueChange = (newValue: string) => {
      const parsed = dayjs(newValue, dateFormat);

      if (parsed.isValid()) {
        setSelectedDate(parsed);
        setCurrentDate(parsed);
      } else {
        setSelectedDate(null);
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
  }, [formName, name, ignoreForm, dateFormat]);

  useEffect(() => {
    if (ignoreForm) return;

    const formValue = getValue(name);
    if (formValue !== undefined) {
      const parsed = dayjs(formValue, dateFormat, true);
      if (parsed.isValid()) {
        setSelectedDate(parsed);
        setCurrentDate(parsed);
      }
    } else if (defaultValue) {
      const parsed = dayjs(defaultValue, dateFormat, true);
      if (parsed.isValid()) {
        setSelectedDate(parsed);
        setCurrentDate(parsed);
      }
    }
  }, [defaultValue, getValue, name, ignoreForm, dateFormat]);

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
  }, [isOpen, rotateAnim]);

  const arrowRotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const startOfMonth = useMemo(
    () => currentDate.startOf("month"),
    [currentDate]
  );
  const endOfMonth = useMemo(() => currentDate.endOf("month"), [currentDate]);
  const daysInMonth = endOfMonth.date();
  const firstDayOfWeek = startOfMonth.day();

  const daysGrid = useMemo(() => {
    const grid: {
      date: Dayjs;
      day: number;
      active: boolean;
      selected: boolean;
    }[] = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      const date = startOfMonth.subtract(firstDayOfWeek - i, "day");
      grid.push({ date, day: date.date(), active: false, selected: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = currentDate.date(i);
      const isSelected = selectedDate
        ? date.isSame(selectedDate, "day")
        : false;
      grid.push({ date, day: i, active: true, selected: isSelected });
    }

    const remainder = grid.length % 7;
    if (remainder !== 0) {
      const fill = 7 - remainder;
      const last = endOfMonth;
      for (let i = 1; i <= fill; i++) {
        const date = last.add(i, "day");
        grid.push({ date, day: date.date(), active: false, selected: false });
      }
    }

    return grid;
  }, [
    currentDate,
    selectedDate,
    firstDayOfWeek,
    startOfMonth,
    endOfMonth,
    daysInMonth,
  ]);

  const handleOpen = () => setIsOpen(true);
  const handleCancel = () => setIsOpen(false);

  const handleMonthChange = (offset: number) => {
    setCurrentDate((prev) => prev.add(offset, "month"));
  };

  const handleYearChange = (text: string) => {
    if (!text) return;
    const num = Number(text);
    if (!Number.isNaN(num)) {
      setCurrentDate((prev) => prev.year(num));
    }
  };

  const handleToday = () => {
    const today = dayjs();
    setCurrentDate(today);
    setSelectedDate(today);
    const formatted = today.format(dateFormat);
    if (!ignoreForm) setValue(name, formatted);
    onChange?.(formatted);
    setIsOpen(false);
  };

  const handleSelectDate = (date: Dayjs) => {
    if (!date) return;
    setCurrentDate(date);
    setSelectedDate(date);
    const formatted = date.format(dateFormat);
    if (!ignoreForm) setValue(name, formatted);
    onChange?.(formatted);
    setIsOpen(false);
  };

  const selectedLabel = selectedDate ? selectedDate.format(dateFormat) : "";

  const chunk = <T,>(arr: T[], size: number): T[][] =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const weeks = useMemo(() => chunk(daysGrid, 7), [daysGrid]);

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
            !selectedDate && { color: app.colors.textMuted },
            disabled && {
              color: app.colors.textMuted,
            },
          ]}
        >
          {selectedLabel || placeholder}
        </Label>

        <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
          <ArrowDownIcon type="regular" />
        </Animated.View>
      </TouchableOpacity>

      {/* {!!hasError && (
        <Text style={[styles.errorText, { color: app.colors.danger }]}>
          {String(formErrors[name])}
        </Text>
      )} */}

      <Modal
        header={{
          primary: heading?.primary ?? "Select date",
          secondary: heading?.secondary ?? currentDate.format("MMMM YYYY"),
        }}
        scrollable
        onCancel={handleCancel}
        isOpen={isOpen}
        disabled={disabled}
        selectedId={"modal"}
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
            onPress={handleToday}
            activeOpacity={0.7}
          >
            <Label>Today</Label>
          </TouchableOpacity>

          <View style={styles.headerSpacer} />

          <TouchableOpacity
            style={[
              styles.iconBtn,
              {
                borderColor: app.colors.outline,
                backgroundColor: app.colors.onPrimary,
              },
            ]}
            onPress={() => handleMonthChange(-1)}
            activeOpacity={0.7}
          >
            <ArrowLeftIcon type="regular" />
          </TouchableOpacity>

          {showYearInput ? (
            <TextInput
              keyboardType="number-pad"
              defaultValue={String(currentDate.year())}
              onChangeText={handleYearChange}
              style={[
                styles.yearInput,
                {
                  borderColor: app.colors.outline,
                  backgroundColor: app.colors.onPrimary,
                  color: app.colors.text,
                },
              ]}
              placeholder="YYYY"
              placeholderTextColor={app.colors.textMuted}
            />
          ) : (
            <Label style={[styles.monthYear, { color: app.colors.primary }]}>
              {currentDate.format("MMMM YYYY")}
            </Label>
          )}

          <TouchableOpacity
            style={[
              styles.iconBtn,
              {
                borderColor: app.colors.outline,
                backgroundColor: app.colors.onPrimary,
              },
            ]}
            onPress={() => handleMonthChange(1)}
            activeOpacity={0.7}
          >
            <ArrowRightIcon type="regular" />
          </TouchableOpacity>
        </View>

        {/* Month/Year display (if year input shown, keep a slim tag) */}
        {showYearInput && (
          <View
            style={[
              styles.tag,
              {
                backgroundColor: app.colors.primary,
                borderColor: app.colors.primary,
              },
            ]}
          >
            <Label>{currentDate.format("MMMM YYYY")}</Label>
          </View>
        )}

        {/* Weekday Headers */}
        <View style={styles.weekHeader}>
          {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
            <View key={`wk-${d}-${index}`} style={styles.weekCol}>
              <Label
                style={{ color: app.colors.textMuted, textAlign: "center" }}
              >
                {d}
              </Label>
            </View>
          ))}
        </View>

        <View style={styles.grid}>
          {weeks.map((week, wIdx) => (
            <View key={`week-${wIdx}`} style={styles.weekRow}>
              {week.map((item, dIdx) => {
                const isSelected = item.selected && item.active;

                return (
                  <TouchableOpacity
                    key={`day-${item.date.toString()}-${dIdx}`}
                    style={[
                      styles.dayCell,
                      {
                        borderColor: app.colors.outline,
                        backgroundColor: app.colors.onPrimary,
                      },
                      !item.active && { opacity: 0.4 },
                      isSelected && {
                        backgroundColor: app.colors.primary,
                        borderColor: app.colors.primary,
                      },
                    ]}
                    onPress={() => item.active && handleSelectDate(item.date)}
                    disabled={!item.active}
                    activeOpacity={0.8}
                  >
                    <Label>{item.day}</Label>
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

const CELL_SIZE = 40;

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
  yearInput: {
    marginHorizontal: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    minWidth: 84,
    borderRadius: 8,
    borderWidth: 1,
    textAlign: "center",
    fontWeight: "600",
  },
  monthYear: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "700",
  },
  headerSpacer: {
    flex: 1,
  },

  tag: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 8,
  },

  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    paddingHorizontal: 4,
  },
  weekText: {
    width: CELL_SIZE,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
  },

  dayText: {
    fontSize: 14,
  },
  weekCol: {
    flex: 1,
    alignItems: "center",
  },
  grid: {
    gap: 6,
  },
  weekRow: {
    flexDirection: "row",
    gap: 6,
  },
  dayCell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
