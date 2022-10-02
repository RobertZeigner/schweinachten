import { Typography, CardContent, Card } from "@mui/material";

const Profilecard = ({ schweinchen }) => {
  return (
    <Card sx={{ width: "50%", margin: "0 auto" }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontFamily: "Poppins", textAlign: "center" }}>
          {schweinchen.name}
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Poppins", textAlign: "center" }}>
          {schweinchen.interests}
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Poppins", textAlign: "center" }}>
          {schweinchen.address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profilecard;
