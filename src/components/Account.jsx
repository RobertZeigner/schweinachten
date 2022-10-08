import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import Profilecard from "./Profilecard";
import { Stack } from "@mui/material";

const Account = ({ session }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [interests, setInterests] = useState(null);
  const [address, setAddress] = useState(null);

  let schweinchen = {
    name,
    interests,
    address,
  };

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const { user } = session;

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`name, interests, address`)
        .eq("id", user.id)
        .single();

      console.log(session);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setName(data.name);
        setInterests(data.interests);
        setAddress(data.address);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  /*   const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const updates = {
        id: user.id,
        name,
        interests,
        address,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      navigate("/schweinchen");

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }; */

  return (
    <div aria-live="polite">
      <Profilecard id={session.user.id} schweinchen={schweinchen} />
    </div>
  );
};

export default Account;
