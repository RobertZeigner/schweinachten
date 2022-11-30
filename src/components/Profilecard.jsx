import { Typography, CardContent, Card, Button } from "@mui/material";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Profilecard = ({ schweinchen }) => {
  return (
    <Card sx={{ width: "50%", margin: "0 auto" }}>
      <CardContent>
        <Typography variant='h5' sx={{ fontFamily: "Poppins", textAlign: "center" }}>
          Name: {schweinchen.name}
        </Typography>
        <Typography variant='h5' sx={{ fontFamily: "Poppins", textAlign: "center" }}>
          Interessen: {schweinchen.interests}
        </Typography>
        <Typography variant='h5' sx={{ fontFamily: "Poppins", textAlign: "center" }}>
          Adresse: {schweinchen.address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profilecard;
