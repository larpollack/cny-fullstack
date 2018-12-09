import React from "react";
import app from "firebase";

const logOutUser = () => {
  app.auth().signOut();
};
const Logout = () => {
  return (
    <button className="log" onClick={logOutUser} children="Log Out">
      <i className="fa fa-sign-out" aria-hidden="true" /> Log out
    </button>
  );
};
export default Logout;
