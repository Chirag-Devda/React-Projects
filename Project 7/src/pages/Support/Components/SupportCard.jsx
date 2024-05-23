import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
const SupportCard = ({ RightComponent, text, IconUrl, title }) => {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      gap={6}
    >
      <Stack maxW="24rem" spacing="4">
        <Icon as={IconUrl} boxSize={6} color="p.purple" />
        <Text textStyle="h1">{title}</Text>
        <Text fontSize="sm">{text}</Text>
      </Stack>
      {RightComponent}
    </Flex>
  );
};

export default SupportCard;
