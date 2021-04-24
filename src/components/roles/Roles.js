import React, { useContext, useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { AdminContext } from "../../App";
import { Table, Tooltip } from "antd";
import { TableStyle } from "../Staff/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddRoles from "./AddRoles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { DeleteRole } from "../../services/mutations";
import { useMutation } from "@apollo/client";

let Role = () => {
  let { Roles } = useContext(AdminContext);
  const [Open, setOpen] = useState(false);
  let [DeleteRoles, DeletedData] = useMutation(DeleteRole);
  const refresh = () => Roles.refetch();

  const HandleDelete = (e, name) => {
    DeleteRoles({ variables: { id: e } });
    refresh();
  };

  const Rolecolumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (val, item, index) => {
        if (item.name !== null) {
          return val;
        }
      },
    },
    {
      title: "Edit",
      dataIndex: "id",
      key: "address",
      render: (val, item) => (
        <span
        //   onClick={() => {
        //     setopenEdit(true);
        //     setselected(item);
        //   }}
        >
          <EditIcon className="editicon" />
        </span>
      ),
    },
    {
      title: "Remove Staff",
      dataIndex: "id",
      key: "address",
      render: (val, item) => (
        <span onClick={() => HandleDelete(val, item.name)}>
          <DeleteIcon className="delicon" />
        </span>
      ),
    },
  ];

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
