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
        <NavLink to="/sessions" className={({ isActive }) => isActive ? "active" : ""}>
          Sessions
        </NavLink>

        <NavLink to="/schedule" className={({ isActive }) => isActive ? "active" : ""}>
          Schedule
        </NavLink>

        <NavLink to="/participants" className={({ isActive }) => isActive ? "active" : ""}>
          Participants
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
          Settings
        </NavLink>
      </nav>

      <div className="signout" onClick={() => navigate("/")}>
        Sign Out
      </div>
    </aside>
  );
}

export default Sidebar;
