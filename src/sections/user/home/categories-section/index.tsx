import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { TbCategoryFilled } from "react-icons/tb";
import { categories } from "./category-data";
import Image from "next/image";

function Categories(): JSX.Element {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Box display="flex" gap="8px" alignItems="center">
        <TbCategoryFilled size={26} color={theme.palette.primary.main} />
        <Typography variant="h5" fontWeight={600} color="grey.900">
          Categories
        </Typography>
      </Box>
      <Box mt={2}>
        <Grid container spacing={{ lg: 4, xs: 2 }}>
          {categories.map((item) => (
            <Grid key={item.id} item lg={2} md={3} sm={6} xs={12}>
              <Box sx={styles.categoryCard}>
                <Image src={item.img} alt="img" width={40} height={40} style={{ borderRadius: "6px" }} />
                <Typography variant="body1" fontWeight={600} color="grey.800">
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
export default Categories;

const styles = {
  categoryCard: {
    display: "flex",
    gap: "15px",
    cursor: "pointer",
    alignItems: "center",
    background: "#fff",
    padding: "10px 15px",
    borderRadius: "6px",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
  },
};
