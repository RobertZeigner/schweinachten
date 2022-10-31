import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import supabase from "./config/supabaseClient";
import { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Create from "./components/Create";
import Schweinchen from "./components/Schweinchen";
import Update from "./components/Update";
import Auth from "./components/Auth";
import Account from "./components/Account";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <BrowserRouter>
      {!session ? (
        <Auth />
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mitmachen' element={<Create />} />
            <Route path='/schweinchen' element={<Schweinchen />} />
            <Route path='/:id' element={<Update />} />
            <Route path='/account' element={<Account session={session} />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
