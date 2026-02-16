import React from "react";
import { View } from "react-native";
import { progressIndicatorStyles as styles } from "@/styles/components/(createAccount)_Components/ProgressIndicator";
import { colors } from "@/src/themes";

type ProgressBarProps = {
  currentStep: number; // which step are we on?
  totalSteps: number; // total steps in form
};

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  return (
    <View style={styles.Progresscontainer}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <View key={index} style={styles.stepContainer}>
            {/* Left line */}
            {index !== 0 && (
              <View
                style={[
                  styles.line,
                  {
                    backgroundColor: isCompleted ? colors.primary : colors.secondary,
                  },
                ]}
              />
            )}

            {/* Dot */}
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: isCompleted ? colors.primary : colors.secondary,
                  borderWidth: isActive ? 2 : 0,
                  borderColor: isActive ? colors.primary : "transparent",
                },
              ]}
            />

            {/* Right line */}
            {index !== totalSteps - 1 && (
              <View
                style={[
                  styles.line,
                  {
                    backgroundColor: isCompleted ? colors.primary : colors.secondary,
                  },
                ]}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}
