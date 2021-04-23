import React from "react";
import { Allusers } from "../../services/queries";
import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Nav from "../Nav/Nav";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "../../styles/Staffs.css";
export default function Staffs() {
  let AllusersData = useQuery(Allusers, { fetchPolicy: "no-cache" });
  let filterdata = AllusersData.data
    ? AllusersData.data?.allUsers?.filter((val) => val.name !== null)
    : [];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (val, item, index) => {
        console.log(item);
        if (item.name !== null) {
          return <h1>{val}</h1>;
        }
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      render: (val) => (val === "" ? <p>N/A</p> : <p>{val}</p>),
    },
    {
      title: "Staff",
      dataIndex: "isStaff",
      key: "address",
      render: (val) => (val === true ? <p>True</p> : <p>False</p>),
    },
    {
      title: "Edit",
      dataIndex: "id",
      key: "address",
      render: (val) => (
        <span>
          <EditIcon />
        </span>
      ),
    },
    {
      title: "Delete User",
      dataIndex: "id",
      key: "address",
      render: (val) => (
        <span>
          <DeleteIcon />
        </span>
      ),
    },
  ];

  return (
    <div>
      <Nav />
      <div>
        <Table
          style={{ padding: "50pt", margin: "50pt auto" }}
          loading={typeof AllusersData.data === "undefined"}
          columns={columns}
          dataSource={filterdata}
          pagination={false}
        />
      </div>

      <div className="usrBtnPos">
        <AddCircleIcon style={{ fontSize: "30pt" }} className="NewUserBtn" />
      </div>
    </div>
  );
}
