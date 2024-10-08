import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

const StyledTypography = ({ ...props }) => {
  return (
    <Typography variant="h2" fontWeight='400' textTransform='none' {...props} />
  )
}

export const TabSettings = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      sx={{
        gridColumn: { md: "span 12" },
        width: { xs: "100%", md: "413px" },
        height: {xs: '100px', md: '42px'},
        paddingInline: '7px',
        bgcolor: "primary.main",
        borderRadius: "8px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
      }}
    >
      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="settings tabs"
        sx={{
          color: "primary.contrastText",
          "& .MuiTabs-flexContainer": {
            flexDirection: 'row',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            alignItems: 'center',
            justifyContent: 'center',
          },
          "& .MuiTabs-root": {
            minHeight: 0,
            height: '100%',
          },
          "& .MuiTab-root": {
            minHeight: 0,
            height: '42px',
            textAlign: 'center',
            fontSize: { xs: '14px', md: '16px' },
            flexBasis: { xs: 'calc(50% - 14px)', md: 'auto' },
            marginBottom: { xs: '8px', md: '0' },
          },
          "& .Mui-selected": {
            alignSelf: 'center',
            borderRadius: "8px",
            height: "34px",
            bgcolor: "white",
            boxShadow: "0px 2px 6px 0px #00000040",
          },
        }}
      >
        <Tab
          label={
            <StyledTypography>Messages</StyledTypography>
          }
        />
        <Tab
          label={
            <StyledTypography>Social</StyledTypography>
          }
        />
        <Tab
          label={
            <StyledTypography>Notifications</StyledTypography>
          }
        />
        <Tab
          label={
            <StyledTypography>Backup</StyledTypography>
          }
        />
      </Tabs>
    </Box>
  );
};