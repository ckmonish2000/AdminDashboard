import React, { useState } from "react";
import { Button, Input, message } from "antd";
import "../../styles/Login.css";
import Logo from "../../assets/icons/logo.png";
import { field, btn } from "./styles";
import { VerifyToken } from "../../services/mutations";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";

export default function Login() {
  let history = useHistory();
  const [LoginFields, setLoginFields] = useState({
    username: "",
    password: "",
  });
  const [CheckCredentials, data] = useMutation(VerifyToken, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.tokenAuth?.token);
      history.push({ pathname: "/" });
    },
  });

  const HandleChange = (e) => {
    setLoginFields({ ...LoginFields, [e.target.name]: e.target.value });
  };

  const HandleLogin = () => {
    if (LoginFields.username !== "" && LoginFields.password !== "") {
      CheckCredentials({
        variables: {
          email: LoginFields.username,
          password: LoginFields.password,
        },
      });
    } else {
      message.warning("Fill in all the fields");
    }
  };

  return (
    <div className="LoginRoot">
      <div className="LoginCard">
        <img src={Logo} className="LoginLogo" />

        <Input
          placeholder="Username"
          name="username"
          onChange={HandleChange}
          style={field}
          type="text"
        />

        <Input
          placeholder="Password"
          name="password"
          onChange={HandleChange}
          style={field}
          type="password"
        />

        <Button style={btn} onClick={HandleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
