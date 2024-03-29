import { Box, Card, Container, Grid, Typography, useTheme } from "@mui/material";
import { type Theme } from "@mui/material";
import { RiEdgeNewFill } from "react-icons/ri";
import { newArrivals } from "./new-arrival-data";
import Image from "next/image";

const NewArrivals = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Box display="flex" gap="8px" alignItems="center">
        <RiEdgeNewFill size={26} color={theme.palette.primary.main} />
        <Typography variant="h5" fontWeight={600} color="grey.900">
          New Arrivals
        </Typography>
      </Box>
      <Card sx={styles.cardStyle}>
        <Grid container columnSpacing={{ xs: 1, sm: 2 }} rowSpacing={4}>
          {newArrivals.map((item) => (
            <Grid key={item.id} item lg={2} md={3} sm={4} xs={6}>
              <Box sx={styles.imgContainer}>
                <Image className="img" src={item.img} alt="img" fill />
              </Box>
              <Typography variant="body1" color="grey.900">
                {item.title}
              </Typography>
              <Typography variant="body1" mt={1} fontWeight={600} color="primary.main">
                ${item.originalPrice}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  );
};
export default NewArrivals;

const styles = {
  cardStyle: (theme: Theme) => ({
    mt: 3,
    background: theme.palette.common.white,
    padding: { xs: "10px", sm: "20px" },
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  }),
  imgContainer: {
    mb: 1.5,
    position: "relative",
    height: "30vh",
    "& .img": {
      cursor: "pointer",
      transition: "0.7s",
      "&:hover": {
        filter: "brightness(0.6)",
      },
    },
  },
};
