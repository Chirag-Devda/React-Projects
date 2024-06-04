import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Spinner,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Card from "../../../Components/Card";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import { VerifyEmailAddressSignup } from "../../../api/query/userQuery";
import { useQuery } from "react-query";
const RegisterSuccess = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const token = useParams();
  console.log(navigate);
  const { isSuccess, isLoading } = useQuery({
    queryKey: ["VerifyMailSuccess"],
    queryFn: () => VerifyEmailAddressSignup(token),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
        isClosable: true,
      });
      navigate("/signup");
    },
    enabled: !!token,
  });
  if (isLoading) {
    return (
      <Center minH="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }
  return (
    <Container>
      <Center minH="100vh">
        {isSuccess && (
          <Card
            p={{
              base: "4",
              md: "10",
            }}
            showcard={true}
          >
            <VStack spacing={6}>
              <Icon as={FaCheckCircle} boxSize={12} color="green" />
              <Text fontWeight="medium" textStyle="h3">
                Successfully Registration
              </Text>
              <Text textAlign="Center" color="black.60">
                Hurray! You have successfully created your account. Enter the
                app to explore all it’s features.
              </Text>
              <Box w="full">
                <Link to="/signin">
                  <Button w="full">Enter the App</Button>
                </Link>
              </Box>
            </VStack>
          </Card>
        )}
      </Center>
    </Container>
  );
};

export default RegisterSuccess;
