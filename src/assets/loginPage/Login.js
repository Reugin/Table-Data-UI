import "./login.css";

function Login() {
  const signupTogleHandler = () => {
    const wrapper = document.querySelector(".wrapper"),
      loginHeader = document.querySelector(".login header");
    wrapper.classList.remove("active");
  };

  const loginTogleHandler = () => {
    const wrapper = document.querySelector(".wrapper"),
      signupLink = document.querySelector(".signup-link"),
      signupHeader = document.querySelector(".signup header");
    wrapper.classList.add("active");
  };

  const showPassword = () => {
    const passwordCheck = document.querySelector(".checkbox"),
      password = document.querySelector(".password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  return (
    <div className="wrapper">
      <div className="form signup" id="signup">
        <header onClick={signupTogleHandler}>Signup</header>
        <form action="#">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" required />
          <input type="submit" value="Signup" />
        </form>
      </div>

      <div className="form login">
        <header onClick={loginTogleHandler}>Login</header>
        <form action="#">
          <input type="email" placeholder="Email Address" required />
          <input
            type="password"
            placeholder="password"
            className="password"
            required
          />
          <div className="checkbox">
            <input type="checkbox" id="passwordCheck" onClick={showPassword} />
            <label htmlFor="checkbox">Show Password</label>
          </div>
          <input type="submit" value="Login" />
          <span className="signup-link" onClick={signupTogleHandler}>
            Don't Have an account? <a href="#">Signup</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
