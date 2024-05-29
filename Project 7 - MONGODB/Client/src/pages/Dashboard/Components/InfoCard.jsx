import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ TagName, Texts, inverted, imageUrl, flexGrow }) => {
  return (
    <CustomCard
      flexGrow={flexGrow ? "1" : ""}
      bg={inverted ? "p.purple" : "white"}
      bgImage={imageUrl}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        px="6px"
        py="1"
        borderRadius="full"
        fontSize="xs"
      >
        {TagName}
      </Tag>
      <Text
        color={inverted ? "white" : "black"}
        mt="4"
        textStyle="h5"
        fontWeight="medium"
      >
        {Texts}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
