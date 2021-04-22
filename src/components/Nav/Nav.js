import React, { useState } from "react";
import { Drawer, Button, Radio, Space } from "antd";

export default function Nav() {
  const [visible, setvisible] = useState(false);

  const ToggelNav = () => setvisible(!visible);

  return (
    <div>
      <button onClick={ToggelNav}> clis</button>
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
