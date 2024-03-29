"use client";
import ProductCard from "@/components/product-card";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { IoIosFlash } from "react-icons/io";
import { flashProductsData } from "./flash-product-data";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import useFlashDeals from "./use-flash-deals";

function FlashDeals(): JSX.Element {
  const { theme, gridSize, isBeginning, isEnd, handleSwiper, handleSlideChange, handlePrev, handleNext } =
    useFlashDeals();

  return (
    <Container maxWidth="xl">
      <Box display="flex" gap="8px" alignItems="center">
        <IoIosFlash size={26} color={theme.palette.primary.main} />
        <Typography variant="h5" fontWeight={600} color="grey.900">
          Flash Deals
        </Typography>
      </Box>
      <Box mt={2} position="relative">
        <Swiper
          className="mySwiper"
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          slidesPerView={gridSize}
          spaceBetween={30}
          speed={1000}
          modules={[Navigation]}
        >
          {flashProductsData.map((product) => (
            <SwiperSlide>
              <ProductCard cardData={{ ...product }} />
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
export default FlashDeals;

const styles = {
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
      top: "38%",
      left: "-18px",
    },
    "& .nextBtn": {
      position: "absolute",
      top: "38%",
      right: "-18px",
    },
  }),
};
