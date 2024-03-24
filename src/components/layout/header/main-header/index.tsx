"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { LuMenu, LuSearch } from "react-icons/lu";
import { MdPerson, MdShoppingCart } from "react-icons/md";

import { navItems } from "./nav-data";
import ResponsiveDrawer from "./resposive-drawer";

function MainHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (newValue: boolean) => {
    setIsDrawerOpen(newValue);
  };

  return (
    <>
      <Box sx={styles.mainHeaderStyles}>
        <Container maxWidth="xl">
          <Box sx={styles.topSection}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Link href="" style={{ display: "flex" }}>
                <Image src="/images/logo.png" alt="Logo" width={98} height={44} />
              </Link>
            </Box>
            <IconButton
              color="inherit"
              onClick={() => toggleDrawer(true)}
              sx={{ p: 0, display: { xs: "block", md: "none" } }}
            >
              <LuMenu size={24} color="#464645" />
            </IconButton>

            <Box sx={{ maxWidth: "450px", width: "450px" }}>
              <TextField
                name="search"
                fullWidth
                placeholder="Search..."
                sx={styles.searchStyle}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LuSearch color="#d3d3cf" size={22} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Box sx={styles.iconStyle}>
                <MdPerson size={22} color="#464645" />
              </Box>
              <Box sx={styles.iconStyle}>
                <MdShoppingCart size={22} color="#464645" />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.bottomSection}>
            <Button
              variant="contained"
              startIcon={<BiSolidCategory />}
              endIcon={<IoIosArrowForward />}
              sx={styles.buttonStyle}
            >
              Categories
            </Button>
            <Box sx={styles.navStyle}>
              {navItems.map((item) => (
                <Link style={{ textDecoration: "none", color: "inherit" }} href={item.link}>
                  <Typography key={item.link} variant="body1" sx={styles.navItem}>
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Drawer for responsive */}
      <ResponsiveDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
export default MainHeader;

const styles: any = {
  mainHeaderStyles: (theme: any) => ({
    background: theme.palette.common.white,
    boxShadow: "rgba(43, 52, 69, 0.1) 0px 4px 16px",
    padding: "10px 0",
  }),
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    alignItems: "center",
  },
  searchStyle: {
    display: { xs: "none", sm: "block" },
    "& .MuiInputBase-root": {
      borderRadius: "25px",
    },
  },
  iconStyle: (theme: any) => ({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    background: theme.palette.grey[100],
    padding: "12px",
    borderRadius: "100%",
  }),
  bottomSection: {
    mt: 1.5,
    display: { xs: "none", md: "flex" },
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonStyle: (theme: any) => ({
    background: theme.palette.grey[200],
    color: theme.palette.grey[700],
    "&:hover": {
      background: theme.palette.grey[200],
    },
    "& .MuiButton-endIcon": {
      paddingLeft: "50px",
    },
  }),
  navStyle: {
    display: "flex",
    gap: "60px",
  },
  navItem: (theme: any) => ({
    color: theme.palette.grey[700],
    fontSize: "16px",
    letterSpacing: "1px",
    transition: ".1s",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }),
};
