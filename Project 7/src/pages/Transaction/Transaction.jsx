import React from "react";
import Dashboardlayout from "../../Components/Dashboardlayout";
import { Card, Flex, Tag } from "@chakra-ui/react";
import Button from "../../Components/Button.jsx";
import { FaArrowDown } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./Components/TransactionTable.jsx";
import TransactionCard from "./Components/TransactionCard.jsx";
const Transaction = () => {
  const Tabes = [
    {
      text: "All",
      Count: 200,
    },
    {
      text: "Deposite",
      Count: 192,
    },
    {
      text: "Withdraw",
      Count: 39,
    },
    {
      text: "Trade",
      Count: 298,
    },
  ];

  return (
    <Dashboardlayout title="Transactions">
      <Flex justify="end" mb="3" mt="5">
        <Button IconComponent={FaArrowDown} Btn="Export CSV" />
      </Flex>
      <Card rounded="16px">
        <Tabs>
          <TabList py="4">
            {Tabes.map((tab) => (
              <Tab
                _selected={{
                  color: "black",
                  borderBottom: "2px solid",
                  borderBottomColor: "p.purple",
                  borderRadius: "1px",
                }}
                key={tab.text}
                color="black.60"
                fontSize="xs"
                fontWeight="medium"
                display="flex"
                gap="2"
                px="6"
              >
                {tab.text}
                <Tag
                  fontSize="xs"
                  fontWeight="medium"
                  px="6px"
                  py="1"
                  rounded="full"
                  colorScheme="gray"
                >
                  {tab.Count}
                </Tag>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <TransactionTable />
              <TransactionCard />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
              <TransactionCard />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
              <TransactionCard />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Dashboardlayout>
  );
};

export default Transaction;
