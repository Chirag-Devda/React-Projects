import { Button, Icon } from "@chakra-ui/react";
const Buttons = ({ IconComponent, Btn }) => {
  return (
    <Button leftIcon={<Icon as={IconComponent} color="white" />}>{Btn}</Button>
  );
};

export default Buttons;
