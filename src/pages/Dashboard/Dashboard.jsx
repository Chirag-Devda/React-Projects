import { Spinner, Center, Grid, GridItem } from "@chakra-ui/react";
import Dashboardlayout from "../../Components/Dashboardlayout";
import PortfolioSection from "./Components/PortfolioSection";
import PricingSection from "./Components/PricingSection";
import Transactions from "./Components/Transactions";
import InfoCard from "./Components/InfoCard";
import { fetchExample } from "../../api/query/examplequery";
import { useQuery } from "react-query";

const Dashboard = () => {
  let { isLoading } = useQuery({
    queryKey: ["Example"],
    queryFn: fetchExample,
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
    <Dashboardlayout title="Dashboard">
      <Grid
        justifyContent="center"
        templateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gridGap="6"
      >
        <GridItem
          colSpan={{
            base: "1",
            xl: "2",
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PricingSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imageUrl="images/Dot.png"
            inverted={false}
            TagName="Loan"
            Texts="Learn more about Loans – Keep your Bitcoin, access it’s value without
        selling it"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imageUrl="images/Grid.png"
            inverted={true}
            TagName="Contact"
            Texts="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>
    </Dashboardlayout>
  );
};

export default Dashboard;
