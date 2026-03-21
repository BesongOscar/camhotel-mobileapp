import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { CalendarList } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";
import ArrowBack from "@/components/arrowback";
import { calendarStyles as styles } from "@/styles/app/(homeExtras)/calendarScreen";
import { colors } from "@/src/themes";
import { useTranslation } from "@/src/hooks/Usetranslation";

// --- Helpers ---
const formatDate = (dateString: string | null) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });
};

const formatDateForDisplay = (dateString: string) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const differenceInDays = (start: string, end: string) => {   
  const s = new Date(start);
  const e = new Date(end);
  return Math.max(0, Math.round((e.getTime() - s.getTime()) / 86400000));
};

// --- Component ---
export default function ChooseDateScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { t } = useTranslation();

  const todayIso = new Date().toISOString().split("T")[0];
  const [selected, setSelected] = useState<{
    startDate: string | null;
    endDate: string | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const handleDayPress = (day: any) => {
    const { dateString } = day;
    if (!selected.startDate || (selected.startDate && selected.endDate)) {
      setSelected({ startDate: dateString, endDate: null });
    } else if (new Date(dateString) < new Date(selected.startDate)) {
      setSelected({ startDate: dateString, endDate: null });
    } else {
      const diffDays = differenceInDays(selected.startDate, dateString);
      if (diffDays > 180) {
        Alert.alert(
          t("calendarScreen.rangeTooLong"),
          t("calendarScreen.rangeTooLongMessage")
        );
        return;
      }
      setSelected({ ...selected, endDate: dateString });
    }
  };

  const markedDates = useMemo(() => {
    const marks: any = {};
    const { startDate, endDate } = selected;

    if (startDate) {
      marks[startDate] = {
        startingDay: true,
        color: colors.primary,
        textColor: "white",
      };
    }

    if (endDate) {
      marks[endDate] = {
        endingDay: true,
        color: colors.primary,
        textColor: "white",
      };

      // fill in-between days
      let curr = new Date(startDate!);
      while (curr < new Date(endDate)) {
        curr.setDate(curr.getDate() + 1);
        const iso = curr.toISOString().split("T")[0];
        if (iso !== startDate && iso !== endDate)
          marks[iso] = { color: colors.calendarPrimary, textColor: colors.textPrimary };
      }
    }

    // mark today subtly
    marks[todayIso] = {
      ...(marks[todayIso] || {}),
      customStyles: {
        container: { borderColor: colors.primary, borderWidth: 1 },
        text: { color: colors.primary, fontWeight: "600" },
      },
    };

    return marks;
  }, [selected]);

  const handleConfirm = () => {
    if (!selected.startDate || !selected.endDate) {
      Alert.alert(t("calendarScreen.selectBothDates"), t("calendarScreen.selectBothDatesMessage"));
      return;
    }
    const nights = differenceInDays(selected.startDate, selected.endDate);

    // Format dates for display
    const checkInDate = formatDateForDisplay(selected.startDate);
    const checkOutDate = formatDateForDisplay(selected.endDate);

    // Navigate back with the selected dates
    router.push({
      pathname: "/(main)/Home",
      params: {
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
      },
    });
  };

  const nights =
    selected.startDate && selected.endDate
      ? differenceInDays(selected.startDate, selected.endDate)
      : 0;

  return (
    <SafeAreaView style={styles.container}>
      {/* Check-in / Check-out summary */}
      <View style={styles.dateRow}>
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>{t("calendarScreen.checkIn")}</Text>
          <Text style={styles.dateValue}>
            {selected.startDate
              ? formatDate(selected.startDate)
              : t("calendarScreen.selectDate")}
          </Text>
        </View>

        <Ionicons name="arrow-forward" size={22} color={colors.textPrimary} />

        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>{t("calendarScreen.checkOut")}</Text>
          <Text style={styles.dateValue}>
            {selected.endDate ? formatDate(selected.endDate) : t("calendarScreen.selectDate")}
          </Text>
        </View>
      </View>

      {/* Calendar */}
      <CalendarList
        markingType="period"
        markedDates={markedDates}
        onDayPress={handleDayPress}
        minDate={todayIso}
        pastScrollRange={1}
        futureScrollRange={10}
        firstDay={0}
        theme={
          {
            textDayFontFamily: "System",
            textMonthFontWeight: "600",
            textMonthFontSize: 18,
            textDayHeaderFontWeight: "500",
            monthTextColor: colors.textPrimary,
            arrowColor: colors.textPrimary,
            "stylesheet.calendar.header": {
              week: {
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-around",
              },
            },
          } as any
        }
        style={styles.calendar}
      />

      {/* Confirm Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.confirmBtn,
            !(selected.startDate && selected.endDate) && { opacity: 0.3 },
          ]}
          disabled={!(selected.startDate && selected.endDate)}
          onPress={handleConfirm}
        >
          <Text style={styles.confirmText}>
            {selected.startDate && selected.endDate
              ? `${t("calendarScreen.confirm")} (${nights} ${nights === 1 ? t("calendarScreen.night") : t("calendarScreen.nights")})`
              : t("calendarScreen.confirm")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}