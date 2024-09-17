import React from "react";
import {
  Box,
  BoxProps,
  CssBaseline,
  GlobalStyles,
  Stack,
  SxProps,
} from "@mui/material";

interface CustomContainerProps extends BoxProps {
  children: React.ReactNode;
}

export const CustomContainer: React.FC<CustomContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*": {
            boxSizing: "border-box",
          },
          "*::before": {
            boxSizing: "border-box",
          },
          "*::after": {
            boxSizing: "border-box",
          },
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: "#F0F2F5",
          },
        }}
      />
      <Box
        bgcolor="#F0F2F5"
        sx={{
          width: {
            xs: "390px",
            sm: "1326px",
          },
          paddingX: {
            xs: "16px",
            sm: "24px",
          },
          paddingTop: "24px",
          marginX: "auto",
        }}
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

interface CustomStackProps {
  children: React.ReactNode;
  width?: string | number;
  sx?: SxProps;
}

export const CustomStack: React.FC<CustomStackProps> = ({
  children,
  width,
  sx,
}) => {
  return (
    <Stack
      component="section"
      bgcolor="white"
      borderRadius="12px"
      height="auto"
      sx={{
        width: { xs: "100%", md: width },
        padding: { xs: "15px 10px", md: "22px 16px" },
        gap: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};
