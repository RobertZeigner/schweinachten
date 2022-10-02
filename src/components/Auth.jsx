import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

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
    <div>
      <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => handleLogin(email, password, navigate)}>Login</button>
      <button onClick={() => handleSignUp(email, password, navigate)}>SignIn</button>
    </div>
  );
};

export default Auth;
