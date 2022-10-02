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
  };

  return (
    <div aria-live="polite">
      {loading ? (
        "Saving ..."
      ) : (
        <form onSubmit={updateProfile} className="form-widget">
          <div>Email: {session.user.email}</div>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name || ""} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="interests">Interessen</label>
            <input id="interests" type="text" value={interests || ""} onChange={(e) => setInterests(e.target.value)} />
          </div>
          <div>
            <label htmlFor="address">Adresse</label>
            <input id="address" type="text" value={address || ""} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <Stack direction="row" display="flex" justifyContent="space-around">
            <button className="button primary block" disabled={loading}>
              Update profile
            </button>
            <button type="button" className="button block" onClick={() => supabase.auth.signOut()}>
              Sign Out
            </button>
          </Stack>
        </form>
      )}

      <Profilecard key={session.user.id} schweinchen={schweinchen} />
    </div>
  );
};

export default Account;
