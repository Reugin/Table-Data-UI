import { useState, useEffect } from "react";
import "./login.css";
import AlertDialog from "../alerts/AlertDialog";
import api from '../services/Api'
import { useNavigate } from "react-router-dom";

function Login() {
  const [action, setAction] = useState(" ");
  const [checked, setChecked] = useState("not-checked");

  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [username, setUsername] = useState(""); 



  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const closeAlert = () => {
    setAlertOpen(false);
  }

  useEffect(() => {
    setEmail("")
    setPassword("")
    setUsername("")
    setConfirmPassword("")
    setName("")
  }, [action]);
  const navigate = useNavigate(); // Create a history object

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      if(username == "" || password == ""){
        setAlertMessage("Mandatory Fields are Missing")
        setAlertOpen(true)
        return
      }

      const response = await api.login(username, password);

      if(response.status == true){
      }else{
        setAlertMessage("Failed: "+ response.message)
      }
  
      const token = response.data;
  
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        navigate('/dashboard');
      } else {
        setAlertMessage('Token not found in the response');
      }
    } catch (error) {
      setAlertMessage('Login error'+ error.message);
    }
    setAlertOpen(true)
  }

  const handleRegister = async (e) => {
    e.preventDefault(); 

    if (password !== confirmPassword) {
      setAlertMessage("Password Not Matching");
      setAlertOpen(true)
      return;
    }

    try {
      const userData = { name, email, password };
      const response = await api.register(userData);

      if (response.status === true) {
        setAlertMessage('Success '+response.message);
        setAction("active-login")
      }else{
        setAlertMessage('Failed '+ response.message);
      }

    } catch (error) {
      setAlertMessage('Registration error'+error.message);
    }
    setAlertOpen(true)
  }

  return (
    <div className={action === "active-login" ? "wrapper active-login" : "wrapper"}>
      <div className="form signup" id="signup">
        <header onClick={() => setAction(" ")}>
          Signup
        </header>
        <form action="#">
          <div className="name-input">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className="email-input">
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="material-symbols-outlined">mail</span>
          </div>
          <div className="password-input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="material-symbols-outlined">visibility</span>
          </div>
          <div className="password-input">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className="material-symbols-outlined">visibility</span>
          </div>
          <input type="submit" value="Signup" onClick={handleRegister} />
        </form>
      </div>

      <div className="form login">
        <header onClick={() => setAction("active-login")}>
          Login
        </header>
        <form action="#">
          <div className="email-input">
            <input
              type="email"
              placeholder="Email Address"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="material-symbols-outlined">mail</span>
          </div>
          <div className="password-input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="material-symbols-outlined">visibility</span>
          </div>
          <input type="submit" value="Login" onClick={handleSignIn} />
          <span
            className="signup-link"
            onClick={() => setAction("active-login")}
          >
            Don't Have an account? <a href="#">Signup</a>
          </span>
        </form>
      </div>

      <AlertDialog open={alertOpen} message={alertMessage} onClose={closeAlert} />
    </div>
  );
}

export default Login;
