import {
  Card,
  Center,
  Container,
  HStack,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
const Signup = () => {
  let SignupFromvalidationschema = object({
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
    <Container>
      <Center minH="100vh">
        <Card w="492px" p={6}>
          <Stack spacing={10}>
            <Stack gap="18px">
              <Text color="p.black" textStyle="h1">
                Welcome to Crypto App
              </Text>
              <Text textStyle="p2" color="black.60">
                Create a free account by filling data below.
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
              validationSchema={SignupFromvalidationschema}
            >
              {() => (
                <Form>
                  <Stack spacing={6}>
                    <HStack>
                      <Field name="name">
                        {({ field, meta }) => (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                              {...field}
                              name="name"
                              placeholder="Enter your name..."
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="surname">
                        {({ field, meta }) => (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="surname">Surname</FormLabel>
                            <Input {...field} name="surname" />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </HStack>
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
                    <Field name="repeatpassword">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="repeatpassword">
                            Repeatpassword
                          </FormLabel>
                          <Input
                            {...field}
                            name="repeatpassword"
                            type="password"
                            placeholder="Enter your repeatpassword..."
                          />{" "}
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Checkbox defaultChecked>
                      <Text textStyle="p3" as="span">
                        I agree with
                      </Text>
                      <Text textStyle="p3" color="p.purple" as="span">
                        Terms & Conditions.
                      </Text>
                    </Checkbox>
                    <Button type="submit">Create Account</Button>
                    <Text textStyle="p3" textAlign="center">
                      Already have an account?
                      <Link to="/signin">
                        <Text textStyle="p3" color="p.purple" as="span">
                          Log In
                        </Text>
                      </Link>
                    </Text>
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

export default Signup;
