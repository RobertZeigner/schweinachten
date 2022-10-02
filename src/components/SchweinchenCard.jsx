import { CardActions, Typography, CardContent, Card } from "@mui/material";
import { Link } from "react-router-dom";

const SchweinchenCard = ({ schwein }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ fontFamily: "Poppins", textAlign: "center" }}>
          {schwein.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SchweinchenCard;
