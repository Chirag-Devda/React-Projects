import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Topnav from "./Topnav.jsx";
import Sidenav from "./Sidenav.jsx";
import SideDrawer from "./SideDrawer.jsx";
const Dashboardlayout = ({ title, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box overflowX="hidden" flexGrow={1}>
        <Topnav title={title} onOpen={onOpen} />
        <Container
          mt="6"
          overflowx="hidden"
          overflowY="auto"
          h="calc(100vh - 87.6px)"
          maxW="70rem"
          css={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default Dashboardlayout;
