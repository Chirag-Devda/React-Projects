import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
const Topnav = () => {
  return (
    <Box>
      <HStack maxW="60rem" mx="auto" h="16" justify="space-between">
        <Heading fontWeight="light">Dashboard</Heading>
        <Menu>
          <MenuButton>
            <Icon as={CgProfile} fontSize="30px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Log Out</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
