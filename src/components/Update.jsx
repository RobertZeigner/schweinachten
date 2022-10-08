import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");
  const [address, setAddress] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !interests) {
      setFormError("Da hast du wohl was vergessen!");
      return;
    }

    const { data, error } = await supabase.from("profiles").update({ name, interests, address }).eq("id", id).select();

    if (error) {
      setFormError("Da hast du wohl was vergessen!");
    }

    if (data) {
      setFormError(null);
      navigate("/account");
    }
  };

  useEffect(() => {
    const fetchSchweinchen = async () => {
      const { data, error } = await supabase.from("profiles").select().eq("id", id).single();

      if (error) {
        navigate("/account", { replace: true });
      }
      if (data) {
        setName(data.name);
        setInterests(data.interests);
        setAddress(data.address);
      }
    };

    fetchSchweinchen();
  }, []);

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="interests">Interessen:</label>
        <textarea id="interests" value={interests} onChange={(e) => setInterests(e.target.value)} />

        <label htmlFor="address">Adresse:</label>
        <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

        <button>Update Schweinchen</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Update;
