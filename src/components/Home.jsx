import { Box, Typography } from "@mui/material";
import PiggyBag from "../assets/piggy_bag.png";
import PiggyCookie from "../assets/PiggyCookieXmas.png";

const Home = () => {
  return (
    <Box position="relative" p="20px" sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}>
      <Box sx={{ width: 1000 }} mt="-75px" mb="50px">
        <Typography sx={{ fontFamily: "Poppins" }} fontWeight={600} fontSize={22} lineHeight="40px">
          Willkommen liebe Schweinchen. Hier könnt ihr euch für das Schweinachtswichteln 2022 eintragen. Ihr fragt euch,
          was Schweinachtswichteln ist? Tja, im Prinzip ist es das Gleiche wie normales Wichteln, nur bei uns in der
          sUuNunity. Ihr könnt euch mit eurem Discordnamen eintragen und hinterlegen, was eure Interessen sind, z. B.
          Kochen, lesen, Herr der Ringe etc. Euch wird dann per Zufallsgenerator eine andere Person zugelost und ihr
          könnt hier nachsehen, welche Interessen sie hat. Dann könnt ihr etwas kaufen, basteln, kochen, backen... bis
          zu einem Limit von 20€. Am Schluss schickt ihr es auf die Reise und wenn das Paket angekommen ist, kann die
          andere Person es auspacken und den Inhalt im Discord für die anderen zur Schau stellen.
        </Typography>
      </Box>
      <Typography fontWeight={700} fontSize={110} sx={{ opacity: 0.2 }}>
        Schweinachten 2022
      </Typography>
      <img src={PiggyCookie} alt="Piggy Cookie" className="piggy-image" />
    </Box>
  );
};

export default Home;
