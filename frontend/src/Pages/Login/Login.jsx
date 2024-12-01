import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import logo from "../../Assets/logo.png";
import "./Login.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErr(null); // Clear error on input change
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const isNotEmpty = (value) => value.trim() !== "";

    // Validate fields
    if (!isNotEmpty(inputs.username) || !isNotEmpty(inputs.password)) {
      setErr("Both username and password are required.");
      return;
    }

    try {
      await login(inputs);
      navigate("/admin");
    } catch (err) {
      setErr(err.response?.data || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleLogin}>
        <div className="form-header">
          <img src={logo} alt="Logo" className="centered-logo" />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className="input"
            placeholder="Enter Your Username"
            name="username"
            value={inputs.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="input"
            placeholder="Enter Your Password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </div>

        {err && <p className="error-message">{err}</p>}

        <button type="submit" className="button-submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
