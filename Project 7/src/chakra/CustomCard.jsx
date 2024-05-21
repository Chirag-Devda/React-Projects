import { chakra } from "@chakra-ui/react";

// this component i only a div which have bg ,borderRadius,padding which is common at all main components
export const CustomCard = chakra("div", {
  baseStyle: {
    bg: "white",
    borderRadius: "1rem",
    p: "6",
  },
});
