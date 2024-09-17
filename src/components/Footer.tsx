import { Link, LinkProps, Stack, Typography } from "@mui/material";
import React from "react";

interface FooterLinkProps extends LinkProps {
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link
    variant="h3"
    fontWeight="400"
    color="primary.light"
    href={href}
    underline="hover"
  >
    {children}
  </Link>
);

export const Footer = () => {
  return (
    <Stack
      component="footer"
      sx={{
        flexDirection: { xs: "column", md: "row-reverse" },
        p: { xs: "10px", md: "25px" },
        gap: { xs: "15px" },
        justifyContent: "space-between",
      }}
    >
      <Stack
        component="nav"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "5px", md: "31px" },
        }}
      >
        <FooterLink href="/creative-team">Creative Team</FooterLink>
        <FooterLink href="/about-us">About Us</FooterLink>
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/license">License</FooterLink>
      </Stack>
      <Typography variant="h3" fontWeight="400" color="primary.light">
        © 2022, made with ♥ by Creative Tim for a better web.
      </Typography>
    </Stack>
  );
};
