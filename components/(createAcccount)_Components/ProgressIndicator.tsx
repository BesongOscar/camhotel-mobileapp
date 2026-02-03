import React from "react";
import { View } from "react-native";
import { progressIndicatorStyles as styles } from "@/styles/components/(createAccount)_Components/ProgressIndicator";

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
                    backgroundColor: isCompleted ? "#00ee" : "#ccc",
                  },
                ]}
              />
            )}

            {/* Dot */}
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: isCompleted ? "#00ee" : "#ccc",
                  borderWidth: isActive ? 2 : 0,
                  borderColor: isActive ? "#00ee" : "transparent",
                },
              ]}
            />

            {/* Right line */}
            {index !== totalSteps - 1 && (
              <View
                style={[
                  styles.line,
                  {
                    backgroundColor: isCompleted ? "#00ee" : "#ccc",
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
