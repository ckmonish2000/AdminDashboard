import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { Tooltip } from "antd";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RestModal from "./RestModal";
import { useMutation } from "@apollo/client";
import { createRestaurant } from "../../services/mutations";
import { CreateRestaurant } from "./EventHandlers";

export default function Restaurants() {
  const [CreateRest, createdRestdata] = useMutation(createRestaurant);
  const [Open, setOpen] = useState(false);
  // CreateRestaurant(CreateRest)
  return (
    <div>
      <Nav />
      <RestModal Open={Open} setOpen={setOpen} />
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
