import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { Tooltip } from "antd";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RestModal from "./RestModal";

export default function Restaurants() {
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <Nav />
      <RestModal />
      <Tooltip title="Add Restaurant">
        <div className="usrBtnPos">
          <AddCircleIcon
            onClick={() => setOpen(true)}
            style={{ fontSize: "30pt" }}
            className="NewUserBtn"
          />
        </div>
      </Tooltip>
    </div>
  );
}
