import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import TransactionCard from "./TransactionCard";
const tableData = [
  {
    id: "HD82NA2H",
    date: "2023-06-20",
    time: "07:00 AM",
    type: {
      name: "INR Deposit",
      tag: "E-Transfer",
    },
    amount: "+₹81,123",
    status: "pending",
  },
  {
    id: "HD82NA4H",
    date: "2023-06-18",
    time: "07:00 AM",
    type: {
      name: "INR Widthdraw",
      tag: "Wire Transfer",
    },
    amount: "-₹55,123",
    status: "processing",
  },
  {
    id: "HD82NA5H",
    date: "2023-06-18",
    time: "07:00 AM",
    type: {
      name: "Buy",
      tag: "BTC",
    },
    amount: "12.0554484 BTC",
    status: "cancelled",
  },
  {
    id: "HD82NA6H",
    date: "2023-06-18",
    time: "07:00 AM",
    type: {
      name: "Sell",
      tag: "BTC",
    },
    amount: "-2.0554484 BTC",
    status: "completed",
  },
  {
    id: "HD82NA7H",
    date: "2023-06-20",
    time: "07:00 AM",
    type: {
      name: "BTC Deposit",
    },
    amount: "+15.5000000",
    status: "pending",
  },
  {
    id: "HD82NA8H",
    date: "2023-06-18",
    time: "07:00 AM",
    type: {
      name: "BTC Widthdraw",
    },
    amount: "-5.05555544",
    status: "completed",
  },
];
const statusColor = {
  pending: "#797E82",
  processing: "#F5A50B",
  completed: "#059669",
  cancelled: "#DC2626",
};
const TransactionTable = () => {
  return (
    <>
      <TableContainer display={{ base: "none", lg: "block" }}>
        <Table colorScheme="gray" variant="simple">
          <Thead mb="16px">
            <Tr>
              <Th>ID</Th>
              <Th>Date & Time</Th>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody color="p.black">
            {tableData.map((data) => (
              <Tr key={data.id}>
                <Td fontWeight="500" fontSize="sm">
                  {data.id}
                </Td>
                <Td>
                  <Stack spacing="0">
                    <Text fontWeight="500" fontSize="sm">
                      {data.date}
                    </Text>
                    <Text color="black.60" fontSize="xs">
                      {data.time}
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack spacing="0">
                    <Text fontWeight="500" fontSize="sm">
                      {data.type.name}
                    </Text>
                    <Text color="black.60" fontSize="xs">
                      {data.type?.tag}
                    </Text>
                  </Stack>
                </Td>
                <Td fontWeight="500" fontSize="sm">
                  {data.amount}
                </Td>
                <Td>
                  <Box
                    fontWeight="500"
                    fontSize="sm"
                    borderRadius="full"
                    width="fit-content"
                    px="6px"
                    py={1}
                    bg={statusColor[data.status]}
                  >
                    {data.status}
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <TransactionCard tableData={tableData} statusColor={statusColor} />
    </>
  );
};

export default TransactionTable;
