import React from "react";
import app from "firebase";

const logOutUser = () => {
  app.auth().signOut();
};
const Logout = () => {
  return <button onClick={logOutUser} children="Log Out" />;
};
export default Logout;
