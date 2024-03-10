import { Box, Button, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box p={2}>
      <Typography>Home</Typography>
      <Button variant="contained">Save Changes</Button>
      <br />
      <br />
      <TextField variant="outlined" />
    </Box>
  );
}
