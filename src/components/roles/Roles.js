import React, { useContext, useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { AdminContext } from "../../App";
import { Table } from "antd";
import { TableStyle } from "../Staff/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
let Role = () => {
  let { Roles, Permissions } = useContext(AdminContext);
  console.log(Roles, Permissions);
  const columns = [
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
        // onClick={() => HandleDelete(val, item.name)}
        <span>
          <DeleteIcon className="delicon" />
        </span>
      ),
    },
  ];
  return (
    <div>
      <Nav />
      <div className="TableParent">
        <Table
          loading={typeof Roles.data === "undefined"}
          columns={columns}
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
    </div>
  );
};

export default Role;
