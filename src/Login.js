import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

//rfce

function Login() {
  console.log("dd", accessUrl);
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      {/** Login with spotify button */}
      <a href="{ accessUrl }">Login with Spotify</a>
    </div>
  );
}

export default Login;
