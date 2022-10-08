import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import { Stack, Box, Button, Typography, TextField } from "@mui/material";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password, navigate) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate("/account");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignUp = async (email, password, navigate) => {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      navigate("/account");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box sx={{ width: 500, height: "auto", backgroundColor: "white", borderRadius: 2 }} p="20px" m="50px auto">
      <Stack pb="10px" gap="15px">
        <TextField
          size="small"
          value={email}
          label="E-Mail"
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          size="small"
          value={password}
          label="Passwort"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Stack>
      <Stack direction="row" gap="10px">
        <Button variant="outlined" size="small" onClick={() => handleLogin(email, password, navigate)}>
          Login
        </Button>
        <Button variant="contained" size="small" onClick={() => handleSignUp(email, password, navigate)}>
          SignIn
        </Button>
      </Stack>
    </Box>
  );
};

export default Auth;
