import { CustomContainer } from "./components/CustomContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Invoices } from "./components/Invoices";
import { PaymentMethod } from "./components/PaymentMethod";
import { BillingInformation } from "./components/BillingInformation";
import { Transactions } from "./components/Transactions";
import { CreditCard } from "./components/CreditCard";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Box } from "@mui/material";
import { TabSettings } from "./components/TabSettings";
import { BillingCards } from "./components/BillingCards";

export const BASE_URL = process.env.PUBLIC_URL;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomContainer>
        <Header />
        <Box
          component="main"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(12, 1fr)",
            },
            gridTemplateRows: "auto",
            gap: "20px",
          }}
        >
          <TabSettings />

          <CreditCard />

          <BillingCards />

          <Invoices />

          <PaymentMethod />

          <BillingInformation />

          <Transactions />
        </Box>
        <Footer />
      </CustomContainer>
    </ThemeProvider>
  );
}

export default App;
