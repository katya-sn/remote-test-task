import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledTypography } from "./aside/AccordionItems";

export const Breadcrumb = () => {
  const navigate = useNavigate();

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        width: { xs: "280px", md: "206px" },
        height: '20px',
      }}
    >
      <Link
        color="inherit"
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
      >
        <HomeIcon sx={{width: '16px', height: '16px'}} />
      </Link>
      <Link
        color="inherit"
        onClick={() => navigate("/pages")}
        sx={{ cursor: "pointer", textDecoration: "none" }}
      >
        <StyledTypography color='primary.contrastText'>Pages</StyledTypography>
      </Link>
      <Link
        color="inherit"
        onClick={() => navigate("/account")}
        sx={{ cursor: "pointer", textDecoration: "none" }}
      >
        <StyledTypography color='primary.contrastText'>Account</StyledTypography>
      </Link>
      <StyledTypography color='primary.contrastText'>Billing</StyledTypography>
    </Breadcrumbs>
  );
};
