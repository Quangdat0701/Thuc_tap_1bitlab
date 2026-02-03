import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Transyncs</h2>
        <span>Translation Platform</span>
      </div>

      <nav>
        <NavLink to="/sessions">Sessions</NavLink>
        <NavLink to="/schedule">Schedule</NavLink>
        <NavLink to="/participants">Participants</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>

      <div className="signout" onClick={() => navigate("/")}>
        Sign Out
      </div>
    </aside>
  );
}

export default Sidebar;
