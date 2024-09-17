import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { StyledTypography } from "./AccordionItems";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  text: string;
  selected?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ text, selected }) => {
  const navigate = useNavigate();
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ bgcolor: selected ? 'primary.dark' : 'transparent' }} onClick={() => navigate('/settings')}>
        <ListItemText
          primary={
            <StyledTypography variant="h3" fontWeight='400' color='white'>
              {text}
            </StyledTypography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};