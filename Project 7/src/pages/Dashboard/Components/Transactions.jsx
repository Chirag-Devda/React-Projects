import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaRupeeSign, FaBitcoin } from "react-icons/fa";
import { Fragment } from "react";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBitcoin,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹90,123.10",
      timestamp: "2022-09-09 8:06 PM",
    },
  ];
  return (
    <CustomCard
      h="full"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text color="black.80" fontSize="1rem">
        Recent Transactions
      </Text>
      <Stack spacing="4">
        {transactions.map((item) => (
          <Fragment key={item.id}>
            <HStack gap="4">
              <Grid
                bg="
            black.5"
                boxSize="10"
                borderRadius="50%"
                placeItems="center"
              >
                <Icon as={item.icon} />
              </Grid>
              <Stack w="full" gap="4">
                <HStack justify="space-between">
                  <Stack spacing="0">
                    <Text textStyle="h6">{item.text}</Text>
                    <Text color="black.60" fontSize="sm">
                      {item.timestamp}
                    </Text>
                  </Stack>
                  <Text textStyle="h6">{item.amount}</Text>
                </HStack>
                {transactions.length != 0 && <Divider />}
              </Stack>
            </HStack>
          </Fragment>
        ))}
      </Stack>
      <Button
        color="black"
        w="full"
        bg="black.10"
        fontSize="sm"
        _hover={{
          bg: "gray.5",
        }}
      >
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
