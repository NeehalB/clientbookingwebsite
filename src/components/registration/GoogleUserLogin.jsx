import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GoogleUserLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(user);
          localStorage.setItem("token", user.access_token);
          localStorage.setItem("user", res.data);
          console.log(res.data);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
  };

  return (
    <div>
      <Button onClick={() => login()}>Sign in with Google 🚀 </Button>
    </div>
  );
};

export default GoogleUserLogin;
