"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Card, Container, IconButton, Typography, useTheme } from "@mui/material";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { discountData } from "./discount-data";
import Image from "next/image";
import useDiscount from "./use-discount";

function Discounted(): JSX.Element {
  const theme = useTheme();
  const { gridSize, isBeginning, isEnd, handleSwiper, handleSlideChange, handlePrev, handleNext } =
    useDiscount();

  return (
    <Container maxWidth="xl">
      <Box display="flex" gap="8px" alignItems="center">
        <TbDiscountCheckFilled size={26} color={theme.palette.primary.main} />
        <Typography variant="h5" fontWeight={600} color="grey.900">
          Big Discounts
        </Typography>
      </Box>
      <Box mt={3} position="relative">
        <Swiper
          className="mySwiper"
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          slidesPerView={gridSize}
          spaceBetween={20}
          speed={1000}
          modules={[Navigation]}
        >
          {discountData.map((item) => (
            <SwiperSlide key={item.id}>
              <Card sx={styles.cardStyle}>
                <Box sx={styles.imgContainer}>
                  <Image className="img" src={item.img} alt="img" fill />
                </Box>
                <Typography variant="body1" color="grey.900" fontWeight={500}>
                  {item.title}
                </Typography>
                <Box display="flex" gap="8px" mt={1}>
                  <Typography variant="body1" color="primary.main" fontWeight={500}>
                    {item.discountedPrice}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="grey.900"
                    sx={{ textDecoration: "line-through", fontWeight: 600 }}
                  >
                    {item.originalPrice}
                  </Typography>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={styles.swiperBtnStyle}>
          <IconButton classes={{ root: "prevBtn" }} onClick={handlePrev} disabled={isBeginning}>
            <GoArrowLeft />
          </IconButton>
          <IconButton classes={{ root: "nextBtn" }} onClick={handleNext} disabled={isEnd}>
            <GoArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}
export default Discounted;

const styles = {
  cardStyle: {
    background: "#fff",
    cursor: "pointer",
    padding: { xs: "10px", sm: "15px" },
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  },
  imgContainer: {
    mb: 1,
    position: "relative",
    height: "28vh",
    "& .img": {
      transition: "0.4s",
      borderRadius: "8px",
      background: "#fff",
      "&:hover": {
        filter: "brightness(0.7)",
      },
    },
  },
  swiperBtnStyle: (theme: any) => ({
    "& .MuiIconButton-root": {
      zIndex: 1,
      background: theme.palette.secondary.main,
      color: "#fff",
      "&:disabled": { background: theme.palette.grey[600] },
      "&:hover": { background: theme.palette.secondary.main },
    },
    "& .prevBtn": {
      position: "absolute",
      top: "40%",
      left: "-18px",
    },
    "& .nextBtn": {
      position: "absolute",
      top: "40%",
      right: "-18px",
    },
  }),
};
