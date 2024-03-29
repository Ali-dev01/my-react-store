"use client";
import { Box, Card, Container, Grid, Typography, useTheme } from "@mui/material";
import { FaTruckFast } from "react-icons/fa6";

import Banner from "./banner-section";
import Categories from "./categories-section";
import FlashDeals from "./flash-deals-section";
import NewArrivals from "./new-arrivals";
import Discounted from "./discount-section";
import { MdOutlinePayment, MdOutlineSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const cardsData = [
  { title: "Worldwide Delivery", icon: FaTruckFast },
  { title: "Safe Payment", icon: MdOutlinePayment },
  { title: "Shop with Confidence", icon: MdOutlineSecurity },
  { title: "24/7 Support", icon: BiSupport },
];

function HomeSection(): JSX.Element {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ background: "#fff", py: "10px" }}>
        <Banner />
      </Box>
      <Box mt={10}>
        <Categories />
      </Box>
      <Box mt={10} px={1.2}>
        <FlashDeals />
      </Box>
      <Box mt={8}>
        <NewArrivals />
      </Box>
      <Box mt={10} px={1.2}>
        <Discounted />
      </Box>
      <Container maxWidth="xl" sx={{ mt: 10, pb: 4 }}>
        <Grid container spacing={3}>
          {cardsData.map((card) => (
            <Grid key={card.title} item lg={3} md={6} sm={6} xs={12}>
              <Card sx={styles.cardStyle}>
                <Box sx={styles.iconStyle}>
                  <card.icon size={26} color={theme.palette.secondary.main} />
                </Box>
                <Typography variant="body1" color="grey.900" mt={2} fontSize="18px">
                  {card.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default HomeSection;

const styles = {
  cardStyle: {
    padding: "50px 30px",
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.lightest,
    padding: "18px",
    borderRadius: "100%",
  }),
};
