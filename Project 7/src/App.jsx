import { useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Topnav from "./Components/Topnav";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex>
        <Dashboard />
        <Box flexGrow={1}>
          <Topnav />
        </Box>
      </Flex>
    </>
  );
}

export default App;
