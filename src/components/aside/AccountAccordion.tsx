import { AccordionDetails, Box, List, Typography } from "@mui/material";
import { StyledAccordion, StyledAccordionSummary, StyledTypography } from "./AccordionItems";
import { MenuItem } from "./MenuItem";
import { useState } from "react";

export const AccountAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  return (
    <Box width="218px">
          <Typography variant="h4" color="white" mb='11px'>
            PAGES
          </Typography>
          <StyledAccordion
            expanded={expanded === "accountPanel"}
            onChange={handleChange("accountPanel")}
          >
            <StyledAccordionSummary
              aria-controls="accountPanel-content"
              id="accountPanel-header"
              sx={{
                bgcolor:
                  expanded === "accountPanel" ? "#4F4F52" : "transparent",
                height: "48px",
                "&.Mui-expanded": {
                  minHeight: "auto",
                },
              }}
            >
              <StyledTypography>A Account</StyledTypography>
            </StyledAccordionSummary>
            <AccordionDetails sx={{ width: "100%", p: "0" }}>
              <List>
               <MenuItem text="S Settings" />
               <MenuItem text="B Billings" selected/>
              </List>
            </AccordionDetails>
          </StyledAccordion>
        </Box>
  )
}