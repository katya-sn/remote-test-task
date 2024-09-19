import { Button, IconButton, Stack, Typography } from "@mui/material";
import { CustomStack } from "./CustomContainer";
import EditIcon from "@mui/icons-material/Edit";
import billingInfo from "./../data/billing.json";
import { BASE_URL } from "../App";

export const PaymentMethod = () => {
  const { cards } = billingInfo;
  return (
    <CustomStack
      width="844px"
      sx={{
        gridColumn: { md: "span 8" },
        height: { md: "164px" },
        gap: "15px",
        pt: { md: "15px" },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2">Payment Method</Typography>
        <Button
          variant="contained"
          size="medium"
          sx={{
            width: "163px",
            height: "42px",
            borderRadius: "8px",
            bgcolor: "secondary.dark",
          }}
        >
          <Typography variant="h4" color="white">
            + ADD NEW CARD
          </Typography>
        </Button>
      </Stack>
      <Stack
        sx={{ flexDirection: { md: "row" }, gap: { xs: "20px", md: "25px" } }}
      >
        {cards.map((card) => (
          <Stack
            key={card.id}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: { xs: "100%", md: "394px" },
              height: { xs: "60px", md: "76px" },
              gap: { xs: "82px", md: "116px" },
              borderRadius: "8px",
              border: "1px solid #7B809A",
            }}
          >
            <Stack spacing="17px" direction="row" alignItems="center">
              <img
                alt="card-type-icon"
                src={`${BASE_URL}/icons/${card.type}.svg`}
                style={{ width: "32px", height: "25" }}
              />
              <Typography variant="h2" textAlign="center">
                {card.number}
              </Typography>
            </Stack>
            <IconButton sx={{ color: "primary.contrastText" }}>
              <EditIcon sx={{ width: "18px", height: "18px" }} />
            </IconButton>
          </Stack>
        ))}
      </Stack>
    </CustomStack>
  );
};
