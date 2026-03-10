import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Avatars from "./pages/Avatars";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Navigate to="/avatars" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/avatars" element={<Avatars />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
