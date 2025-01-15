import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Input from "../../components/Input";
import AuthHeader from "../../components/AuthHeader";

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
    statusComponent = <div>Oops: {message}</div>;
  } else if (isLoading) {
    statusComponent = <div>Creating user profile... </div>;
  }

  return (
    <div>
      <AuthHeader text="New Account" />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "50%",
          margin: "auto",
        }}
      >
        <label>
          Email:
          <Input
            name="email"
            value={email}
            onChange={(value) => setEmail(value)}
          />
        </label>
        <label>
          Password:
          <Input
            name="password"
            value={password}
            onChange={(value) => setPassword(value)}
          />
        </label>
        <label>
          Username:
          <Input
            name="username"
            value={username}
            onChange={(value) => setUsername(value)}
          />
        </label>

        <button type="submit">Login</button>
      </form>
      {statusComponent}
      <span>
        Already have an account? <Link to={"/login"}>Login</Link>
      </span>
    </div>
  );
};

export default Login;
