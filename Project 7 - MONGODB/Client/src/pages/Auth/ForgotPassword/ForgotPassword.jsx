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
  Icon,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import { Link } from "react-router-dom";
import Card from "../../../Components/Card";
import { BsArrowLeft } from "react-icons/bs";
const ForgotPassword = () => {
  let ForgotFormValidation = object({
    email: string().email("email is invalid").required("Email is required"),
  });
  return (
    <Container bg={{ base: "white", md: "transparent" }}>
      <Center minH="100vh">
        <Card>
          <Stack spacing="32px">
            <Stack gap="4">
              <Link to="/signin">
                <Icon boxSize={6} as={BsArrowLeft} />
              </Link>
              <Text color="p.black" textStyle="h1">
                Forgot Password
              </Text>
              <Text textStyle="p2" color="black.60">
                Enter your email address for which account you want to reset
                your password.
              </Text>
            </Stack>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={ForgotFormValidation}
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
                    <Button type="submit" variant="outline" width="full">
                      Reset Password
                    </Button>
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

export default ForgotPassword;