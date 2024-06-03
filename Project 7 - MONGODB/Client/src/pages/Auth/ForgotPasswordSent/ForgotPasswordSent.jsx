import { Center, Container, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../../Components/Card";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
const ForgotPasswordSent = () => {
  const params = useParams();
  const email = params.email ?? "";

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
            <Text fontWeight="medium" textStyle="h3">
              Successfully Sent
            </Text>
            <Text textAlign="Center" color="black.60">
              We have sent instructions on how to reset your password to
              <Text color="p.black" as="b">
                {" "}
                {email}
              </Text>{" "}
              Please follow the instructions from the email.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPasswordSent;
