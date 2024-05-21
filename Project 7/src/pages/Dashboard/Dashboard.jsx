import { Grid, GridItem } from "@chakra-ui/react";
import Dashboardlayout from "../../Components/Dashboardlayout";
import PortfolioSection from "./Components/PortfolioSection";
import PricingSection from "./Components/PricingSection";

const Dashboard = () => {
  return (
    <Dashboardlayout title="Dashboard">
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gridGap="6"
      >
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PricingSection />
        </GridItem>
      </Grid>
    </Dashboardlayout>
  );
};

export default Dashboard;
