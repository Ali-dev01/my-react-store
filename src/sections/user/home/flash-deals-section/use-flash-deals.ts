import { useMediaQuery, useTheme, type Theme } from "@mui/material";
import { useEffect, useState } from "react";

interface ReturnType {
  theme: Theme;
  gridSize: number;
  isBeginning: boolean;
  isEnd: boolean;
  handleSwiper: (swiper: any) => void;
  handleSlideChange: () => void;
  handlePrev: () => void;
  handleNext: () => void;
}

const useFlashDeals = (): ReturnType => {
  const [swiper, setSwiper] = useState<any>(null);
  const [gridSize, setGridSize] = useState<number>(4);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.down("xl"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSwiper = (swiper: any) => {
    setSwiper(swiper);
  };
  const handleSlideChange = () => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  useEffect(() => {
    if (isLg) setGridSize(4);
    if (isMd) setGridSize(3);
    if (isSm) setGridSize(2);
    if (isXs) setGridSize(1);
  }, [isXs, isSm, isMd, isLg]);

  return {
    theme,
    isBeginning,
    isEnd,
    gridSize,
    handleSwiper,
    handlePrev,
    handleNext,
    handleSlideChange,
  };
};
export default useFlashDeals;
