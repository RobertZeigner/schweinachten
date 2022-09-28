import { CardActions, Typography, CardContent, Card } from "@mui/material";
import { Link } from "react-router-dom";

const SchweinchenCard = ({ schwein }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ fontFamily: "Poppins" }}>
          {schwein.name}
        </Typography>
        <Typography paragraph sx={{ fontFamily: "Poppins", fontSize: 20 }}>
          {schwein.interests}
        </Typography>
        <Link to={"/" + schwein.id}>
          <i className="material-icons">edit</i>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SchweinchenCard;
