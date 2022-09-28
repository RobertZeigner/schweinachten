import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Create = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !interests) {
      setFormError("Da hast du wohl was vergessen.");
      return;
    }

    const { data, error } = await supabase.from("schweinchen").insert([{ name, interests }]);

    if (error) {
      console.log(error);
      setFormError("Etwas ist schiefgelaufen");
    }
    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/schweinchen");
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="interests">Interessen:</label>
        <textarea id="interessen" value={interests} onChange={(e) => setInterests(e.target.value)} />

        <button>Schweinchen eintragen.</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
