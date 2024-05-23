import React from "react";
import Dashboardlayout from "../../Components/Dashboardlayout";
import SupportCard from "./Components/SupportCard";
import ContactForm from "./Components/ContactForm";
import { Flex } from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import { FaComment } from "react-icons/fa6";
import InfoCard from "../Dashboard/Components/InfoCard";

const Support = () => {
  return (
    <Dashboardlayout title="Support">
      <Flex flexDirection="column" gap={10} mt={6}>
        <SupportCard
          RightComponent={<ContactForm />}
          text="Have a question or just want to know more? Feel free to reach out to
          us."
          IconUrl={IoMdMail}
          title="Contact Us"
        />
        <SupportCard
          RightComponent={
            <InfoCard
              imageUrl="images/Grid.png"
              inverted={true}
              TagName="Chatbot"
              Texts="Chat with us now"
              flexGrow={true}
            />
          }
          text=" Don’t have time to wait for the answer? Chat with us now."
          IconUrl={FaComment}
          title="Live Chat"
        />
      </Flex>
    </Dashboardlayout>
  );
};

export default Support;
