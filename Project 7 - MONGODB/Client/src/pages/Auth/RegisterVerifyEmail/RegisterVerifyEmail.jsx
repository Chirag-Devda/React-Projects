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
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useMutation } from "react-query";
import { sendverificationmail } from "../../../api/query/userQuery";
import { useEffect } from "react";

//

const RegisterVerifyEmail = () => {
  const location = useLocation();
  console.log(location);
  const email = location.state.email ?? "";

  if (email == "") {
    return <Center minH="100vh">Invalid email</Center>;
  }

  const toast = useToast();
  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["Send-Verification-Mail"],
    mutationFn: sendverificationmail,
    onSettled: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
        isClosable: true,
      });
    },
    enabled: !!email,
  });
  useEffect(() => {
    mutate({ email });
  }, [email]);

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
            <Icon boxSize={12} as={MdEmail} color="p.purple" />
            <Text fontWeight="medium" textStyle="h4">
              Email Verification
            </Text>
            <Text textAlign="Center" color="black.60">
              We have sent you an email verification to
              <Text color="p.black" as="b">
                {email}
              </Text>
              If you didn’t receive it, click the button below.
            </Text>
            <Button
              isLoading={isLoading}
              onClick={() => {
                mutate({ email });
              }}
              w="full"
              variant="outline"
            >
              Re-Send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterVerifyEmail;
