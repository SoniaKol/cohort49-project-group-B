import React from "react";

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <a href="http://localhost:3000/auth/google/callback">
        <button>Sign in with Google</button>
      </a>
    </div>
  );
};

export default SignIn;
