import DashboardLayout from "../layout/DashboardLayout";
import "./Schedule.css";

function Schedule() {
  return (
    <DashboardLayout>
      <h1 className="page-title">Schedule</h1>

      <div className="subtitle">
        <h3>Scheduled Sessions</h3>
        <p>Manage your upcoming learning sessions</p>
      </div>

      {/* TODAY */}
      <section className="schedule-section">
        <div className="section-header">
          <span className="icon">📅</span>
          <span>Today's Sessions</span>
        </div>

        <div className="schedule-card today">
          <div className="card-left">
            <h4>French Conversation Advanced</h4>

            <div className="row">
              <span>⏰ 2:00 PM (45 min)</span>
              <span>👨‍🏫 Pierre Dubois</span>
            </div>
          </div>

          <div className="card-right">
            <div className="row">
              <span>👥 12 participants</span>
              <span>🌍 French → English</span>
            </div>

            <div className="actions">
              <span className="badge">Today</span>
              <button className="btn-primary">Join Session</button>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="schedule-section">
        <div className="section-header">
          <span className="icon">📅</span>
          <span>Upcoming Sessions</span>
        </div>

        <div className="schedule-card">
          <div className="card-left">
            <h4>German Business Language</h4>

            <div className="row">
              <span>📅 Jan 16, 2026</span>
              <span>👥 8 participants</span>
              <span>🌍 German → English</span>
            </div>
          </div>

          <div className="card-right">
            <span>⏰ 10:00 AM (60 min)</span>
            <span>👩‍🏫 Maria Schmidt</span>

            <div className="actions">
              <button className="btn-outline">Details</button>
              <button className="btn-danger">Cancel</button>
            </div>
          </div>
        </div>

        <div className="schedule-card">
          <div className="card-left">
            <h4>Spanish Grammar Basics</h4>

            <div className="row">
              <span>📅 Jan 17, 2026</span>
              <span>👥 10 participants</span>
              <span>🌍 Spanish → English</span>
            </div>
          </div>

          <div className="card-right">
            <span>⏰ 3:30 PM (50 min)</span>
            <span>👨‍🏫 Carlos Rodriguez</span>

            <div className="actions">
              <button className="btn-outline">Details</button>
              <button className="btn-danger">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Schedule;
