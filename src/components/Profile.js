import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    dispatch(logout());
    history.push("/");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <p>
        <strong>Full Name :</strong> {user.fullName}
      </p>
      <p>
        <strong>Email :</strong> {user.email}
      </p>
      <p>
        <strong>Password :</strong> {user.password}
      </p>
      <button type="button" id="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
