import React, { useContext, useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { AdminContext } from "../../App";
import { Table, Tooltip } from "antd";
import { TableStyle } from "../Staff/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Rolecolumns from "./Rolecolumns";
import AddRoles from "./AddRoles";

let Role = () => {
  let { Roles } = useContext(AdminContext);
  const [Open, setOpen] = useState(false);
  const refresh = () => Roles.refetch();
  return (
    <div>
      <Nav />
      <AddRoles open={Open} setOpen={setOpen} refresh={refresh} />
      <div className="TableParent">
        <Table
          loading={typeof Roles.data === "undefined"}
          columns={Rolecolumns}
          dataSource={Roles.data?.roles}
          //   pagination={{ pageSize: 5 }}
          className="Stafftable"
          rowClassName="testRow"
          title={() => <h1 style={{ color: "white" }}>Manage Roles</h1>}
          scroll={true}
          style={TableStyle}
          tableLayout={"auto"}
        />
      </div>
      <Tooltip title="Add New Role">
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
};

export default Role;
