import React, { useState } from "react";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user === "rooble") {
      props.userN(user);
    } else {
      setShowError(true); 
      setTimeout(() => setShowError(false), 2000); // Close popup after 2 seconds
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Enter Your username"
          onChange={(event) => setUser(event.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      {showError && (
        <div className="popup">
          <div className="icon">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <p>User Not Found  </p>
          
        </div>
      )}
    </div>
  );
};

export default Login;

