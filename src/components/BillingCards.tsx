import { Stack } from "@mui/material";
import { PayPalCard, SalaryCard } from "./ CardBiilingsComponent";

export const BillingCards = () => {
  return (
    <Stack
      component="section"
      sx={{
        gridColumn: { md: "span 4" },
        width: { xs: "100%", md: "413px" },
        height: { xs: "176px", md: "222px" },
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <SalaryCard />
      <PayPalCard />
    </Stack>
  );
};
