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

export const getFormattedDateTime = (
  input: Dayjs | string,
  dateTimeFormat: string
): string => {
  const parsed =
    typeof input === "string" ? dayjs(input, dateTimeFormat, true) : input;
  return parsed.isValid() ? parsed.format(dateTimeFormat) : "";
};

type Heading = { primary?: string; secondary?: string };

export interface DateTimePickerProps {
  name: string;

  /** Formatting */
  dateFormat?: string; // "MM/DD/YYYY"
  timeFormat?: string; // "hh:mm A" or "HH:mm"
  dateTimeFormat?: string; // overrides join of date+time (e.g., "MM/DD/YYYY hh:mm A")

  /** Defaults */
  defaultValue?: string; // should match dateTimeFormat (or derived fmt)
  minuteStep?: number; // e.g., 5
  use24Hour?: boolean; // toggle 12/24h
  showYearInput?: boolean;

  /** UI */
  heading?: Heading;
  placeholder?: string;
  disabled?: boolean;

  /** Behavior */
  onChange?: (dateTime: string) => void;
  ignoreForm?: boolean;

  /** If true, clicking a minute will save+close (like your DatePicker does for day) */
  autoCloseOnMinute?: boolean;
}

export const DateTimePicker = ({
  name,
  defaultValue,
  dateFormat = "MM/DD/YYYY",
  timeFormat = "hh:mm A",
  dateTimeFormat, // if not provided we join as `${dateFormat} ${timeFormat}`
  minuteStep = 5,
  use24Hour = false,
  showYearInput = true,

  heading,
  placeholder = "Select date & time",
  disabled = false,
  onChange,
  ignoreForm = false,
  autoCloseOnMinute = false,
}: DateTimePickerProps) => {
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

  const fmt = dateTimeFormat ?? `${dateFormat} ${timeFormat}`;

  // ---------- Init ----------
  const init = (() => {
    if (defaultValue) {
      const parsed = dayjs(defaultValue, fmt, true);
      if (parsed.isValid()) return parsed;
    }
    return dayjs();
  })();

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValueDT] = useState<Dayjs>(init);

  // Date pieces
  const [currentDate, setCurrentDate] = useState<Dayjs>(init);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(init);

  // Time pieces
  const [selHour, setSelHour] = useState<number>(
    use24Hour ? init.hour() : Number(init.format("h"))
  );
  const [selMinute, setSelMinute] = useState<number>(
    init.minute() - (init.minute() % minuteStep)
  );
  const [selAm, setSelAm] = useState<boolean>(init.format("A") === "AM");

  // Keep combined value synced when date/time pieces change
  useEffect(() => {
    const h24 = use24Hour ? selHour : ((selHour % 12) + (selAm ? 0 : 12)) % 24;

    const next = (selectedDate ?? currentDate)
      .hour(h24)
      .minute(selMinute)
      .second(0)
      .millisecond(0);

    setValueDT(next);
  }, [selectedDate, currentDate, selHour, selMinute, selAm, use24Hour]);

  // ---------- Form wiring ----------
  useEffect(() => {
    if (ignoreForm) return;
    registerField(name, getFormattedDateTime(value, fmt) || defaultValue);

    const handleValueChange = (newValue: string) => {
      const parsed = dayjs(newValue, fmt, true);
      if (parsed.isValid()) {
        setValueDT(parsed);
        setCurrentDate(parsed);
        setSelectedDate(parsed);

        setSelMinute(parsed.minute() - (parsed.minute() % minuteStep));
        if (use24Hour) {
          setSelHour(parsed.hour());
        } else {
          setSelHour(Number(parsed.format("h")));
          setSelAm(parsed.format("A") === "AM");
        }
      }
    };

    if (formName) subscribe(name, handleValueChange);
    return () => {
      if (!ignoreForm) {
        if (formName) unsubscribe(name, handleValueChange);
        deregisterField(name);
      }
    };
  }, [formName, name, ignoreForm, fmt, minuteStep, use24Hour]);

  // Hydrate if external form sets a value
  useEffect(() => {
    if (ignoreForm) return;
    const src = getValue(name) ?? defaultValue;
    if (src) {
      const parsed = dayjs(src, fmt, true);
      if (parsed.isValid()) {
        setValueDT(parsed);
        setCurrentDate(parsed);
        setSelectedDate(parsed);
        setSelMinute(parsed.minute() - (parsed.minute() % minuteStep));
        if (use24Hour) {
          setSelHour(parsed.hour());
        } else {
          setSelHour(Number(parsed.format("h")));
          setSelAm(parsed.format("A") === "AM");
        }
      }
    }
  }, [getValue, name, defaultValue, ignoreForm, fmt, minuteStep, use24Hour]);

  useEffect(() => {
    if (disabled) setIsOpen(false);
  }, [disabled]);

  // ---------- Arrow animation ----------
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

  // ---------- Calendar logic ----------
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

  const chunk = <T,>(arr: T[], size: number): T[][] =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  const weeks = useMemo(() => chunk(daysGrid, 7), [daysGrid]);

  // ---------- Time logic ----------
  const hours = useMemo<number[]>(
    () =>
      use24Hour
        ? Array.from({ length: 24 }, (_, i) => i)
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [use24Hour]
  );
  const minutes = useMemo<number[]>(
    () =>
      Array.from(
        { length: Math.ceil(60 / minuteStep) },
        (_, i) => (i * minuteStep) % 60
      ),
    [minuteStep]
  );
  const HOUR_COLS = 6;
  const MIN_COLS = 6;
  const hourRows = useMemo(() => chunk(hours, HOUR_COLS), [hours]);
  const minuteRows = useMemo(() => chunk(minutes, MIN_COLS), [minutes]);

  // ---------- Handlers ----------
  const handleOpen = () => setIsOpen(true);
  const handleCancel = () => setIsOpen(false);

  const handleMonthChange = (offset: number) =>
    setCurrentDate((prev) => prev.add(offset, "month"));
  const handleYearChange = (text: string) => {
    if (!text) return;
    const num = Number(text);
    if (!Number.isNaN(num)) setCurrentDate((prev) => prev.year(num));
  };

  const handleToday = () => {
    const today = dayjs();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const handleSelectDate = (date: Dayjs) => {
    if (!date) return;
    setCurrentDate(date);
    setSelectedDate(date);
  };

  const handleNow = () => {
    handleToday();
    const now = dayjs();
    const m = now.minute() - (now.minute() % minuteStep);
    const h12 = Number(now.format("h"));
    setSelMinute(m);
    if (use24Hour) {
      setSelHour(now.hour());
    } else {
      setSelHour(h12);
      setSelAm(now.format("A") === "AM");
    }
  };

  const saveAndClose = () => {
    const out = value.format(fmt);
    if (!ignoreForm) setValue(name, out);
    onChange?.(out);
    setIsOpen(false);
  };

  const selectedLabel = value.format(fmt);
  // const hasError = !!formErrors?.[name];

  return (
    <View style={styles.wrapper} ref={domRef}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.input,
          // { borderColor: hasError ? app.colors.error : app.colors.outline, backgroundColor: app.colors.onPrimary },
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

      {/* {!!hasError && <Text style={[styles.errorText, { color: app.colors.error }]}>{String(formErrors[name])}</Text>} */}

      <Modal
        header={{
          primary: heading?.primary ?? "Select date & time",
          secondary:
            heading?.secondary ??
            `${(selectedDate ?? currentDate).format(
              dateFormat
            )}  •  ${value.format(timeFormat)}`,
        }}
        scrollable
        saveText="Save Date/Time"
        onCancel={handleCancel}
        onSave={saveAndClose}
        isOpen={isOpen}
        selectedId={"modal"}
        disabled={disabled}
      >
        {/* ---- Date Header Controls ---- */}
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

        {/* Tag header if using year input */}
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

        {/* Weekday header */}
        <View style={styles.weekHeader}>
          {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
            <View key={`wk-${d}-${idx}`} style={styles.weekCol}>
              <Label
                style={{ color: app.colors.textMuted, textAlign: "center" }}
              >
                {d}
              </Label>
            </View>
          ))}
        </View>

        {/* Calendar grid */}
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
                    <Label
                      style={{
                        color: isSelected
                          ? app.colors.onPrimary
                          : app.colors.text,
                      }}
                    >
                      {item.day}
                    </Label>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        {/* ---- Time Controls ---- */}
        <View
          style={[
            styles.headerRow,
            { borderColor: app.colors.outline, marginTop: 14 },
          ]}
        >
          <View style={styles.headerSpacer} />
        </View>

        {/* AM/PM */}
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

        {/* Hour grid */}
        <Label style={[styles.sectionLabel, { color: app.colors.textMuted }]}>
          Hour
        </Label>
        <View style={styles.grid}>
          {hourRows.map((row, rIdx) => (
            <View key={`hr-row-${rIdx}`} style={styles.gridRow}>
              {row.map((h, cIdx) => {
                const isSelected = selHour === h;
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

        {/* Minute grid */}
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
                      if (autoCloseOnMinute) saveAndClose();
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
  wrapper: { width: "100%" },
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
  errorText: { marginTop: 6, fontSize: 12 },

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

  tag: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 8,
  },

  weekHeader: { flexDirection: "row", marginBottom: 6, paddingHorizontal: 4 },
  weekCol: { flex: 1, alignItems: "center" },

  grid: { gap: CELL_GAP, marginBottom: 8 },
  weekRow: { flexDirection: "row", gap: CELL_GAP },
  dayCell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  amPmRow: { flexDirection: "row", gap: 10, marginTop: 8, marginBottom: 12 },
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

  cell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 6,
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
  monthYear: { marginHorizontal: 8, fontSize: 16, fontWeight: "700" },

  gridRow: {
    flexDirection: "row",
    gap: CELL_GAP,
  },
});
