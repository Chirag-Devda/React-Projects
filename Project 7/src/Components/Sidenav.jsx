import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const Sidenav = () => {
  const { pathname } = useLocation();

  const isActivePath = (path) => {
    return pathname === path;
  };
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
            <Link key={nav.text} to={nav.path}>
              <HStack
                bg={isActivePath(nav.path) ? "#f3f3f7" : "transperent"}
                color={isActivePath(nav.path) ? "#171717" : "#797E82"}
                py="3"
                px="4"
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
            </Link>
          ))}
        </Box>
      </Box>
      <Box mx="3" mt="6" mb="6">
        <Link to="/support">
          <HStack
            bg={isActivePath("/support") ? "#f3f3f7" : "transperent"}
            color={isActivePath("/support") ? "#171717" : "#797E82"}
            py="3"
            px="4"
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
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
