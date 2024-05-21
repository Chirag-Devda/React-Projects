import { HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import Buttons from "../../../Components/Button";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      borderRadius="1rem"
      p="6"
      justify={{
        lg: "space-between",
      }}
      gap={{
        base: "6",
      }}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
    >
      <HStack
        spacing={{
          base: "5",
          lg: "16",
        }}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiTwotoneInfoCircle} cursor="pointer" />
          </HStack>
          <Text textStyle="h2">₹ 112,312.24</Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            gap={{
              base: "4",
              lg: "8",
            }}
            flexDirection={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              xl: "center",
            }}
          >
            <HStack>
              <Text textStyle="h2">22.39401000</Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2">₹ 1,300.00</Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack alignSelf="flex-start">
        <Buttons IconComponent={FaArrowDown} Btn="Deposit" />
        <Buttons IconComponent={FaArrowUp} Btn="Withdraw" />
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
