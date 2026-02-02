import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Session from "./pages/Session";
import Schedule from "./pages/Schedule";
import Participants from "./pages/Participants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sessions" element={<Session />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/participants" element={<Participants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
