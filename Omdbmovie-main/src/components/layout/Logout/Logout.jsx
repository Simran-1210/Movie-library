import { useNavigate } from "react-router-dom";

import "./logout.scss";
import axios from "axios";
const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:2000/auth/logout", { withCredentials: true })
      .then((res) => {
        if (res.data === "Logged out successfully") {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="logout">
      <button className="button-87" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
