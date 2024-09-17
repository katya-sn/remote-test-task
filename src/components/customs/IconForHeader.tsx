import { IconButton, Badge } from "@mui/material";

export const IconForHeader = ({ icon, badgeContent }: { icon: JSX.Element; badgeContent?: number }) => (
  <IconButton sx={{width: '16px', height: '16px', ml: '16px'}}>
    {badgeContent ? (
      <Badge
        badgeContent={badgeContent}
        sx={{
          "& .MuiBadge-badge": {
            bgcolor: "#E91F63",
            color: "white",
            top: 3,
            padding: "0 4px",
          },
        }}
      >
        {icon}
      </Badge>
    ) : (
      icon
    )}
  </IconButton>
);
