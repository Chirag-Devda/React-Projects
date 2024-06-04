import { Card as ChakraCard } from "@chakra-ui/react";

const Card = ({ children, showcard = false, ...props }) => {
  return (
    <ChakraCard
      w="492px"
      p={{
        base: "0",
        md: "6",
      }}
      bg={{
        base: showcard ? "white" : "transparent",
        md: "white",
      }}
      borderRadius={{
        base: showcard ? "1rem" : "0",
        md: "1rem",
      }}
      boxShadow={{
        base: showcard ? "md" : "none",
        md: "lg",
      }}
      {...props}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
