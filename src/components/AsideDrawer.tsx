import React from "react";
import {
  Drawer,
  Typography,
  Divider,
  Stack,
  Box,
} from "@mui/material";
import { AccountAccordion } from "./aside/AccountAccordion";
import { UserAccordion } from "./aside/UserAccordion";
import { BASE_URL } from "../App";

interface AsideDrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const AsideDrawer: React.FC<AsideDrawerProps> = ({
  isDrawerOpen,
  toggleDrawer,
}) => {

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
      <Stack
        spacing={2}
        sx={{
          pt: "19px",
          width: 250,
          background: "linear-gradient(to bottom, #3E3D45 0%, #202020 100%)",
          height: "100%",
          alignItems: "center",
        }}
        role="presentation"
      >
        <Box sx={{display: 'flex', alignItems: 'center', gap: '9px'}}>
          <img src={`${BASE_URL}/icons/aside.svg`} alt="material-logo" />
          <Typography variant="h3" color="white" textAlign='center'>
           Material Dashboard 2 PRO
        </Typography>
        </Box>

        <Divider
          sx={{
            width: "100%",
            bgcolor: "white",
            height: "1px",
          }}
        />

        <UserAccordion />

        <Divider
          sx={{
            width: "100%",
            bgcolor: "white",
            height: "1px",
          }}
        />

        <AccountAccordion />
      </Stack>
    </Drawer>
  );
};
