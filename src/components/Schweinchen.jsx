import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import SchweinchenCard from "./SchweinchenCard";

const Schweinchen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [schweinchen, setSchweinchen] = useState(null);

  useEffect(() => {
    const fetchSchweinchen = async () => {
      const { data, error } = await supabase.from("profiles").select();

      if (error) {
        setFetchError("Keine Schweinchen gefunden");
        setSchweinchen(null);
        console.log(error);
      }

      if (data) {
        setSchweinchen(data);
        setFetchError(null);
      }
    };
    fetchSchweinchen();
  }, []);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {schweinchen && (
        <div className='schweinchen'>
          {/* order-by buttons */}
          <div className='schweinchen-grid'>
            {schweinchen.map((schwein) => (
              <SchweinchenCard key={schwein.id} schwein={schwein} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Schweinchen;
