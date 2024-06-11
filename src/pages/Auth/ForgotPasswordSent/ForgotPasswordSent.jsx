import { Center, Container, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../../Components/Card";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
const ForgotPasswordSent = () => {
  const params = useParams();
  const email = params.email ?? "";
  const location = useLocation();
  console.log(
    "Click here to verify:",
    location.state.message.split("URL: %s")[1]
  );
  setTimeout(() => {
    alert("Check Your console To get Verification link");
  }, 5000);
  setTimeout(() => {
    window.location.href = location.state.message.split("URL: %s")[1];
  }, 10000);

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
