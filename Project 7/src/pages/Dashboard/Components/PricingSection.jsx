import { Flex, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import Buttons from "../../../Components/Button";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const PricingSection = () => {
  const Timings = ["7:15", "8:30", "9:50", "10:00", "11:20"];
  return (
    <CustomCard>
      <Flex justify="space-between">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Price</Text>
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
              <Text textStyle="h2">₹26,670.25</Text>
              <HStack color="green.5">
                <Icon as={GoArrowUpRight} />
                <Text>27%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack alignSelf="flex-start">
          <Buttons IconComponent={FaCirclePlus} Btn="Buy" />
          <Buttons IconComponent={FaCircleMinus} Btn="Sell" />
        </HStack>
      </Flex>
      <Tabs variant="unstyled">
        <Flex justify="end">
          <TabList bg="black.5" display="flex" gap="8px" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                key={tab}
                px="6px"
                pt="1"
                pb="3px"
                fontWeight="500"
                fontSize="xs"
                borderRadius="4px"
                _selected={{ color: "black", bg: "white" }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="images/Graph.png" mt="3rem"></Image>
            <HStack justify="space-between">
              {Timings.map((time) => (
                <Text key={time}>{time}</Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PricingSection;
