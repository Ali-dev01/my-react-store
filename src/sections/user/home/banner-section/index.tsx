import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { slidersData } from "./banner-data";

const Banner = () => {
  return (
    <Container maxWidth="xl" sx={styles.swiperStyle}>
      <Swiper className="mySwiper" speed={1000} pagination={{ clickable: true }} modules={[Pagination]}>
        {slidersData.map((item) => (
          <SwiperSlide key={item.id}>
            <Box sx={{ p: { xs: "10px 0px", sm: "10px 50px" } }}>
              <Grid container spacing={3}>
                <Grid item md={7} xs={12} alignContent="center">
                  <Typography variant="h1" sx={styles.headingStyle}>
                    {item.heading}
                  </Typography>
                  <Typography variant="body1" sx={styles.descStyle}>
                    {item.desc}
                  </Typography>
                  <Button variant="contained">Shop Now</Button>
                </Grid>
                <Grid item md={5} xs={12} display="flex" justifyContent="center">
                  <Image src={item.img} alt="Banner" width={280} height={420} />
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default Banner;

const styles = {
  swiperStyle: (theme: any) => ({
    "& .mySwiper": {
      width: "100%",
      height: "100%",
      "& .swiper-pagination-bullet": {
        background: "transparent",
        border: `2px solid ${theme.palette.primary.dark}`,
        width: "15px",
        height: "15px",
      },
      "& .swiper-pagination-bullet-active": {
        background: theme.palette.primary.main,
      },
    },
  }),
  headingStyle: {
    fontSize: { xs: "40px", sm: "50px" },
    color: "grey.900",
    fontWeight: 700,
    mb: 3,
  },
  descStyle: {
    color: "grey.800",
    mb: 3,
  },
};
