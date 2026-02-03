import DashboardLayout from "../layout/DashboardLayout";
import "./JoinSession.css";

function JoinSession() {
  return (
    <DashboardLayout>
      <div className="join-page">

        {/* TOP BAR */}
        <div className="join-header">
          <div className="left">
            <span className="back">←</span>
            <div>
              <h2>French Conversation Practice</h2>
              <p>
                John Instructor · <span className="live">● Live</span>
              </p>
            </div>
          </div>

          <div className="right">
            <span className="count">👥 12</span>
            <button className="share-btn">Share</button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="join-main">
          
          {/* VIDEO AREA */}
          <div className="video-wrapper">
            <div className="video-box">
              <div className="video-placeholder">
                <div className="icon">📹</div>
                <p>Video Stream</p>
              </div>

              {/* CONTROLS */}
              <div className="video-controls">
                <button>🎤</button>
                <button>📷</button>
                <button>🔊</button>
                <button className="end">End Session</button>
              </div>
            </div>

            {/* TRANSCRIPT */}
            <div className="transcript">
              <div className="tabs">
                <button className="active">Live Transcript</button>
                <button>Chat</button>
              </div>

              <div className="message">
                <strong>John K.</strong> · 00:12
                <p className="lang">Japanese</p>
                <p>
                  おはようございます！それでは今日のピラティスの練習レッスンをスタートして始めます。
                </p>
                <p className="lang">English</p>
                <p>
                  Good morning! We'll start today's practice Pilates lesson.
                </p>
              </div>
            </div>
          </div>

          {/* PARTICIPANTS */}
          <aside className="participants">
            <div className="participant-tabs">
              <button className="active">Participants</button>
              <button>Settings</button>
            </div>

            <ul>
              <li><span className="avatar">JK</span> John K. (Host)</li>
              <li><span className="avatar">A</span> Participant 1</li>
              <li><span className="avatar">B</span> Participant 2</li>
              <li><span className="avatar">C</span> Participant 3</li>
              <li><span className="avatar">D</span> Participant 4</li>
              <li><span className="avatar">E</span> Participant 5</li>
              <li><span className="avatar">F</span> Participant 6</li>
              <li><span className="avatar">G</span> Participant 7</li>
              <li><span className="avatar">H</span> Participant 8</li>
              <li><span className="avatar">I</span> Participant 9</li>
            </ul>
          </aside>

        </div>
      </div>
    </DashboardLayout>
  );
}

export default JoinSession;
