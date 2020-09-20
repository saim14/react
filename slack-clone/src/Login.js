import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png"
          alt="slack logo"
        />
        <h1>Sign in to F3 Society Work-rooms</h1>
        <p>f3society.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
