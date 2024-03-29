import Image from "next/image";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { type Theme } from "@mui/material";
import { IoMdEye, IoMdHeartEmpty } from "react-icons/io";
import { Box, Button, Card, Chip, Rating, Stack, Typography, useTheme } from "@mui/material";

interface PropsTypes {
  id: string;
  image: string;
  name: string;
  rating: number;
  originalPrice?: string;
  discountedPrice: string;
  onAddToCart?: () => void;
  onRemoveFromCart?: () => void;
}

const ProductCard = ({ cardData }: { cardData: PropsTypes }): JSX.Element => {
  const { name, image, rating, discountedPrice = 0, originalPrice = 0 } = cardData;

  const [count, setCount] = useState<number>(0);

  const theme = useTheme();

  const discount = ((1 - +discountedPrice / +originalPrice) * 100).toFixed(1);

  return (
    <Card sx={styles.cardStyle}>
      <Box sx={styles.cardTop}>
        <Chip
          sx={{ p: "4px", color: "#fff", fontWeight: 600 }}
          color="primary"
          label={`${discount}% off`}
          size="small"
        />
        <Stack spacing={0.5} sx={{ visibility: "hidden" }} className="hover-icons">
          <IoMdEye size={22} color={theme.palette.secondary.main} style={{ cursor: "pointer" }} />
          <IoMdHeartEmpty size={22} color={theme.palette.secondary.main} style={{ cursor: "pointer" }} />
        </Stack>
      </Box>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image src={image} alt="img" width={257} height={250} />
        </Box>
        <Box mt={0.5} display="flex" justifyContent="space-between" alignItems="end">
          <Stack spacing={1.5}>
            <Typography variant="body1" color="grey.900">
              {name}
            </Typography>
            <Rating readOnly value={rating} precision={0.5} size="small" />
            <Typography variant="body1" color="primary" fontWeight={600}>
              {discountedPrice} &nbsp;{" "}
              <Typography
                component="span"
                variant="body1"
                color="grey.800"
                fontWeight={600}
                sx={{ textDecoration: "line-through" }}
              >
                {originalPrice}
              </Typography>
            </Typography>
          </Stack>
          <Stack spacing={0.5}>
            <Button
              variant="outlined"
              sx={{ p: "2px 0", minWidth: "27px", visibility: count > 0 ? "visible" : "hidden" }}
              onClick={() => {
                setCount((prev) => prev - 1);
              }}
            >
              <LuMinus size={20} />
            </Button>
            <Typography
              variant="body1"
              color="grey.900"
              textAlign="center"
              fontWeight={600}
              sx={{ visibility: count > 0 ? "visibile" : "hidden" }}
            >
              {count}
            </Typography>
            <Button
              variant="outlined"
              sx={{ p: "2px 0", minWidth: "27px" }}
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
            >
              <GoPlus size={20} />
            </Button>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};
export default ProductCard;

const styles = {
  cardStyle: (theme: Theme) => ({
    background: theme.palette.common.white,
    padding: "15px 12px",
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
    },
    "&:hover .hover-icons": {
      visibility: "visible",
    },
  }),
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
  },
};
