import React from "react";

import Box from "@mui/material/Box";

import { useTheme } from "@mui/material/styles";

import MobileStepper from "@mui/material/MobileStepper";

import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import App from "../App";

const Form = () => {
  const steps = [
    {
      label: "Select campaign settings",

      description: <App />,
    },

    {
      label: "Create an ad group",

      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },

    {
      label: "Create an ad",

      description: `Try out different ad text to see what brings in the most customers,

                    and learn how to enhance your ads using features like ad extensions.

                    If you run into any problems with your ads, find out how to tell if

                    they're running and how to resolve approval issues.`,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = steps.length;

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",

          alignItems: "center",

          height: 100,

          pl: 5,

          bgcolor: "background.default",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>

      <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
        {steps[activeStep].description}
      </Box>

      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Form;
