import { useState, useEffect } from "react";
import "./login.css";

function Login() {
  const [action, setAction] = useState(" ");
  const [checked, setChecked] = useState("not-checked");

  return (
    <div
      className={action === "active-login" ? "wrapper active-login" : "wrapper"}
    >
      <div className="form signup" id="signup">
        <header
          onClick={() => {
            setAction(" ");
          }}
        >
          Signup
        </header>
        <form action="#">
          <div className="name-input">
            <input type="text" placeholder="Full Name" required />
            <span class="material-symbols-outlined">person</span>
          </div>
          <div className="email-input">
            <input type="email" placeholder="Email Address" required />
            <span class="material-symbols-outlined">mail</span>
          </div>

          <div className="password-input">
            <input type="password" placeholder="Password" />
            <span class="material-symbols-outlined">visibility</span>
          </div>
          <div className="password-input">
            <input type="password" placeholder="Confirm Password" />
            <span class="material-symbols-outlined">visibility</span>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>

      <div className="form login">
        <header
          onClick={() => {
            setAction("active-login");
          }}
        >
          Login
        </header>
        <form action="#">
        <div className="email-input">
            <input type="email" placeholder="Email Address" required />
            <span class="material-symbols-outlined">mail</span>
          </div>
          <div className="password-input">
            <input type="password" placeholder="Password" />
            <span class="material-symbols-outlined">visibility</span>
          </div>
          <input type="submit" value="Login" />
          <span
            className="signup-link"
            onClick={() => {
              setAction("active-login");
            }}
          >
            Don't Have an account? <a href="#">Signup</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
