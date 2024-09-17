import {Stack, Typography, styled } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import { CustomStack } from "./CustomContainer";
import { BASE_URL } from "../App";
import billingInfo from "./../data/billing.json";

const CardNumber = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "bold",
}));

export const CreditCard = ({}) => {
  const { cards } = billingInfo;
  const card = cards[0];
  return (
    <CustomStack
      width="410px"
      sx={{
        gridColumn: { md: "span 4" },
        height: "222px",
        justifyContent: "space-between",
        bgcolor: "secondary.dark",
        color: "white",
      }}
    >
      <WifiIcon />
      <CardNumber>{card.number}</CardNumber>
      <Stack direction="row">
        <Stack spacing="3px">
          <Typography variant="h6">Card Holder</Typography>
          <Typography variant="h2" color="white">
            {card.name}
          </Typography>
        </Stack>
        <Stack spacing="3px" ml={3}>
          <Typography variant="h6">Expires</Typography>
          <Typography variant="h2" color="white">
            {card.expiry_date}
          </Typography>
        </Stack>
        <img
          src={`${BASE_URL}/icons/mastercard.svg`}
          style={{
            width: "42px",
            height: "33px",
            marginLeft: "auto",
            alignSelf: "end",
          }}
        />
      </Stack>
    </CustomStack>
  );
};
