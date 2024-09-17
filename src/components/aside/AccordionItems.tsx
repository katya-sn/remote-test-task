import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const StyledTypography = ({ ...props }) => {
  return (
    <Typography variant="h3" fontWeight='400' color='white' {...props} />
  )
}

export const StyledAccordion = (props: any) => {
  return (
    <Accordion
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'white',
        width: '218px',
      }}
      {...props}
    />
  );
};

export const StyledAccordionSummary = (props: any) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
      {...props}
    />
  );
};

export const StyledAccordionDetails = (props: any) => {
  return (
    <AccordionDetails
      sx={{
        color: 'white',
        bgcolor: 'transparent',
        ...props.sx,
      }}
      {...props}
    />
  );
};
