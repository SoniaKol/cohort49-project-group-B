import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Input from "../../components/Input";
import AuthHeader from "../../components/AuthHeader";
import "../../styles/signup.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const onSuccess = () => {
    setEmail("");
    setPassword("");
    setUsername("");

    setTimeout(() => {
      navigate("/");
    }, 300);
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/signup",
    onSuccess,
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      username,
    };

    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  let statusComponent = null;
  if (error != null) {
    const message = error.message || "An error occurred";
    statusComponent = <div className="signup-status">Oops: {message}</div>;
  } else if (isLoading) {
    statusComponent = (
      <div className="signup-status">Creating user profile... </div>
    );
  }

  return (
    <div className="signup">
      <AuthHeader text="New Account" />
      <div className="signup-wrap">
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <Input
              className="signup-input"
              name="email"
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </label>
          <label>
            Password:
            <Input
              className="signup-input"
              name="password"
              value={password}
              onChange={(value) => setPassword(value)}
            />
          </label>
          <label>
            Username:
            <Input
              className="signup-input"
              name="username"
              value={username}
              onChange={(value) => setUsername(value)}
            />
          </label>
          <p className="signup-text">
            By continuing, you agree to <span>Terms of Use </span>and{" "}
            <span>Privacy Policy</span>.
          </p>

          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
        {statusComponent}
        <div className="signup-footer">
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
