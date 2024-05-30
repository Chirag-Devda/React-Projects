import { Card as ChakraCard } from "@chakra-ui/react";

const Card = ({ children, ...props }) => {
  return (
    <ChakraCard
      w="492px"
      p={{
        base: "0",
        md: "6",
      }}
      bg={{
        base: "transparent",
        md: "white",
      }}
      borderRadius={{
        base: "0",
        md: "1rem",
      }}
      boxShadow={{
        base: "none",
        md: "lg",
      }}
      {...props}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
