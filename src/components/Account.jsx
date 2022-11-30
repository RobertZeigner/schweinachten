import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import Profilecard from "./Profilecard";
import { Stack, Typography } from "@mui/material";

const Account = ({ session }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [interests, setInterests] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [schweinchen, setSchweinchen] = useState(null);
  const [drawnSchweinchen, setDrawnSchweinchen] = useState();

  useEffect(() => {
    getProfile();
  }, [session]);

  useEffect(() => {
    const fetchSchweinchen = async () => {
      const { data, error } = await supabase.from("profiles").select();

      //! Nutzen wenn alle Schweinchen gezogen wurden
      const { data: drawn_schweinchen_data, error: error_schweinchen } = await supabase
        .from("drawn_schweinchen")
        .select()
        .single();

      setDrawnSchweinchen(drawn_schweinchen_data);
      //console.log(drawnSchweinchen);

      if (error) {
        setFetchError("Keine Schweinchen gefunden");
        setSchweinchen(null);
        console.log(error.errorMessage);
      }

      if (data) {
        setSchweinchen(data);
        setFetchError(null);
      }
    };
    fetchSchweinchen();
  }, []);

  const getProfile = async () => {
    try {
      setLoading(true);
      const { user } = session;

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`name, interests, address`)
        .eq("id", user.id)
        .single();

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

  const updateProfile = async (e) => {
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

      if (!name || !interests || !address) {
        setErrorMessage("Bitte alle Felder ausfüllen");
      } else {
        setErrorMessage(null);
      }

      let { error } = await supabase.from("profiles").upsert(updates);

      navigate("/account");

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div aria-live='polite'>
      {loading ? (
        "Loading ..."
      ) : (
        <form onSubmit={updateProfile} className='form-widget'>
          <div>Email: {session.user.email}</div>
          <div>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' value={name || ""} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='interests'>Interessen</label>
            <input id='interests' type='text' value={interests || ""} onChange={(e) => setInterests(e.target.value)} />
          </div>
          <div>
            <label htmlFor='address'>Adresse</label>
            <input id='address' type='text' value={address || ""} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <Stack direction='row' gap='15px'>
            <button className='button primary block' disabled={loading}>
              Profil aktualisieren
            </button>
            <button type='button' className='button block' onClick={() => supabase.auth.signOut()}>
              Ausloggen
            </button>
            <Typography color='error' mt='5px'>
              {errorMessage}
            </Typography>
          </Stack>
        </form>
      )}
      <Profilecard schweinchen={drawnSchweinchen} />
    </div>
  );
};

export default Account;
