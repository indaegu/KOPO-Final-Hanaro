import React from "react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepTitle,
  Stepper,
  Box,
  StepStatus,
} from "@chakra-ui/react";

const steps = [
  { title: "하나", description: "하나로를 소개합니다!" },
  { title: "둘", description: "하나로의 특장점!" },
  { title: "셋", description: "하나로 사용해보기!" },
];

function SectionStepper({ activeStep }) {
  // activeStep prop 추가
  return (
    <Stepper
      index={activeStep}
      orientation="vertical"
      height="300px"
      gap="0"
      position="fixed"
      left="20px"
      top="200px"
      zIndex="100"
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}

export default SectionStepper;
