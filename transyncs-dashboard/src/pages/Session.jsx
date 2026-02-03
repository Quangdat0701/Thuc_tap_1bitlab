import DashboardLayout from "../layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import "./Session.css";

function Session() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      {/* HEADER */}
      <div className="session-header">
        <div>
          <h1>Learning Sessions</h1>
          <p>Welcome back, Instructor</p>
        </div>

        <button
          className="btn-new"
          onClick={() => navigate("/sessions/new")}
        >
          + New Session
        </button>
      </div>

      {/* SUMMARY */}
      <div className="session-summary">
        <div className="summary-card live">
          <div>
            <p>Live Sessions</p>
            <h2>2</h2>
          </div>
          <span className="icon">📹</span>
        </div>

        <div className="summary-card scheduled">
          <div>
            <p>Scheduled</p>
            <h2>4</h2>
          </div>
          <span className="icon">📅</span>
        </div>

        <div className="summary-card completed">
          <div>
            <p>Completed</p>
            <h2>2</h2>
          </div>
          <span className="icon">📈</span>
        </div>
      </div>

      {/* FILTER */}
      <div className="session-filter">
        <input placeholder="Search sessions or instructors..." />
        <select>
          <option>All Languages</option>
        </select>
        <select>
          <option>Status</option>
        </select>
      </div>

      {/* TABS */}
      <div className="session-tabs">
        <span>All <b>8</b></span>
        <span className="active">Live <b>2</b></span>
        <span>Scheduled <b>4</b></span>
        <span>Past <b>2</b></span>
      </div>

      {/* LIST */}
      <div className="session-list">
        <SessionCard
          title="French Conversation Practice"
          instructor="John Instructor"
          participants={12}
          duration="45 min"
          lang1="French"
          lang2="English"
          onJoin={() => navigate("/sessions/join")}
        />

        <SessionCard
          title="Spanish Grammar Intensive"
          instructor="Carlos Rodriguez"
          participants={20}
          duration="50 min"
          lang1="Spanish"
          lang2="English"
          onJoin={() => navigate("/sessions/join")}
        />
      </div>
    </DashboardLayout>
  );
}

/* SESSION CARD */
function SessionCard({
  title,
  instructor,
  participants,
  duration,
  lang1,
  lang2,
  onJoin,
}) {
  return (
    <div className="session-card">
      <div className="card-top">
        <span className="live-badge">LIVE NOW</span>
        <button className="join-btn" onClick={onJoin}>
          Join Now
        </button>
      </div>

      <h3>{title}</h3>
      <p className="instructor">👤 {instructor}</p>

      <div className="languages">
        <span>{lang1}</span>
        <span>{lang2}</span>
      </div>

      <div className="card-info">
        <span>👥 {participants}</span>
        <span>⏱ {duration}</span>
      </div>
    </div>
  );
}

export default Session;
