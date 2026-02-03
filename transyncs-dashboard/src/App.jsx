import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Session from "./pages/Session";
import Schedule from "./pages/Schedule";
import Participants from "./pages/Participants";
import Settings from "./pages/Setting";
import CreateSession from "./pages/CreateSession";
import JoinSession from "./pages/JoinSession";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sessions" element={<Session />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sessions/new" element={<CreateSession />} />
        <Route path="/sessions/join" element={<JoinSession />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
