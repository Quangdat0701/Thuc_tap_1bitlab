import DashboardLayout from "../layout/DashboardLayout";
import "./Setting.css";

function Settings() {
  return (
    <DashboardLayout>
      <h1 className="page-title">Settings</h1>

      <div className="subtitle">
        <h3>Settings</h3>
        <p>Manage your account preferences and settings</p>
      </div>

      {/* PROFILE SETTINGS */}
      <div className="settings-card">
        <div className="card-title">👤 Profile Settings</div>

        <div className="form-group">
          <label>Full Name</label>
          <input defaultValue="John Instructor" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input defaultValue="john@transyncs.com" />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea defaultValue="Language instructor with 10+ years of experience" />
        </div>

        <div className="form-group">
          <label>Timezone</label>
          <select defaultValue="utc-5">
            <option value="utc-5">Eastern Time (UTC-5)</option>
            <option value="utc+0">UTC</option>
            <option value="utc+7">UTC+7</option>
          </select>
        </div>

        <button className="btn-primary">Save Changes</button>
      </div>

      {/* LANGUAGE */}
      <div className="settings-card">
        <div className="card-title">🌍 Language Preferences</div>

        <div className="form-group">
          <label>Primary Language</label>
          <select defaultValue="en">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="settings-card">
        <div className="card-title">🔔 Notifications</div>

        <Toggle label="Email Notifications" desc="Receive notifications via email" />
        <Toggle label="Session Reminders" desc="Get notified before sessions start" />
        <Toggle label="New Participant Alerts" desc="Notify when new participants join" />
      </div>
    </DashboardLayout>
  );
}

/* TOGGLE */
function Toggle({ label, desc }) {
  return (
    <div className="toggle-row">
      <div>
        <strong>{label}</strong>
        <p>{desc}</p>
      </div>
      <input type="checkbox" defaultChecked />
    </div>
  );
}

export default Settings;
