import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box
      sx={{
        height: 100,
        backgroundColor: "hsl(350, 100%, 88%)",
        justifyContent: "center",
      }}
    >
      <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={5} py="30px">
        <Typography variant="h5" sx={{ fontFamily: "Poppins" }}>
          <Link to="/">Home</Link>
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Poppins" }}>
          <Link to="/schweinchen">Alle Schweinchen</Link>
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Poppins" }}>
          <Link to="/account">Profil</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Nav;
