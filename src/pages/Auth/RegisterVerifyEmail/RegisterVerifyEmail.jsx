import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Card from "../../../Components/Card";
import { MdEmail } from "react-icons/md";
import { useMutation } from "react-query";
import { sendverificationmail } from "../../../api/query/userQuery";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

//

const RegisterVerifyEmail = () => {
  const { Email } = useAuth();
  const [SignupEmail, setSignupEmail] = useState("");
  const toast = useToast();

  if (Email == "") {
    return <Center minH="100vh">Invalid email</Center>;
  }

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["Send-Verification-Mail"],
    mutationFn: sendverificationmail,
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
    },
    enabled: !!SignupEmail,
  });

  useEffect(() => {
    const data = localStorage.getItem("email");
    if (data) {
      setSignupEmail(data);
      mutate({ email: data });
    } else {
      localStorage.setItem("email", Email);
    }
  }, []);
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
              We have sent you an email verification to{" "}
              {SignupEmail ? (
                <Text color="p.black" as="b">
                  {SignupEmail}
                </Text>
              ) : (
                <Text color="p.black" as="b">
                  {Email}
                </Text>
              )}
              If you didn’t receive it, click the button below.
            </Text>
            <Button
              isLoading={isLoading}
              onClick={() => {
                mutate({ email: SignupEmail });
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
