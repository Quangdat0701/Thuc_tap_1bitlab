import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import "./CreateSession.css";

function CreateSession() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    instructorLang: "",
    targetLang: "",
    duration: "",
    date: "",
    time: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};
    if (!form.title) err.title = "Session title is required";
    if (!form.instructorLang) err.instructorLang = "Select instructor language";
    if (!form.targetLang) err.targetLang = "Select target language";
    if (!form.duration) err.duration = "Select duration";
    if (!form.date) err.date = "Select date";
    if (!form.time) err.time = "Select time";
    return err;
  };

  const handleSubmit = () => {
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setErrors({});
    setLoading(true);

    // fake submit
    setTimeout(() => {
      setLoading(false);
      alert("Session created successfully!");
      navigate("/sessions");
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="create-session-page">

        <div className="back" onClick={() => navigate("/sessions")}>
          ← Back to Sessions
        </div>

        <div className="form-wrapper">
          <h2>Create New Session</h2>
          <p className="subtitle">
            Set up a new learning session with live translation
          </p>

          {/* TITLE */}
          <label>Session Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="E.g. Spanish Class - Beginner"
          />
          {errors.title && <span className="error">{errors.title}</span>}

          {/* LANG */}
          <div className="row">
            <div>
              <label>Instructor Language *</label>
              <select
                name="instructorLang"
                value={form.instructorLang}
                onChange={handleChange}
              >
                <option value="">Select language</option>
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
              {errors.instructorLang && (
                <span className="error">{errors.instructorLang}</span>
              )}
            </div>

            <div>
              <label>Translate To *</label>
              <select
                name="targetLang"
                value={form.targetLang}
                onChange={handleChange}
              >
                <option value="">Select language</option>
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
              {errors.targetLang && (
                <span className="error">{errors.targetLang}</span>
              )}
            </div>
          </div>

          {/* PARTICIPANTS */}
          <label>Maximum Participants</label>
          <input value="50" disabled />

          {/* DURATION */}
          <label>Duration *</label>
          <select
            name="duration"
            value={form.duration}
            onChange={handleChange}
          >
            <option value="">Select duration</option>
            <option>30 min</option>
            <option>45 min</option>
            <option>60 min</option>
          </select>
          {errors.duration && (
            <span className="error">{errors.duration}</span>
          )}

          {/* DATE TIME */}
          <div className="row">
            <div>
              <label>Schedule Date *</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
              {errors.date && <span className="error">{errors.date}</span>}
            </div>

            <div>
              <label>Time *</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
              />
              {errors.time && <span className="error">{errors.time}</span>}
            </div>
          </div>

          {/* NOTES */}
          <label>Session Notes / Agenda</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Enter session overview and details..."
          />

          {/* ACTIONS */}
          <div className="actions">
            <button
              className="btn-cancel"
              onClick={() => navigate("/sessions")}
            >
              Cancel
            </button>

            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Session"}
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CreateSession;
