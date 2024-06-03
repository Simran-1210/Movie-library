import { useState } from "react";
import axios from "axios";
import ButtonPrimary from "../../ui/ButtonPrimary/ButtonPrimary";
import "./resetPswd.scss";
const ResetPswd = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = (e) => {
    // TODO: Implement the logic for resetting the password
    // You can use an API call to send a password reset email to the user's email address

    // Example API call using fetch:
    e.preventDefault();
    axios
      .post("http://localhost:2000/auth/reset", {
        email,
      })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        if (data.success) {
          setMessage("Password reset email sent!");
        } else {
          setMessage("Failed to send password reset email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred while resetting the password.");
      });
  };

  return (
    <div className="sign-up-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="search__input"
      />
      <ButtonPrimary className="btnn" onClick={handleResetPassword}>
        Reset Password
      </ButtonPrimary>
      <p>{message}</p>
    </div>
  );
};

export default ResetPswd;
