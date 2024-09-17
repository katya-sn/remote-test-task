import { AccordionDetails, Typography } from "@mui/material";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledTypography,
} from "./AccordionItems";
import { useState } from "react";
import Person2Icon from "@mui/icons-material/Person2";

export const UserAccordion = () => {
  const [userExpanded, setUserExpanded] = useState<string | false>(false);

  const handleUserChange =
    (panel: string) => (event: React.SyntheticEvent, userExpanded: boolean) => {
      setUserExpanded(userExpanded ? panel : false);
    };

  return (
    <StyledAccordion
      expanded={userExpanded === "userPanel"}
      onChange={handleUserChange("userPanel")}
    >
      <StyledAccordionSummary
        aria-controls="userPanel-content"
        id="userPanel-header"
      >
        <Person2Icon fontSize="small" sx={{mr: '8px'}} />
        <StyledTypography>Brooklyn Alice</StyledTypography>
      </StyledAccordionSummary>
      <AccordionDetails>
        <Typography variant="h5">Some Alice's info would be here</Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};
