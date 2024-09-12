import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonajesProvider from "./contexts/PersonajesContext";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import Auth from "./pages/Auth";
import { useContext } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const { user } = useContext(GlobalContext)
  const token = user.token
  return (
    <>
      <PersonajesProvider>
        <Routes>
          <Route path="/" element={<Landing></Landing>} />
          <Route path="/home" element={token? <Home></Home>: <Navigate to="/login"/>} />
          <Route path="/create" element={token? <Create></Create>: <Navigate to="/login"/>} />
          <Route path="/login" element={<Auth/>} />
          <Route path="/profile" element={token? <Profile></Profile> : <Navigate to="/login"/>} />
          <Route path="/detail/:id" element={token? <Detail></Detail> : <Navigate to="/login"/>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </PersonajesProvider>
    </>
  );
}

export default App;
