import {
  Box,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Topnav = ({ title, onOpen }) => {
  const { logout } = useAuth();
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
        <Text textStyle="h2">{title}</Text>
        <Menu>
          <MenuButton>
            <Icon as={CgProfile} fontSize="30px" />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={logout}>Log Out</MenuItem>
            <Link to="/support">
              <MenuItem>Support</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
