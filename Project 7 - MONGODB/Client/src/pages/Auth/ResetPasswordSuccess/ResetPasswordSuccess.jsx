import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../../../Components/Card";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const ResetPasswordSuccess = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showcard={true}
        >
          <VStack spacing={6}>
            <Icon as={FaCheckCircle} boxSize={12} color="green" />
            <Stack spacing={4}>
              <Text fontWeight="medium" textStyle="h3">
                Password Reset Done
              </Text>
              <Text textAlign="Center" color="black.60">
                Now you can access you account.
              </Text>
            </Stack>
            <Box w="full">
              <Link to="/signin">
                <Button fontWeight="light" w="full">
                  Sign in
                </Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPasswordSuccess;
