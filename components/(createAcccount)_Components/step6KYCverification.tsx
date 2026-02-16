import React, { useState } from "react";
import { View } from "react-native";
import KYCstep1 from "./kycVerification_Components/KYCstep1";
import KYCstep2 from "./kycVerification_Components/KYCstep2";

type KYCFlowProps = {
  handlePreviousScreen: () => void;
};

type CompletionState = {
  frontId: boolean;
  backId: boolean;
  selfie: boolean;
};

export default function KYCFlow({ handlePreviousScreen }: KYCFlowProps) {
  const [kycStep, setKycStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<CompletionState>({
    frontId: false,
    backId: false,
    selfie: false,
  });

  const handleNext = () => {
    if (kycStep < 2) setKycStep(kycStep + 1);
  };

  const handlePrevious = () => {
    if (kycStep > 1) setKycStep(kycStep - 1); // go back to previous main form step
  };

  const updateCompletionStatus = (
    stepKey: keyof CompletionState,
    completed: boolean,
  ) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepKey]: completed,
    }));
  };

  return (
    <View>
      {kycStep === 1 && (
        <KYCstep1
          handlePreviousScreen={handlePreviousScreen}
          onNext={handleNext}
        />
      )}
      {kycStep === 2 && (
        <KYCstep2
          handleBack={handlePrevious}
          completedSteps={completedSteps}
          updateCompletionStatus={updateCompletionStatus}
        />
      )}
    </View>
  );
}
