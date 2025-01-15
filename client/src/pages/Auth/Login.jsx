import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Input from "../../components/Input";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSuccess = () => {
    setEmail("");
    setPassword("");

    setTimeout(() => {
      navigate("/home");
    }, 300);
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/login",
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
    statusComponent = <div>Login...</div>;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <Input
          name="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />

        <button type="submit">Login</button>
      </form>
      {statusComponent}
      <span>
        Already have an account? <Link to={"/signup"}>Signup</Link>
      </span>
    </div>
  );
};

export default Login;
