import React, { useState } from "react";
import { Drawer, Button, Radio, Space } from "antd";
import "../../styles/Nav.css";
import menu from "../../assets/icons/menu.png";
import { useHistory } from "react-router";

export default function Nav() {
  const [visible, setvisible] = useState(false);
  const history = useHistory();

  const ToggelNav = () => setvisible(!visible);

  const Signout = () => {
    localStorage.removeItem("token");
    history.replace({ pathname: "/login" });
  };

  const Navigate = (name) => {
    switch (name) {
      case "staff": {
        history.push({ pathname: "/staff" });
        break;
      }
      case "roles": {
        history.push({ pathname: "/roles" });
        break;
      }
      case "restaurants": {
        history.push({ pathname: "/restaurants" });
        break;
      }
    }
  };

  return (
    <div className="NavBarRoot">
      <button className="navBtn" onClick={ToggelNav}>
        <img src={menu} style={{ width: "4.5vh" }} />
      </button>
      <Drawer
        title="DashBoard"
        placement={"left"}
        onClose={ToggelNav}
        visible={visible}
        key={"sha123"}
      >
        <p className="NavChild" onClick={() => Navigate("staff")}>
          Manage Staff
        </p>
        <p className="NavChild" onClick={() => Navigate("roles")}>
          Manage Roles
        </p>
        <p className="NavChild" onClick={() => Navigate("restaurants")}>
          Manage Restaurants
        </p>
        <div className="NavChild" onClick={Signout}>
          Sign Out
        </div>
      </Drawer>
    </div>
  );
}
