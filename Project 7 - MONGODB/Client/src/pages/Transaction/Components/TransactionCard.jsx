import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";

const TransactionCard = ({ tableData, statusColor }) => {
  return (
    <>
      {tableData.map((data) => (
        <Card mb={6} key={data.id} display={{ base: "block", lg: "none" }}>
          <CardHeader>
            <Stack divider={<StackDivider />} spacing="4">
              <Stack spacing="0">
                <Text fontWeight="500" fontSize="sm">
                  {data.date}
                </Text>
                <Text color="black.60" fontSize="xs">
                  {data.time}
                </Text>
              </Stack>
            </Stack>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  ID
                </Heading>
                <Text pt="2" fontSize="sm">
                  {data.id}
                </Text>
              </Box>
              <Box>
                <Heading mb="8px" size="xs" textTransform="uppercase">
                  Type
                </Heading>
                <Stack spacing="0">
                  <Text fontWeight="500" fontSize="sm">
                    {data.type.name}
                  </Text>
                  <Text color="black.60" fontSize="xs">
                    {data.type?.tag}
                  </Text>
                </Stack>
              </Box>
              <Box mb={4}>
                <Heading size="xs" textTransform="uppercase">
                  Amount
                </Heading>
                <Text pt="2" fontWeight="500" fontSize="sm">
                  {data.amount}
                </Text>
              </Box>
            </Stack>
            <Box>
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
            </Box>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default TransactionCard;
