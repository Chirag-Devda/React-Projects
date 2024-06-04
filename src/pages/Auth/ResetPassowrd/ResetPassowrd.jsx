import {
  Center,
  Container,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import Card from "../../../Components/Card";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { verfiyForgottokensend } from "../../../api/query/userQuery";

const ResetPasswordFormvalidationschema = object({
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatnewpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat password is requirewd"),
});
const ResetPassword = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { token } = useParams();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["ResetPassword"],
    mutationFn: verfiyForgottokensend,
    onSuccess: (data) => {
      console.log(data);
      navigate("/reset-success");
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
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showcard={true}
        >
          <Stack spacing={6}>
            <Stack gap="12px">
              <Text color="p.black" textStyle="h1">
                Reset Password
              </Text>
              <Text textStyle="p2" color="black.60">
                Enter your new password.
              </Text>
            </Stack>
            <Formik
              initialValues={{
                password: "",
                repeatnewpassword: "",
              }}
              onSubmit={(values) => {
                mutate({
                  token: token,
                  password: values.password,
                });
              }}
              validationSchema={ResetPasswordFormvalidationschema}
            >
              {() => (
                <Form>
                  <Stack spacing={6}>
                    <Field name="password">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input
                            {...field}
                            name="password"
                            type="password"
                            placeholder="Enter your password. . ."
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="repeatnewpassword">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="repeatnewpassword">
                            Repeat New password
                          </FormLabel>
                          <Input
                            {...field}
                            name="repeatnewpassword"
                            type="password"
                            placeholder="repeat new password. . ."
                          />{" "}
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button type="submit" variant="outline">
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

export default ResetPassword;
