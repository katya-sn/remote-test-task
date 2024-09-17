import { Box, Stack, Typography } from "@mui/material";
import billingInfo from "./../data/billing.json";
import { CustomStack } from "./CustomContainer";
import { DateRangeSelector } from "./DateRange";
import { Transaction } from "./Transaction";
import { useEffect, useState } from "react";
import { TransactionType } from "../types/trasactionType";

export const Transactions = () => {
  const defaultStartDate: Date = new Date("2020-03-23");
  const defaultEndDate: Date = new Date("2020-03-27");

  const [startDate, setStartDate] = useState<Date>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date>(defaultEndDate);

  const { transactions } = billingInfo;

  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionType[]
  >([]);
  const [newestTransactions, setNewestTransactions] = useState<
    TransactionType[]
  >([]);
  const [yesterdayTransactions, setYesterdayTransactions] = useState<
    TransactionType[]
  >([]);

  const filterTransactions = () => {
    if (!transactions || transactions.length === 0) return;

    const filtered = transactions.filter((item) => {
      const transactionDate = new Date(item.date);
      return (
        (!startDate || transactionDate >= startDate) &&
        (!endDate || transactionDate <= endDate)
      );
    });

    setFilteredTransactions(filtered);

    const maxDate = filtered.reduce((latest, item) => {
      const transactionDate = new Date(item.date);
      return transactionDate > latest ? transactionDate : latest;
    }, new Date(0));

    const newest = filtered.filter(
      (item) => new Date(item.date).getTime() === maxDate.getTime()
    );
    const yesterday = filtered.filter(
      (item) => new Date(item.date).getTime() !== maxDate.getTime()
    );

    setNewestTransactions(newest);
    setYesterdayTransactions(yesterday);
  };

  useEffect(() => {
    filterTransactions();
  }, [startDate, endDate, transactions]);

  return (
    <Box sx={{ gridColumn: { md: "span 4" } }}>
      <CustomStack
        width="518px"
        sx={{
          height: { md: "584px" },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h2">Your Transaction`s</Typography>
          <DateRangeSelector
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </Stack>

        <Stack spacing="24px">
          <Typography variant="h4" color="primary.light">
            NEWEST
          </Typography>
          {newestTransactions.map((item) => (
            <Transaction key={item.id} {...item} />
          ))}
        </Stack>

        <Stack spacing="24px" mt="24px">
          <Typography variant="h4" color="primary.light">
            YESTERDAY
          </Typography>
          {yesterdayTransactions.map((item) => (
            <Transaction key={item.id} {...item} />
          ))}
        </Stack>
      </CustomStack>
    </Box>
  );
};
