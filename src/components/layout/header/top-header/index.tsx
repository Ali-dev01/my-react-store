"use client";
import useGetScrollPosition from "@/hooks/useGetScrollPosition";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdLocalPhone } from "react-icons/md";

function TopHeader() {
  const { scrollPosition } = useGetScrollPosition();

  return (
    <>
      {scrollPosition < 230 ? (
        <Box sx={styles.headerStyles}>
          <Container maxWidth="xl">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box sx={{ display: { md: "none", xs: "flex" } }}>
                <Link href="/" style={{ display: "flex" }}>
                  <Image src="/logo-files/svg/logo.svg" width={80} height={36} alt="Logo" />
                </Link>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }} gap="20px">
                <Box display="flex" alignItems="center" gap="6px">
                  <MdLocalPhone color="#464645" />
                  <Typography variant="body2" color="grey.900">
                    +92-3120790641
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="6px">
                  <MdEmail color="#464645" />
                  <Typography variant="body2" color="grey.900">
                    alidev098@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap="20px">
                <Typography variant="body2" sx={styles.textStyles}>
                  Theme FAQ's
                </Typography>
                <Typography variant="body2" sx={styles.textStyles}>
                  Need Help?
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      ) : null}
    </>
  );
}
export default TopHeader;

const styles = {
  headerStyles: (theme: any) => ({
    display: "flex",
    alignItems: "center",
    background: theme.palette.secondary.main,
    color: theme.palette.common.black,
    height: "32px",
  }),
  textStyles: (theme: any) => ({
    transition: "0.3s",
    cursor: "pointer",
    color: theme.palette.grey[900],
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }),
};
