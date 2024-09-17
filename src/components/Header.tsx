import {
  Box,
  IconButton,
  InputBase,
  Stack,
  Badge,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Breadcrumb } from "./Breadcrumbs";
import { useState } from "react";
import { AsideDrawer } from "./AsideDrawer";
import { IconForHeader } from "./customs/IconForHeader";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  return (
    <>
      <Stack
        component="header"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "8px", md: "16px" },
          pb: { md: "49px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: { xs: "100%", md: "260px" },
            flexWrap: "wrap",
          }}
        >
          <Breadcrumb />
          <IconButton onClick={toggleDrawer(true)} sx={{ p: 0, ml: "auto" }}>
            <MenuIcon fontSize="small" />
          </IconButton>
          <Typography variant="h2">Billing</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "100%", md: "auto" },
            mt: { xs: "8px", md: "0" },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <InputBase
            placeholder="Search here"
            sx={{
              flexGrow: 1,
              borderRadius: "8px",
              padding: "8px 12px",
              border: "1px solid",
              borderColor: "primary.light",
              width: { xs: "100px", sm: "173px" },
              height: "42px",

            }}
          />
          <IconForHeader icon={<AccountCircleIcon />} />
          <IconForHeader icon={<SettingsIcon/>} />
          <IconForHeader
            icon={<NotificationsIcon />}
            badgeContent={11}
          />
        </Box>
      </Stack>
      <AsideDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};
