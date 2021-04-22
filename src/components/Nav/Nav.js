import React, { useState } from "react";
import { Drawer, Button, Radio, Space } from "antd";
import "../../styles/Nav.css";
import menu from "../../assets/icons/menu.png";
export default function Nav() {
  const [visible, setvisible] = useState(false);

  const ToggelNav = () => setvisible(!visible);

  return (
    <div className="NavBarRoot">
      <button className="navBtn" onClick={ToggelNav}>
        <img src={menu} width="4.5vh" />
      </button>
      <Drawer
        title="DashBoard"
        placement={"left"}
        onClose={ToggelNav}
        visible={visible}
        key={"sha123"}
      >
        <p>Manage Staff</p>
        <p>Manage Roles</p>
      </Drawer>
    </div>
  );
}
