import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Step 1 ",
    description: `Are you ready to start your advanture and experience a whole new world🙌
    Well all you have to do is put on a smile and look at the top right corner of the screen.
    Yup thats right the "Search Bar."😵‍💫 `,
  },
  {
    label: "Step 2",
    description:
      `Enter the show you are looking for or just enter your favorite word.
      Yup it's that simple 😊😊.`,
  },
  {
    label: "Step 3 🔥🔥",
    description: 
    `Just press Enter and enjoy our great collection of shows✨✨.
    ლ｜＾Д＾ ლ｜ `,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        bgcolor: "#bbdefb",
        "&:hover": {
          backgroundColor: "#e1bee7",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
