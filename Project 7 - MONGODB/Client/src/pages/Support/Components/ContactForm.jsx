import {
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ContactForm = () => {
  return (
    <Card flexGrow={1} p={6}>
      <Stack spacing="32px">
        <Text textAlign="center">
          You will receive response within 24 hours of time of submit.
        </Text>
        <Stack spacing={6}>
          <HStack
            flexDirection={{
              base: "column",
              sm: "row",
            }}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input h="38px" placeholder="Enter Name..." />
            </FormControl>
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input h="38px" placeholder="Enter Surname..." />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input h="38px" type="email" placeholder="Enter Email..." />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter Email..."></Textarea>
            </FormControl>
          </HStack>
          <HStack>
            <Checkbox defaultChecked>
              I agree with
              <Text color="p.purple" as="span">
                Terms & Conditions.
              </Text>
            </Checkbox>
          </HStack>
          <Button colorScheme="gray" bg="black.10">
            Send a Message
          </Button>
          <Button colorScheme="gray" bg="Bgray.5">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactForm;
