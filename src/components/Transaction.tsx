import React, { useState } from "react";
import { Typography, IconButton, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { TransactionType } from "../types/trasactionType";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export const Transaction: React.FC<TransactionType> = ({
  description,
  amount,
  date,
  time,
  type,
  status,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isIncome = type === "income";
  const isPending = status === "pending";

  return (
    <Stack height="auto" spacing="10px">
      <Stack
        height="40px"
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <IconButton
          onClick={handleExpandClick}
          sx={{
            color: isPending
              ? "primary.contrastText"
              : isIncome
              ? "green"
              : "red",
            width: { xs: "30px", md: "34px" },
            height: { xs: "30px", md: "34px" },
            borderRadius: "50%",
            border: "1px solid",
            borderColor: isPending
              ? "primary.contrastText"
              : isIncome
              ? "green"
              : "red",
          }}
        >
          {isPending ? (
            <PriorityHighIcon />
          ) : isIncome ? (
            <ExpandLessIcon />
          ) : (
            <ExpandMoreIcon />
          )}
        </IconButton>
        <Stack spacing="3px" ml="16px">
          <Typography variant="h3">{description}</Typography>
          <Typography variant="h5">
            {date} {time}
          </Typography>
        </Stack>
        <Typography variant="h3" color={isPending ? "primary.contrastText" : (isIncome ? "green" : "red")} ml="auto">
          {isPending
            ? "Pending"
            : isIncome
            ? `+ $${amount}`
            : `- $${Math.abs(amount)}`}
        </Typography>
      </Stack>
      {expanded && (
        <Typography variant="body2">Details would be here...</Typography>
      )}
    </Stack>
  );
};
