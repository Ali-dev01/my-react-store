"use client";
import { Box } from "@mui/material";
import MainHeader from "./main-header";
import TopHeader from "./top-header";
import useGetScrollPosition from "@/hooks/useGetScrollPosition";

function Header() {
  const { scrollPosition } = useGetScrollPosition();

  return (
    <Box sx={{ ...styles.stickyHeader, position: scrollPosition > 230 ? "fixed" : "relative" }}>
      <TopHeader />
      <MainHeader />
    </Box>
  );
}
export default Header;

const styles = {
  stickyHeader: {
    top: "0",
    left: "0",
    right: "0",
    zIndex: 1000,
  },
};
