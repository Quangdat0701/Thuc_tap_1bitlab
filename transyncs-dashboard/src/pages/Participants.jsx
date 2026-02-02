import DashboardLayout from "../layout/DashboardLayout";
import "./Participants.css";

function Participants() {
  return (
    <DashboardLayout>
      <h1 className="page-title">Participants</h1>

      <div className="subtitle">
        <h3>Participants</h3>
        <p>Manage and view your students</p>
      </div>

      {/* SEARCH */}
      <div className="participants-search">
        <input placeholder="Search participants by name or email..." />
      </div>

      {/* LIST */}
      <div className="participants-list">
        <ParticipantRow
          name="Sarah Johnson"
          email="sarah.j@email.com"
          status="active"
          level="Advanced"
          language="French"
          sessions={24}
          hours="18h"
          lastActive="2 hours ago"
        />

        <ParticipantRow
          name="Michael Chen"
          email="michael.c@email.com"
          status="active"
          level="Intermediate"
          language="German"
          sessions={18}
          hours="13.5h"
          lastActive="1 day ago"
        />

        <ParticipantRow
          name="Emma Rodriguez"
          email="emma.r@email.com"
          status="active"
          level="Beginner"
          language="Spanish"
          sessions={12}
          hours="9h"
          lastActive="3 hours ago"
        />

        <ParticipantRow
          name="James Wilson"
          email="james.w@email.com"
          status="inactive"
          level="Intermediate"
          language="French"
          sessions={8}
          hours="6h"
          lastActive="1 week ago"
        />

        <ParticipantRow
          name="Sophia Lee"
          email="sophia.l@email.com"
          status="active"
          level="Advanced"
          language="German"
          sessions={32}
          hours="24h"
          lastActive="Just now"
        />
      </div>
    </DashboardLayout>
  );
}

/* ROW */
function ParticipantRow({
  name,
  email,
  status,
  level,
  language,
  sessions,
  hours,
  lastActive,
}) {
  return (
    <div className="participant-row">
      {/* USER */}
      <div className="participant-user">
        <div className="participant-avatar">{name[0]}</div>

        <div className="participant-info">
          <div className="name-line">
            <strong>{name}</strong>
            <span className={`status ${status}`}>{status}</span>
            <span className="level">{level}</span>
          </div>

          <div className="sub-line">
            <span>{email}</span>
            <span>Last active: {lastActive}</span>
          </div>
        </div>
      </div>

      {/* META */}
      <div className="participant-meta">Language: {language}</div>
      <div className="participant-meta">Sessions: {sessions}</div>
      <div className="participant-meta">Hours: {hours}</div>

      {/* ACTIONS */}
      <div className="participant-actions">
        <button className="btn-outline">Message</button>
        <button className="btn-icon">⋮</button>
      </div>
    </div>
  );
}

export default Participants;
