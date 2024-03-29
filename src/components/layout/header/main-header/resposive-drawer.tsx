"use client";
import Link from "next/link";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { Drawer, InputAdornment, useTheme } from "@mui/material";
import { Box, List, ListItem, TextField, Typography } from "@mui/material";

import { navItems } from "./nav-data";
interface PropsTypes {
  isOpen: boolean;
  toggleDrawer: (value: boolean) => void;
}

function ResponsiveDrawer({ isOpen, toggleDrawer }: PropsTypes) {
  const path = usePathname();
  const theme = useTheme();

  return (
    <>
      <Drawer PaperProps={{ sx: styles.drawerStyles }} open={isOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ padding: "8px 12px" }}>
          <Image src="/images/logo.png" alt="Logo" width={80} height={35} />
          <TextField
            name="search"
            fullWidth
            placeholder="Search..."
            sx={styles.searchStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LuSearch color="#d3d3cf" size={20} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mt={1} p="8px 12px">
          <List>
            {navItems.map((item) => (
              <ListItem
                disablePadding
                key={item.title}
                sx={{
                  ...styles.listStyle,
                  ...(path === item.link && styles.activeList),
                }}
              >
                <Link href={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                  <Typography
                    variant="body1"
                    sx={{ ...styles.navItem(theme), ...(path === item.link && styles.activeItem(theme)) }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default ResponsiveDrawer;

const styles = {
  drawerStyles: {
    width: "280px",
  },
  searchStyle: {
    display: { xs: "block", sm: "none" },
    mt: "8px",
    "& .MuiInputBase-root": {
      height: "35px",
      borderRadius: "25px",
    },
  },
  listStyle: {
    marginBottom: "10px",
    borderRadius: "6px",
  },
  activeList: {
    background: "#eaffea",
  },
  navItem: (theme: any) => ({
    color: theme.palette.grey[700],
    padding: "10px",
    fontSize: "14px",
    letterSpacing: "1px",
  }),
  activeItem: (theme: any) => ({
    color: theme.palette.primary.main,
    fontWeight: 500,
  }),
};
