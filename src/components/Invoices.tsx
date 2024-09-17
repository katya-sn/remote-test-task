import { Box, Button, Stack, Typography } from "@mui/material";
import billingInfo from "./../data/billing.json";
import { CustomStack } from "./CustomContainer";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export const Invoices = () => {
  const { invoices } = billingInfo;
  return (
    <CustomStack
      width="410px"
      sx={{
        gridColumn: { md: "span 4" },
        gridRow: { md: "span 2" },
        height: { xs: "auto", md: "412px" },
        gap: { xs: "20px", md: "25px" },
      }}
    >
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h2">Invoices</Typography>
        <Button
          variant="outlined"
          sx={{
            p: 0,
            width: "85px",
            height: "33px",
            borderColor: "secondary.contrastText",
          }}
        >
          <Typography variant="h4" color="secondary.contrastText">
            VIEW ALL
          </Typography>
        </Button>
      </Stack>

      <Stack spacing={{ xs: "20px", md: "25px" }}>
        {invoices.map((invoice) => (
          <Stack
            direction="row"
            spacing={2}
            key={invoice.id}
            alignItems="center"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h3">{invoice.date}</Typography>
              <Typography variant="h5">{invoice.id}</Typography>
            </Box>
            <Typography variant="h3" color="primary.light" fontWeight="400">
              ${invoice.amount}
            </Typography>
            <Button
              variant="text"
              href={invoice.pdf_url}
              target="_blank"
              sx={{
                color: "primary.contrastText",
              }}
              startIcon={<PictureAsPdfIcon fontSize="small" />}
            >
              <Typography variant="h3">PDF</Typography>
            </Button>
          </Stack>
        ))}
      </Stack>
    </CustomStack>
  );
};
