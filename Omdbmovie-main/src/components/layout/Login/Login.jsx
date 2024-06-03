import axios from "axios";
import "./logIn.scss";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  //   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2000/auth/login", {
        // username,
        email,
        password,
      })
      .then((res) => {
        if (res.data.message === "ok") {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log({ message: err });

        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="sign-up-container search">
      <h2>Login</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
          <Link to="/signup" className="link">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
