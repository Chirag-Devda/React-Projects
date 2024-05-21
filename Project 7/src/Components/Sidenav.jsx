import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
const Sidenav = () => {
  const Navlink = [
    {
      icons: RxDashboard,
      text: "Dashboard",
      path: "/",
    },
    {
      icons: TbArrowsDoubleNeSw,
      text: "Transactions",
      path: "/transactions",
    },
  ];
  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        md: "lg",
      }}
      w={{
        base: "full",
        md: "16rem",
      }}
      h={{
        base: "98vh",
        md: "100vh",
      }}
    >
      <Box>
        <HStack pt="3.5rem" justifyContent="center">
          <img src="images/logo.png" alt="logo" width={40} />
          <Heading as="h1" fontSize="1.25rem" textAlign="center">
            CoinHub
          </Heading>
        </HStack>

        <Box mx="3" mt="6">
          {Navlink.map((nav) => (
            <HStack
              key={nav.text}
              py="3"
              px="4"
              color="#797E82"
              _hover={{
                background: "#f3f3f7",
                color: "#171717",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            >
              <Icon as={nav.icons} />
              <Text fontSize="14px" fontWeight="500">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mx="3" mt="6" mb="6">
        <HStack
          py="3"
          px="4"
          color="#797E82"
          _hover={{
            background: "#f3f3f7",
            color: "#171717",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="500">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
