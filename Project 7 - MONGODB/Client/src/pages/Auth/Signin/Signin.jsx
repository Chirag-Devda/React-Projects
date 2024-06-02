import {
  Center,
  Container,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  FormErrorMessage,
  HStack,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import { Link } from "react-router-dom";
import Card from "../../../Components/Card";
import { useMutation } from "react-query";
import { signinuser } from "../../../api/query/userQuery";
import { useToast } from "@chakra-ui/react";
const SigninFormValidations = object({
  email: string().email("email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signin = () => {
  // for GET request we use useQuery and for post , put , patch , delete requests we used useMutaton HOOK
  const toast = useToast();

  const { mutate, isLoading, error, isError } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinuser,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "Signin Error",
        description: error.message,
        duration: 1000,
        isClosable: true,
        status: "error",
      });
    },
  });

  return (
    <Container bg={{ base: "white", md: "transparent" }}>
      <Center minH="100vh">
        <Card>
          <Stack spacing={10}>
            <Stack gap="1.125rem">
              <Text color="p.black" textStyle="h1">
                Welcome to Crypto App
              </Text>
              <Text textStyle="p2" color="black.60">
                Enter your credentials to access the account.
              </Text>
            </Stack>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                mutate(values);
              }}
              validationSchema={SigninFormValidations}
            >
              {() => (
                <Form>
                  <Stack spacing={6}>
                    <Field name="email">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            {...field}
                            name="email"
                            type="email"
                            placeholder="Enter your email..."
                          />{" "}
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input
                            {...field}
                            name="password"
                            type="password"
                            placeholder="Enter your password..."
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <HStack justify="space-between">
                      <Checkbox defaultChecked>
                        <Text textStyle="p3" as="span">
                          Remember me
                        </Text>
                      </Checkbox>
                      <Text textStyle="p3" color="p.purple">
                        <Link to="/forgot-password">Forget Password?</Link>
                      </Text>
                    </HStack>
                    <Stack spacing={3}>
                      <Button isLoading={isLoading} type="submit">
                        Login
                      </Button>
                      <Link to="/signup">
                        <Button variant="outline" width="full">
                          Create Account
                        </Button>
                      </Link>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
};

export default Signin;
