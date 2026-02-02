import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!selectedRole) {
      alert("Please choose your role before signing in");
      return;
    }

    // mock login thành công
    // sau này có backend thì lưu token / role ở đây
    navigate("/sessions");
  };

  return (
    <div className="background">
      <div className="container">
        {/* LEFT */}
        <div className="left">
          <h1>Transyncs</h1>
          <p>
            AI-powered real-time translation for seamless learning experiences
          </p>
          <ul>
            <li>Live translation during training sessions</li>
            <li>Support for multiple languages</li>
            <li>Perfect for instructors and students</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="right">
          <h2>Welcome to Transyncs</h2>
          <p>AI-powered translation for your next learning session</p>
          <p><strong>Choose Your Role</strong></p>

          <div className="role-selection">
            {/* STUDENT */}
            <label
              className={`role1 ${
                selectedRole === "student" ? "active" : ""
              }`}
              onClick={() => setSelectedRole("student")}
            >
              <img
                src="/image/Student.png"
                alt="Student"
                className="ImgStu"
              />
              <div className="role-box">
                <span>Student</span>
                <p>Access and join learning sessions</p>
              </div>
            </label>

            {/* INSTRUCTOR */}
            <label
              className={`role2 ${
                selectedRole === "instructor" ? "active" : ""
              }`}
              onClick={() => setSelectedRole("instructor")}
            >
              <img
                src="/image/Manager.png"
                alt="Instructor"
                className="ImgMana"
              />
              <div className="role-box">
                <span>Instructor</span>
                <p>Create and manage courses</p>
              </div>
            </label>
          </div>

          <button
            type="button"
            className="google-btn"
            onClick={handleSignIn}
          >
            Sign in with Google
          </button>

          <p className="terms">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
