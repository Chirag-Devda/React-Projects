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
import { FaBars } from "react-icons/fa6";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" mx="auto" h="16" justify="space-between">
        <Icon
          as={FaBars}
          fontSize="30px"
          display={{
            base: "block",
            md: "none",
          }}
          onClick={onOpen}
        />
        <Heading fontWeight="light">{title}</Heading>
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
