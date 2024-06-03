import axios from "axios";
import "./signUp.scss";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2000/auth/signup", {
        username,
        email,
        password,
      })
      .then((res) => {
        if (res.data === "ok") {
          navigate("/home");
        }
        setUsername("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        // console.log(err.response.data);
        if (err.response.data === "User already registered") {
          navigate("/login");
          alert("User already exists");
        }
      });
  };

  return (
    <div className="sign-up-container search">
      <h2>Sign up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="search__input"
          placeholder="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="search__input"
          placeholder="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="**********"
          required
          className="search__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="low">
          <button type="submit">Sign up</button>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
