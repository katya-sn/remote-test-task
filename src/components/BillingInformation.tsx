import { Button, Stack, Typography } from "@mui/material";
import { CustomStack } from "./CustomContainer";
import billingInfo from "./../data/billing.json";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const BillingInformation = () => {
  const { billing_information } = billingInfo;
  return (
    <CustomStack
      width="736px" sx={{
        gridColumn: { md: "span 7" },
        height: { md: "584px" }
      }}
    >
      <Typography variant="h2">Billing Information</Typography>
      <Stack spacing={{ xs: "20px", md: "25px" }}>
        {billing_information.map((item) => (
          <Stack
            justifyContent="space-between"
            key={item.id}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              padding: { xs: "10px", md: "24px" },
              borderRadius: "8px",
              height: { xs: "140px", md: "146px" },
              bgcolor: "#F8F9FA",
            }}
          >
            <Stack spacing="15px">
              <Typography variant="h3">{item.name}</Typography>
              <Stack spacing="6px">
                <Stack direction="row" spacing="11px">
                  <Typography variant="h5" color="primary.light">
                    Company Name:
                  </Typography>
                  <Typography variant="h4">{item.company_name}</Typography>
                </Stack>
                <Stack direction="row" spacing="11px">
                  <Typography variant="h5" color="primary.light">
                    Email Address:
                  </Typography>
                  <Typography variant="h4">{item.email}</Typography>
                </Stack>
                <Stack direction="row" spacing="11px">
                  <Typography variant="h5" color="primary.light">
                    VAT Number:
                  </Typography>
                  <Typography variant="h4">{item.vat_number}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={{ xs: "10px", md: "34px" }}
              alignSelf={{ xs: "end", md: "start" }}
            >
              <Button
                sx={{ color: "error.main" }}
                startIcon={
                  <DeleteIcon sx={{ width: "16px", height: "16px" }} />
                }
              >
                <Typography variant="h4">DELETE</Typography>
              </Button>
              <Button
                sx={{ color: "primary.contrastText" }}
                startIcon={<EditIcon sx={{ width: "16px", height: "16px" }} />}
              >
                <Typography variant="h4">EDIT</Typography>
              </Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </CustomStack>
  );
};
