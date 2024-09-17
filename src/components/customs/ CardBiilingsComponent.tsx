import { Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import billingInfo from "../../data/billing.json";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
  amount: string;
};

const CardItem: React.FC<Props> = ({ icon, title, text, amount }) => {
  return (
    <Stack
      sx={{
        bgcolor: "white",
        borderRadius: "12px",
        width: { xs: "158px", md: "194px" },
        height: "100%",
        p: { xs: "10px", md: "16px" },
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <IconButton
        sx={{
          width: { xs: "50px", md: "64px" },
          height: { xs: "50px", md: "64px" },
          bgcolor: "primary.dark",
          color: "white",
          borderRadius: "8px",
          mb: { xs: "14px", md: "18px" },
        }}
      >
        {icon}
      </IconButton>
      <Typography variant="h2" mb="7px">
        {title}
      </Typography>
      <Typography variant="h5" sx={{ mb: { xs: "10px", md: "20px" } }}>
        {text}
      </Typography>
      <Divider
        sx={{
          height: "1px",
          width: "100%",
          bgcolor: "#F0F2F5",
          mb: "15px",
        }}
      />
      <Typography variant="h1">{amount}</Typography>
    </Stack>
  );
};

export const SalaryCard = () => {
  const { account } = billingInfo;
  return (
    <CardItem
      icon={<AccountBalanceIcon fontSize="medium" />}
      title="Salary"
      text="Belong Interactive"
      amount={account.salary}
    />
  );
};

export const PayPalCard = () => {
  const { account } = billingInfo;
  return (
    <CardItem
      icon={<AccountBalanceWalletIcon fontSize="medium" />}
      title="PayPal"
      text="Freelance Payment"
      amount={account.paypal}
    />
  );
};
