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
const Signin = () => {
  let SigninFromvalidationschema = object({
    name: string().required("Name is required"),
    surname: string().required("Surname is required"),
    email: string().email("email is invalid").required("Name is required"),
    password: string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repeatpassword: string()
      .oneOf([ref("password"), null], "Password must match")
      .required("Repeat password is requirewd"),
  });
  return (
    <Container bg={{ base: "white", md: "transparent" }}>
      <Center minH="100vh">
        <Card>
          <Stack spacing={10}>
            <Stack gap="18px">
              <Text color="p.black" textStyle="h1">
                Welcome to Crypto App
              </Text>
              <Text textStyle="p2" color="black.60">
                Enter your credentials to access the account.
              </Text>
            </Stack>
            <Formik
              initialValues={{
                name: "",
                surname: "",
                email: "",
                password: "",
                repeatpassword: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={SigninFromvalidationschema}
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
                      <Link to="/forget-password">
                        <Text textStyle="p3" color="p.purple">
                          Forget Password?
                        </Text>
                      </Link>
                    </HStack>
                    <Stack spacing={3}>
                      <Button type="submit">Login</Button>
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
