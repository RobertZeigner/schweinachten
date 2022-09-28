import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !interests) {
      setFormError("Da hast du wohl was vergessen!");
      return;
    }

    const { data, error } = await supabase.from("schweinchen").update({ name, interests }).eq("id", id);

    if (error) {
      setFormError("Da hast du wohl was vergessen!");
    }

    if (data) {
      setFormError(null);
      navigate("/schweinchen");
    }
  };

  useEffect(() => {
    const fetchSchweinchen = async () => {
      const { data, error } = await supabase.from("schweinchen").select().eq("id", id).single();

      if (error) {
        navigate("/schweinchen", { replace: true });
      }
      if (data) {
        setName(data.name);
        setInterests(data.interests);
      }
    };

    fetchSchweinchen();
  }, [id, navigate]);

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="interests">Interessen:</label>
        <textarea id="interests" value={interests} onChange={(e) => setInterests(e.target.value)} />

        <button>Update Schweinchen</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Update;
