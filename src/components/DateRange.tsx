import React, { useState, useRef } from 'react';
import { Box, Button, Typography, Popper } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  startDate: Date,
  endDate: Date,
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

export const DateRangeSelector: React.FC<Props> = ({startDate, endDate, setStartDate, setEndDate}) => {
  const [open, setOpen] = useState<boolean>(false);
  
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <Box>
      <Button
        ref={anchorRef}
        onClick={handleToggle}
        sx={{color: 'primary.light'}}
        startIcon={<CalendarMonthIcon />}
      >
        <Typography variant="h3" fontWeight="400">
          {startDate && endDate
            ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
            : "Select Date Range"}
        </Typography>
      </Button>

      <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
        <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, backgroundColor: 'primary.main' }}>
          <Typography variant="h6" mb={1}>Start Date:</Typography>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date as Date)}
            dateFormat="dd MMM yyyy"
            placeholderText="Select Start Date"
          />
          
          <Typography variant="h6" mt={2} mb={1}>End Date:</Typography>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date as Date)}
            dateFormat="dd MMM yyyy"
            placeholderText="Select End Date"
            minDate={startDate as Date}
          />
        </Box>
      </Popper>
    </Box>
  );
};
