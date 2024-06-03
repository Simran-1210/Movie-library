import { Route, Routes } from "react-router-dom";
import HomeWrapper from "./components/layout/HomeWrapper/HomeWrapper";
import Login from "./components/layout/Login/Login";
import Signup from "./components/layout/Signup/Signup";
import ResetPswd from "./components/layout/ResetPswd/ResetPswd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpswd" element={<ResetPswd />} />
        <Route path="/home" element={<HomeWrapper />} />
      </Routes>
    </>
  );
}

export default App;
