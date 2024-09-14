import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Register from "./Component/Register/Register";
import Login from "./Component/LogIn/Log";
import { AuthProvider } from "./Component/AuthContext/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainhome" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
