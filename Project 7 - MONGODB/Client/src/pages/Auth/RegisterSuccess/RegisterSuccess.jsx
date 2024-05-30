import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../../../Components/Card";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const RegisterSuccess = () => {
  return (
    <Container bg={{ base: "white", md: "transparent" }}>
      <Center minH="100vh">
        <Card>
          <VStack spacing={6}>
            <Icon as={FaCheckCircle} boxSize={12} color="green" />
            <Text fontWeight="medium" textStyle="h3">
              Successfully Registration
            </Text>
            <Text textAlign="Center" color="black.60">
              Hurray! You have successfully created your account. Enter the app
              to explore all it’s features.
            </Text>
            <Box w="full">
              <Link to="/signin">
                <Button w="full">Enter the App</Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterSuccess;
